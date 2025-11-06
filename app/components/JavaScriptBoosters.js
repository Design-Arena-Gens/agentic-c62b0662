import { javascriptBoosters } from '../data/modules';

export default function JavaScriptBoosters() {
  return (
    <section className="section" id="es6">
      <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>ES6 Boosters to Fuel AngularJS Mastery</h2>
      <p className="muted" style={{ marginBottom: '28px', maxWidth: '720px' }}>
        AngularJS might have debuted before ES6, but modern teams blend them for cleaner, more maintainable apps. These
        boosters help your controllers, services, and directives sparkle.
      </p>
      <div className="card-grid">
        {javascriptBoosters.map(booster => (
          <article key={booster.title} className="card" style={{ display: 'grid', gap: '16px' }}>
            <h3>{booster.title}</h3>
            <pre className="code-block"><code>{booster.snippet}</code></pre>
          </article>
        ))}
      </div>
    </section>
  );
}
