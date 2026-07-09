import React, { useCallback, useRef, useState } from 'react';
import './About.css';
import './animations.css';
import { TypeAnimation } from 'react-type-animation';
import SparkleCatch from './SparkleCatch';

const PX_COLORS = ['var(--pink)', 'var(--yellow)', 'var(--mint)', 'var(--lav)'];
const PX_GLYPHS = ['♥', '✦', '</>', '★', '▶', '1UP'];

function About() {
  const [player, setPlayer] = useState(1);
  const [score, setScore] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const [flash, setFlash] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const audioCtxRef = useRef(null);
  const seedRef = useRef(0);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Synthesised retro "coin" blip — no audio assets needed.
  const playBlip = useCallback(() => {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtxRef.current) audioCtxRef.current = new Ctx();
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(988, now);        // B5
      osc.frequency.setValueAtTime(1319, now + 0.08); // E6
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch (e) {
      /* audio is a bonus — never let it break the click */
    }
  }, []);

  const handlePlayerClick = useCallback(() => {
    setPlayer((p) => (p >= 99 ? 1 : p + 1));
    setScore((s) => s + 100);
    playBlip();

    // Boot the hidden arcade game — the confetti below is the "insert coin".
    window.setTimeout(() => setGameOpen(true), prefersReducedMotion ? 0 : 260);

    if (prefersReducedMotion) return;

    setFlash(true);
    window.setTimeout(() => setFlash(false), 220);

    // Deterministic-ish spread so builds without Math.random still vary.
    const batch = Array.from({ length: 16 }, (_, i) => {
      seedRef.current += 1;
      const id = `${seedRef.current}-${i}`;
      const angle = (i / 16) * Math.PI * 2;
      const dist = 90 + (i % 4) * 34;
      return {
        id,
        glyph: PX_GLYPHS[i % PX_GLYPHS.length],
        color: PX_COLORS[i % PX_COLORS.length],
        dx: Math.round(Math.cos(angle) * dist),
        dy: Math.round(Math.sin(angle) * dist) - 40,
        rot: (i % 2 ? 1 : -1) * (20 + (i % 5) * 18),
      };
    });
    setConfetti((c) => [...c, ...batch]);
    window.setTimeout(() => {
      const ids = new Set(batch.map((b) => b.id));
      setConfetti((c) => c.filter((b) => !ids.has(b.id)));
    }, 900);
  }, [playBlip, prefersReducedMotion]);

  return (
    <section id="about" className="px-section hero">
      {flash && <div className="hero-flash" aria-hidden="true" />}
      <div className="px-wrap hero-grid">

        {/* ---- text column ---- */}
        <div className="hero-copy">
          <button
            type="button"
            className="hero-badge"
            onClick={handlePlayerClick}
            aria-label={`Player ${player} — click to play a mini-game. Score ${score}`}
          >
            &#9654; PLAYER {player}
            {score > 0 && <span className="hero-badge-score">{score}</span>}
            <span className="hero-confetti" aria-hidden="true">
              {confetti.map((c) => (
                <span
                  key={c.id}
                  className="hero-px"
                  style={{
                    color: c.color,
                    '--dx': `${c.dx}px`,
                    '--dy': `${c.dy}px`,
                    '--rot': `${c.rot}deg`,
                  }}
                >
                  {c.glyph}
                </span>
              ))}
            </span>
          </button>

          <h1 className="hero-name">LEONA<br />CHEN</h1>

          <div className="hero-role">
            &gt; software engineer &amp;{' '}
            <span className="hero-typed">
              <TypeAnimation
                sequence={[
                  'problem solver', 1600,
                  'AI enthusiast', 1600,
                  'computer scientist', 1600,
                  'lifelong learner', 1600,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="hero-bio">
            CS, Math, &amp; Data Science @ Penn State Schreyer Honors College. Currently a Software
            Engineering Intern on the Fan Experience team @ GameChanger. Former Associate Application Developer Co-Op Intern @IBM. On a quest toward full-stack &amp; machine-learning engineering.
          </p>

          <div className="hero-actions">
            <a
              href="/portfolio/Leona Chen Resume.pdf"
              download="Leona Chen Resume.pdf"
              className="pxbtn hero-btn dark"
            >
              R&Eacute;SUM&Eacute; &#8595;
            </a>
            <a href="#contact" className="pxbtn hero-btn yellow">SAY HI</a>
          </div>
        </div>

        {/* ---- collage column ---- */}
        <div className="hero-collage">
          <div className="hero-blob" />

          <span className="hero-spark s1" aria-hidden="true">&#10022;</span>
          <span className="hero-spark s2" aria-hidden="true">&#10022;</span>

          <div className="pol hero-polaroid">
            <span className="tape tape-lav" />
            <div className="hero-photo">
              <img src="/portfolio/profilepic.png" alt="Leona Chen" />
            </div>
            <div className="hero-photo-cap">that&rsquo;s me! &#9733;</div>
          </div>

          {/* decorative pixel stickers */}
          <div className="hero-sticker st-mint" aria-hidden="true">&lt;/&gt;</div>
          <div className="hero-sticker st-lav" aria-hidden="true">&#9829;</div>
        </div>
      </div>

      <div className="torn-strip hero-torn" />

      <SparkleCatch open={gameOpen} onClose={() => setGameOpen(false)} />
    </section>
  );
}

export default About;
