const timeline = [
  {
    icon: '🔥',
    title: 'Prep the Starship',
    description: 'Warm up with ES6 syntax, modern tooling, and the mindset that AngularJS embraces.'
  },
  {
    icon: '🛰️',
    title: 'Launch Your First App',
    description: 'Spin up modules, controllers, and views while understanding the digest cycle in action.'
  },
  {
    icon: '🛠️',
    title: 'Directive Lab',
    description: 'Experiment with built-in directives and craft your own components to express UI magic.'
  },
  {
    icon: '🌌',
    title: 'Data Galaxy',
    description: 'Communicate with APIs, manage promises, and keep your scopes clean with services.'
  }
];

export default function MissionTimeline() {
  return (
    <section className="section gradient-border" style={{ padding: '1px' }}>
      <div style={{ padding: '50px' }} id="mission-flow">
        <h2 style={{ fontSize: '2.1rem', marginBottom: '18px' }}>Your Zero-to-Hero Flight Path</h2>
        <p className="muted" style={{ marginBottom: '32px', maxWidth: '680px' }}>
          The course blends storytelling, quick wins, and real AngularJS code. Every phase ends with a mini project so
          you can flex what you learned without losing momentum.
        </p>
        <div className="timeline">
          {timeline.map(step => (
            <article key={step.title} className="timeline-item">
              <span>{step.icon}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
