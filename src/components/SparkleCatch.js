import React, { useCallback, useEffect, useRef, useState } from 'react';
import './SparkleCatch.css';

/* ------------------------------------------------------------------ *
 * SPARKLE CATCH — the LEONA.EXE hero easter-egg game.
 * Slide the 1P basket to catch Leona's stickers as they rain down.
 * Miss three and it's GAME OVER. Hit the secret score to unlock a
 * hidden message. Canvas-based so it stays buttery at 60fps.
 * ------------------------------------------------------------------ */

const HI_KEY = 'leona.sparkle.hi';
const WIN_SCORE = 50;      // secret unlock threshold
const START_LIVES = 3;

// The falling stickers — same glyphs sprinkled across the site.
const PIECES = [
  { glyph: '♥', color: '#ff2e74', pts: 1 }, // heart  (pink)
  { glyph: '✦', color: '#c9b8ff', pts: 1 }, // sparkle (lav)
  { glyph: '★', color: '#ffd84d', pts: 2 }, // star   (yellow)
  { glyph: '</>',    color: '#8fe0b0', pts: 3 }, // code   (mint, rare + juicy)
];
// Weighted bag: code is rarer than the rest.
const BAG = [0, 0, 0, 1, 1, 1, 2, 2, 3];

function readHi() {
  try {
    return parseInt(window.localStorage.getItem(HI_KEY), 10) || 0;
  } catch (e) {
    return 0;
  }
}

