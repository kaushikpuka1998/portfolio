// Edit everything about your portfolio here.

export const profile = {
    name: 'Kaushik Ghosh',
    resumeUrl: 'https://drive.google.com/file/d/1SNkkToB1r-UUPWoNIhO7IpYgLjd1I8lq/view',
    email: 'kaushikghosh.sde@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kgstrivers',
    github: 'https://github.com/kaushikpuka1998',
    medium: 'https://kgstrivers.medium.com/',
    leetcode: 'https://leetcode.com/kgstrivers',
    codechef: 'https://www.codechef.com/users/kaushik_199832'
}

export const metrics = [
    {num: '712→12ms', label: 'API latency reduced via cursor pagination'},
    {num: '60%', label: 'Reporting time cut with Elasticsearch'},
    {num: '5yrs', label: 'Backend-heavy engineering'},
    {num: '17K+', label: 'LinkedIn followers @kgstrivers'},
]

export const experience = [
    {
        when: 'Mar 2025 — Present',
        company: 'Guidewire',
        link: 'https://www.guidewire.com/',
        role: 'Software Engineer 2 · Fullstack (Java & React)',
        location: 'Bangalore,India · ClaimCenter & Contact Manager',
        points: [
            'Revamped ClaimCenter & Contact Manager in a 5-engineer team, cutting claim processing time by 20% via Workers Compensation API for the ANZ market.',
            'Built backend + React for Time-based Obligation, auto-restarting workflows on reopened claims and improving lifecycle compliance.',
            'Led code reviews, mentored 2 junior engineers, and leveraged Copilot, Claude & CodeLift to raise code quality.',
            'Optimized Vulnerability, Policy Verification, Date of Injury & Time-based Obligation workflows across PolicyCenter and ClaimCenter, improving processing speed by 15%.',
            'Fixed interpreter visibility issues and prevented duplicate selections in the Vulnerability module, validating changes with Cucumber UI automation and JUnit.',
            'Strengthened engineering best practices, system stability, and compliance across ANZ insurance workflows.',
        ],
    },
    {
        when: 'Nov 2023 — Mar 2025',
        company: 'Tekion',
        link: 'https://tekion.com/',
        role: 'Software Engineer 2 · Backend (Java)',
        location: 'Bangalore,India · DRP Sales Cloud Platform & Analytics',
        points: [
            'Enhanced Champion Details & integrated a Phase Gate API on the DRP Sales Cloud Platform & Analytics team.',
            'Cut API latency from 712ms to 12ms by implementing cursor-based pagination, dramatically improving response times.',
            'Enforced 80% unit-test coverage for Deal Compare & Onboarding using JUnit5, Mockito & SonarQube.',
            'Built Elasticsearch reporting and dashboards for 5 KPIs, automating report generation and reducing reporting time by 60%.',
            'Ensured high-quality, maintainable code through thorough peer reviews as a Backend Engineer (Java).',
        ],
    },
    {
        when: 'Feb 2023 — Nov 2023',
        company: 'Coding Ninjas',
        link: 'https://www.codingninjas.com/',
        role: 'SDE 1 · Full-stack (RoR)',
        location: 'Gurugram,India · Studio team',
        points: [
            'Shipped the Exit & Resume Leaderboard as a full-stack developer (RoR) on the Studio team, boosting engagement 40%.',
            'Built Articles & Discussions section — 50% lift in profile section usage.',
            'Redesigned access flow UI & built an emailer system for exited users, +25% user satisfaction.',
            'Partnered with Product Management & Designers to drive product development.',
        ],
    },
    {
        when: 'Sep 2021 — Feb 2023',
        company: 'RailYatri',
        link: 'https://www.railyatri.in/',
        role: 'Software Engineer',
        location: 'Noida,India · Train-Ticket System',
        points: [
            'Streamlined the Train-Ticket System backend in Ruby on Rails & JavaScript (TDD/Scrum), optimizing API calls and cutting booking time 35%.',
            'Built the Review Component Page & Tatkal Refund Calculator — customer complaints down 50%.',
            'Added an automated email system for free & partial cancellations, lifting retention by 15%.',
        ],
    },
]

