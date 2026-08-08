const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    label: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'Laravel',
      'tRPC',
      'REST APIs',
      'JWT Auth',
    ],
  },
  {
    label: 'Database & DevOps',
    skills: [
      'Supabase',
      'PostgreSQL',
      'Prisma',
      'MongoDB',
      'GitHub Actions',
      'Vercel',
    ],
  },
  {
    label: 'AI & Other',
    skills: ['OpenAI API', 'React Native', 'Flutter', 'Agile/Scrum'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section reveal-card">
      <p className="skills-section__label">Expertise</p>
      <h2 className="skills-section__title">What I Work With</h2>

      <div className="skills-section__groups">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="skills-row">
            <p className="skills-row__label">{group.label}</p>
            <p className="skills-row__list">
              {group.skills.map((skill, index) => (
                <span key={skill}>
                  {index > 0 && (
                    <span className="skills-row__sep" aria-hidden="true">
                      {' '}
                      ·{' '}
                    </span>
                  )}
                  {skill}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
