import { Section } from 'astro-boilerplate-components';
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiAstro,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Astro', icon: SiAstro },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'SQL', icon: SiPostgresql },
  { name: 'Nest.js', icon: SiNestjs },
  { name: 'Java', icon: FaJava },
  { name: 'Git/GitHub', icon: FaGitAlt },
  { name: 'Docker', icon: FaDocker },
];

const Technologies = () => (
  <Section title="Technologies">
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="rounded-lg border border-white p-4 text-center transition-colors duration-200 hover:bg-white hover:text-black"
        >
          <tech.icon size={40} className="mx-auto mb-2" />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  </Section>
);

export { Technologies };
