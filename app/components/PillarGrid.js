import { angularPillars } from '../data/modules';

export default function PillarGrid() {
  return (
    <section className="section" id="pillars">
      <h2 style={{ fontSize: '2.1rem', marginBottom: '20px' }}>The AngularJS Pillars You\'ll Befriend</h2>
      <p className="muted" style={{ marginBottom: '32px', maxWidth: '720px' }}>
        AngularJS can feel like an ancient temple. We turned the pillars into friendly guides ready to show how
        controllers, directives, and scopes groove together.
      </p>
      <div className="card-grid">
        {angularPillars.map(pillar => (
          <article key={pillar.title} className="card">
            <span style={{ fontSize: '2.4rem' }}>{pillar.emoji}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