function SparkleCatch({ open, onClose }) {
  const [status, setStatus] = useState('ready'); // ready | playing | over
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(START_LIVES);
  const [hi, setHi] = useState(readHi);
  const [unlocked, setUnlocked] = useState(false);

  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const rafRef = useRef(0);
  const audioRef = useRef(null);
  const game = useRef(null); // mutable per-frame state

  // --- tiny synthesised blips (no audio assets) --------------------
  const beep = useCallback((freq, dur = 0.12, type = 'square', vol = 0.14) => {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioRef.current) audioRef.current = new Ctx();
      const ctx = audioRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(vol, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.02);
    } catch (e) {
      /* audio is a bonus */
    }
  }, []);

  // --- lifecycle: reset when the window opens ----------------------
  useEffect(() => {
    if (open) {
      setStatus('ready');
      setScore(0);
      setLives(START_LIVES);
      setUnlocked(false);
      setHi(readHi());
    }
  }, [open]);

  // --- close on Escape ---------------------------------------------
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const startGame = useCallback(() => {
    setScore(0);
    setLives(START_LIVES);
    setUnlocked(false);
    setStatus('playing');
    beep(988, 0.1);
  }, [beep]);

  // --- the main game loop ------------------------------------------
  useEffect(() => {
    if (status !== 'playing') return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    // Size the canvas to its container, crisp on retina.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.scale(dpr, dpr);

    const paddleW = Math.max(64, W * 0.22);
    const paddleH = 16;
    const paddleY = H - 30;

    const g = {
      W,
      H,
      score: 0,
      lives: START_LIVES,
      paddleX: W / 2 - paddleW / 2,
      targetX: W / 2 - paddleW / 2,
      keyDir: 0,
      items: [],
      lastSpawn: 0,
      spawnGap: 850,
      startTime: 0,
      won: false,
    };
    game.current = g;

    // --- input ---
    const pointerX = (e) => {
      const r = canvas.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      return cx - r.left;
    };
    const onMove = (e) => {
      g.targetX = pointerX(e) - paddleW / 2;
    };
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') g.keyDir = -1;
      else if (e.key === 'ArrowRight' || e.key === 'd') g.keyDir = 1;
    };
    const onKeyUp = (e) => {
      if (['ArrowLeft', 'a', 'ArrowRight', 'd'].includes(e.key)) g.keyDir = 0;
    };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    const spawn = () => {
      const p = PIECES[BAG[Math.floor(Math.random() * BAG.length)]];
      const size = 26;
      g.items.push({
        ...p,
        size,
        x: 12 + Math.random() * (W - 24 - size),
        y: -size,
        vy: 120 + Math.random() * 40 + g.score * 3, // ramps with score
        rot: (Math.random() - 0.5) * 0.6,
        vr: (Math.random() - 0.5) * 2,
      });
    };

    const drawPaddle = () => {
      const x = g.paddleX;
      ctx.save();
      ctx.fillStyle = '#c9b8ff';
      ctx.strokeStyle = '#201826';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.rect(x, paddleY, paddleW, paddleH);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#201826';
      ctx.font = '9px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('1P', x + paddleW / 2, paddleY + paddleH / 2 + 1);
      ctx.restore();
    };

    const drawItem = (it) => {
      ctx.save();
      ctx.translate(it.x + it.size / 2, it.y + it.size / 2);
      ctx.rotate(it.rot);
      ctx.fillStyle = it.color;
      ctx.font = `${it.glyph === '</>' ? 15 : 22}px ui-monospace, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(it.glyph, 0, 0);
      ctx.restore();
    };

    let last = 0;
    const frame = (t) => {
      if (!g.startTime) g.startTime = t;
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;

      // spawn (gap tightens over time)
      g.spawnGap = Math.max(360, 850 - (t - g.startTime) / 60);
      if (t - g.lastSpawn > g.spawnGap) {
        spawn();
        g.lastSpawn = t;
      }

      // move paddle
      if (g.keyDir !== 0) g.targetX += g.keyDir * 520 * dt;
      g.paddleX += (g.targetX - g.paddleX) * Math.min(1, dt * 16);
      g.paddleX = Math.max(0, Math.min(W - paddleW, g.paddleX));

      // update items
      let scored = 0;
      let missed = 0;
      const kept = [];
      for (const it of g.items) {
        it.y += it.vy * dt;
        it.rot += it.vr * dt;
        const caught =
          it.y + it.size >= paddleY &&
          it.y + it.size <= paddleY + paddleH + 14 &&
          it.x + it.size / 2 >= g.paddleX &&
          it.x + it.size / 2 <= g.paddleX + paddleW;
        if (caught) {
          scored += it.pts;
          continue;
        }
        if (it.y > H) {
          missed += 1;
          continue;
        }
        kept.push(it);
      }
      g.items = kept;

      if (scored > 0) {
        g.score += scored;
        setScore(g.score);
        beep(scored >= 3 ? 1568 : 1319, 0.09, 'square', 0.13);
        if (!g.won && g.score >= WIN_SCORE) {
          g.won = true;
          setUnlocked(true);
          beep(1976, 0.25, 'triangle', 0.16);
        }
      }
      if (missed > 0) {
        g.lives -= missed;
        setLives(Math.max(0, g.lives));
        beep(180, 0.18, 'sawtooth', 0.12);
        if (g.lives <= 0) {
          endGame(g.score, g.won);
          return;
        }
      }

      // draw
      ctx.clearRect(0, 0, W, H);
      for (const it of g.items) drawItem(it);
      drawPaddle();

      rafRef.current = requestAnimationFrame(frame);
    };

    const endGame = (finalScore, won) => {
      cancelAnimationFrame(rafRef.current);
      const best = Math.max(readHi(), finalScore);
      try {
        window.localStorage.setItem(HI_KEY, String(best));
      } catch (e) {
        /* private mode — no persistence, no crash */
      }
      setHi(best);
      setUnlocked(won);
      setStatus('over');
      beep(392, 0.3, 'sawtooth', 0.12);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('touchmove', onMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [status, beep]);

  if (!open) return null;

  return (
    <div
      className="sc-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Sparkle Catch mini-game"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sc-cabinet" ref={wrapRef}>
        <span className="sc-tape sc-tape-l" aria-hidden="true" />
        <span className="sc-tape sc-tape-r" aria-hidden="true" />

        <div className="sc-titlebar">
          <span className="sc-dot" aria-hidden="true">&#9670;</span>
          <span className="sc-title">SPARKLE CATCH</span>
          <button
            type="button"
            className="sc-close"
            onClick={onClose}
            aria-label="Close game"
          >
            &#10005;
          </button>
        </div>

        <div className="sc-hud">
          <span className="sc-hud-score">SCORE {score}</span>
          <span className="sc-hud-lives" aria-label={`${lives} lives left`}>
            {Array.from({ length: START_LIVES }, (_, i) => (
              <span key={i} className={i < lives ? 'sc-life' : 'sc-life gone'}>
                &#9829;
              </span>
            ))}
          </span>
          <span className="sc-hud-hi">HI {hi}</span>
        </div>

        <div className="sc-screen">
          <canvas ref={canvasRef} className="sc-canvas" />

          {unlocked && status === 'playing' && (
            <div className="sc-unlock-ribbon" aria-hidden="true">
              &#9733; SECRET UNLOCKED
            </div>
          )}

          {status === 'ready' && (
            <div className="sc-card">
              <p className="sc-card-title">CATCH THE SPARKLES</p>
              <p className="sc-card-sub">
                slide the <b>1P</b> basket &mdash; catch <b>&hearts;</b> stars
                &amp; <b>&lt;/&gt;</b>, miss 3 and it&rsquo;s over.
              </p>
              <p className="sc-card-hint">&larr; &rarr; keys &middot; or drag</p>
              <button type="button" className="sc-play" onClick={startGame}>
                &#9654; INSERT COIN
              </button>
            </div>
          )}

          {status === 'over' && (
            <div className="sc-card">
              <p className="sc-card-title">GAME OVER</p>
              <p className="sc-card-score">{score} PTS</p>
              {score >= hi && score > 0 && (
                <p className="sc-card-new">&#9733; NEW HIGH SCORE!</p>
              )}
              {unlocked && (
                <p className="sc-secret">
                  you found the secret &hearts;
                  <br />
                  <span>now go hire me</span>
                </p>
              )}
              <button type="button" className="sc-play" onClick={startGame}>
                &#8635; RETRY
              </button>
            </div>
          )}
        </div>

        <div className="sc-footer">LEONA.EXE &mdash; press ESC to quit</div>
      </div>
    </div>
  );
}

export default SparkleCatch;
