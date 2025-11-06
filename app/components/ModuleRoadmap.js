import { missionModules } from '../data/modules';

export default function ModuleRoadmap() {
  return (
    <section className="section" id="missions">
      <h2 style={{ fontSize: '2.1rem', marginBottom: '12px' }}>Mission Modules</h2>
      <p className="muted" style={{ marginBottom: '24px' }}>
        Four cinematic chapters mix JavaScript ES6 upgrades with authentic AngularJS builds. Every mission ends in a
        mini-demo you can show off.
      </p>
      <div className="module-grid">
        {missionModules.map(module => (
          <article key={module.id} className="module-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <strong>{module.title}</strong>
              <span className="muted">{module.duration}</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '14px' }}>{module.focus}</p>
            <ul style={{ paddingLeft: '18px', color: '#c9d7ff', fontSize: '0.92rem' }}>
              {module.highlights.map(item => (
                <li key={item} style={{ marginBottom: '6px' }}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: '12px', fontSize: '0.9rem' }}><strong>Quest Reward:</strong> {module.takeaway}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
