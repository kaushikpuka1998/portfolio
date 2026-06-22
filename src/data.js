// Edit everything about your portfolio here.

export const profile = {
  name: 'Kaushik Ghosh',
  resumeUrl: 'https://drive.google.com/file/d/1SNkkToB1r-UUPWoNIhO7IpYgLjd1I8lq/view',
  email: 'kaushikghosh.sde@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kgstrivers',
  github: 'https://github.com/kaushikpuka1998',
  medium: 'https://medium.com/kgstrivers',
}

export const metrics = [
  { num: '712→12ms', label: 'API latency reduced via cursor pagination' },
  { num: '60%', label: 'Reporting time cut with Elasticsearch' },
  { num: '5yrs', label: 'Backend-heavy engineering' },
  { num: '17K+', label: 'LinkedIn followers @kgstrivers' },
]

export const experience = [
  {
    when: 'Mar 2025 — Present',
    company: 'Guidewire',
    role: 'Software Engineer 2',
    location: 'Bangalore · ClaimCenter & Contact Manager',
    points: [
      'Revamped ClaimCenter & Contact Manager in a 5-engineer team, cutting claim processing time by 20% via Workers Compensation API for the ANZ market.',
      'Built backend + React for Time-based Obligation, auto-restarting workflows on reopened claims and improving lifecycle compliance.',
      'Led code reviews, mentored 2 junior engineers, and leveraged Copilot, Claude & CodeLift to raise code quality.',
    ],
  },
  {
    when: 'Nov 2023 — Oct 2024',
    company: 'Tekion',
    role: 'Software Engineer 2 · Backend (Java)',
    location: 'Bangalore · DRP Sales Cloud Platform & Analytics',
    points: [
      'Enhanced Champion Details & integrated a Phase Gate API on the Sales Cloud platform.',
      'Enforced 80% unit-test coverage for Deal Compare & Onboarding using JUnit5, Mockito & SonarQube.',
      'Built Elasticsearch reporting for 5 KPIs, reducing reporting time by 60%.',
    ],
  },
  {
    when: 'Feb 2023 — Aug 2023',
    company: 'Coding Ninjas',
    role: 'SDE 1 · Full-stack (RoR)',
    location: 'Gurugram · Studio team',
    points: [
      'Shipped the Exit & Resume Leaderboard, boosting engagement 40%.',
      'Built Articles & Discussions section — 50% lift in profile section usage.',
      'Redesigned access flow & emailer system, +25% user satisfaction.',
    ],
  },
  {
    when: 'Sep 2021 — Feb 2023',
    company: 'RailYatri',
    role: 'Software Engineer',
    location: 'Noida · Train-Ticket System',
    points: [
      'Streamlined the Train-Ticket backend in Ruby on Rails (TDD/Scrum), cutting booking time 35%.',
      'Built Review Component & Tatkal Refund Calculator — complaints down 50%.',
      'Added automated cancellation emails, lifting retention by 15%.',
    ],
  },
]

export const projects = [
  {
    title: 'TrainTicker',
    badge: 'Spring Boot',
    desc: 'Indian Railways booking engine — PNR-based seat allocation, cyclic berth-type assignment, Redis DTO caching and typed exception handling via @RestControllerAdvice.',
    tags: ['Java', 'Spring Boot', 'JPA / Hibernate', 'Redis', 'PostgreSQL'],
    code: 'https://github.com/kaushikpuka1998',
    demo: '',
  },
  {
    title: 'NodeAPI',
    badge: 'REST · Node.js',
    desc: 'Cloud-native REST API on AWS RDS MySQL with JWT auth, BcryptJS hashing and email-presence validation — built to showcase production-style API design.',
    tags: ['Node.js', 'Express', 'AWS RDS', 'MySQL', 'JWT'],
    code: 'https://github.com/kaushikpuka1998',
    demo: '',
  },
  {
    title: 'Library Management',
    badge: 'Ruby on Rails',
    desc: 'Microservice library system on RoR MVC with a separated REST API consumed via RestClient. Redis-backed CRUD boosting DB performance 40%.',
    tags: ['Ruby on Rails', 'MySQL', 'Redis', 'Devise'],
    code: 'https://github.com/kaushikpuka1998',
    demo: '',
  },
  {
    title: 'Food Grazo',
    badge: 'Android · Java',
    desc: 'Native Android food-ordering app with Facebook / Gmail / Phone auth and GPay + Razorpay payments. Firebase data store, UI designed in Adobe XD.',
    tags: ['Java', 'Firebase', 'Retrofit2', 'AWS S3', 'Razorpay'],
    code: 'https://github.com/kaushikpuka1998',
    demo: '',
  },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'Ruby', 'SQL', 'TypeScript', 'Go', 'C++'] },
  { group: 'Frameworks', items: ['Spring Boot', 'Ruby on Rails', 'Microservices', 'Flask', 'JUnit5', 'Mockito', 'Cucumber'] },
  { group: 'Data & Messaging', items: ['Kafka', 'Elasticsearch', 'Redis', 'PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Jenkins', 'TeamCity', 'Beanstalk'] },
  { group: 'Tools & Practices', items: ['Git / Agile', 'Jira', 'Design Patterns', 'Gradle', 'Kibana', 'TDD / BDD'] },
  { group: 'AI-Assisted Dev', items: ['Claude Code', 'GitHub Copilot', 'CodeLift'] },
]

export const marqueeWords = [
  'Java', 'Spring Boot', 'Kafka', 'Microservices', 'Elasticsearch',
  'Redis', 'System Design', 'Distributed Systems', 'PostgreSQL', 'AWS',
]
