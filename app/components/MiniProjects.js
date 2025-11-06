const projects = [
  {
    title: 'Hero HQ Dashboard',
    description: 'Use `ng-repeat`, filters, and ES6 array helpers to manage an intergalactic hero roster.',
    skills: ['Directives', 'Filters', 'Arrow functions']
  },
  {
    title: 'SnackQuest Kiosk',
    description: 'Combine `$http` with promises to fetch snack supplies, then sort them with destructuring goodness.',
    skills: ['Services', 'Promises', 'Destructuring']
  },
  {
    title: 'Directive Badge Forge',
    description: 'Craft a reusable badge directive and animate it using scope + watchers.',
    skills: ['Custom directives', 'DOM APIs', 'Scope mastery']
  }
];

export default function MiniProjects() {
  return (
    <section className="section" id="projects">
      <h2 style={{ fontSize: '2rem', marginBottom: '14px' }}>Mini Projects That Keep Things Playful</h2>
      <p className="muted" style={{ marginBottom: '24px' }}>
        Every chapter ends with a project card. You get a GitHub-ready README and step-by-step build videos.
      </p>
      <div className="card-grid">
        {projects.map(project => (
          <article key={project.title} className="card" style={{ display: 'grid', gap: '12px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="muted" style={{ fontSize: '0.85rem' }}>
              Skills check: {project.skills.join(' • ')}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