export const projects = [
    {
        title: 'Interview Reader',
        badge: 'Product · Live',
        product: true,
        desc: 'A live reading app for Java, React, Node, SQL, HLD, Microservices, Kafka and Design Pattern interview questions — every answer deep-linkable, searchable and tracked.',
        highlights: [
            'Spring Boot 3.2 / Java 21 API over PostgreSQL 16 — server-side pagination, full-text search, filters by tech, category, difficulty and read status',
            'Redis read-through cache (@Cacheable, 10-min TTL) with a fail-open error handler — Postgres hit only on a miss, never a 500 when Redis is down',
            'Slug URLs per question, infinite scroll, Markdown answers with syntax highlighting, localStorage progress and dark mode',
        ],
        tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'React', 'Vite', 'Tailwind'],
        code: 'https://github.com/kaushikpuka1998/Java-React-Interview-dashboard',
        demo: 'https://interviewreader.up.railway.app/',
    },
    {
        title: 'Meetly',
        badge: 'Product · meetly.co.in',
        product: true,
        desc: 'A paid meeting platform running at meetly.co.in — scheduling, built-in video calls, Calendly-style booking pages and subscriptions in one product.',
        highlights: [
            'Node/Express + MongoDB API and a React 19 SPA — recurring meetings, email invites with .ics, RSVP, and BullMQ/Redis reminder jobs in the organizer\'s timezone',
            'Self-hosted LiveKit on a VPS with UDP networking — per-meeting rooms, scoped tokens, in-browser MP4 recording, live captions, reactions and screen share',
            'Public /book/:username pages with custom branding and slots filtered against real Google Calendar free/busy over OAuth',
            'Freemium billing — Razorpay subscriptions (INR) + Lemon Squeezy (international), admin kill-switch, usage limits and revenue/traffic dashboards',
            'httpOnly-cookie + CSRF auth with Bearer fallback for mobile, rate limiting, and graceful degradation when a provider key is missing',
        ],
        tags: ['NodeJS', 'Express', 'React 19', 'MongoDB', 'LiveKit', 'Redis / BullMQ', 'Razorpay'],
        code: '',
        demo: 'https://www.meetly.co.in',
    },
    {
        title: 'LinkMint',
        badge: 'REST · FastAPI, React',
        desc: 'Self-hosted URL shortener with custom aliases, expiry dates, QR codes and per-link click analytics — Redis-backed link caching and per-IP rate limiting that degrade gracefully to Mongo-only when Redis is down.',
        tags: ['FastAPI', 'Python', 'MongoDB', 'Redis', 'React'],
        code: 'https://github.com/kaushikpuka1998/LinkMint',
        demo: '',
    },
    {
        title: 'TrainTicker',
        badge: 'Spring Boot',
        desc: 'Indian Railways booking engine — PNR-based seat allocation, cyclic berth-type assignment, Redis DTO caching and typed exception handling via @RestControllerAdvice.',
        tags: ['Java', 'Spring Boot', 'JPA / Hibernate', 'Redis', 'PostgreSQL'],
        code: 'https://github.com/kaushikpuka1998/Trainticker',
        demo: '',
    },
    {
        title: 'Payc',
        badge: 'REST · Springboot',
        desc: 'A Spring Boot payment service that processes transactions & publishes each outcome to Kafka, routing successes and failures to separate topics with dedicated consumers. Demonstrates the synchronous-call, asynchronous-fan-out pattern behind real payment systems',
        tags: ['Java', 'Springboot', 'PostgreSQL', 'Kafka', 'JWT'],
        code: '  https://github.com/kaushikpuka1998/PaymentApplication',
        demo: '',
    },
    {
        title: 'NodeAPI',
        badge: 'REST · Node.js',
        desc: 'Cloud-native REST API on AWS RDS MySQL with JWT auth, BcryptJS hashing and email-presence validation — built to showcase production-style API design.',
        tags: ['Node.js', 'Express', 'AWS RDS', 'MySQL', 'JWT'],
        code: 'https://github.com/kaushikpuka1998/NodeAPI',
        demo: '',
    },
    {
        title: 'Library Management',
        badge: 'Ruby on Rails',
        desc: 'Microservice library system on RoR MVC with a separated REST API consumed via RestClient. Redis-backed CRUD boosting DB performance 40%.',
        tags: ['Ruby on Rails', 'MySQL', 'Redis', 'Devise'],
        code: 'https://github.com/kaushikpuka1998/library_mng_ruby',
        demo: 'https://github.com/kaushikpuka1998/library_mng_ruby',
    },
    {
        title: 'Food Grazo',
        badge: 'Android · Java',
        desc: 'Native Android food-ordering app with Facebook / Gmail / Phone auth and GPay + Razorpay payments. Firebase data store, UI designed in Adobe XD.',
        tags: ['Java', 'Firebase', 'Retrofit2', 'AWS S3', 'Razorpay'],
        code: 'https://github.com/kaushikpuka1998',
        demo: 'https://www.youtube.com/watch?v=wQ-3LnS4eiQ',
    },
    {
        title: 'Covigo',
        badge: 'Flutter',
        desc: 'Cross-platform COVID-19 tracker built in Flutter — live case stats with pie-chart visualizations, country-wise data over HTTP APIs, and in-app webview resources with offline connectivity handling.',
        tags: ['Flutter', 'Dart', 'REST API', 'Android/iOS'],
        code: 'https://github.com/kaushikpuka1998/Covigo',
        demo: 'https://www.linkedin.com/feed/update/urn:li:activity:6807305429664849920/',
    }
]

export const skills = [
    {group: 'Languages', items: ['Java', 'Python', 'Ruby', 'SQL', 'TypeScript', 'Go', 'C++']},
    {
        group: 'Frameworks',
        items: ['Spring Boot', 'Ruby on Rails', 'NodeJS', 'Angular', 'React',
            'Microservices', 'Flask', 'JUnit5', 'Mockito', 'Cucumber']
    },
    {group: 'Data & Messaging', items: ['Kafka', 'Elasticsearch', 'Redis', 'PostgreSQL', 'MySQL', 'MongoDB']},
    {group: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Jenkins', 'TeamCity', 'Beanstalk']},
    {group: 'Tools & Practices', items: ['Git / Agile', 'Jira', 'Design Patterns', 'Gradle', 'Kibana', 'TDD / BDD']},
    {group: 'AI-Assisted Dev', items: ['Claude Code', 'GitHub Copilot', 'CodeLift']},
]

export const marqueeWords = [
  'Java', 'Spring Boot', 'Kafka', 'Microservices', 'Elasticsearch',
  'Redis', 'System Design', 'Distributed Systems', 'PostgreSQL', 'AWS',
]
