import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import Ambivalence from '../images/clothstore/store/landing.jpg';
import Gendocs from '../images/gendocs/actas-list-view.jpg';
import RestaurantApp from '../images/restaurant-app/payment.jpeg';
import SalesForce from '../images/sales-force/dashboard.jpg';

const projects = [
  {
    name: 'GenDocs V3',
    description:
      'Designed and developed a user interface for document management and administrative processes using Clean Architecture. Technologies used: Next.js 14, Nest.js, PostgreSQL, Docker, TypeScript.',
    link: '/',
    img: {
      src: Gendocs.src,
      alt: 'GenDocs v3',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Next.js 14' },
      { color: ColorTags.INDIGO, name: 'Nest.js' },
      { color: ColorTags.SKY, name: 'PostgreSQL' },
      { color: ColorTags.EMERALD, name: 'Docker' },
      { color: ColorTags.YELLOW, name: 'TypeScript' },
    ],
  },
  {
    name: 'Sales Force',
    description:
      'Application to optimize commercial management. Facilitates product quoting and evaluation of sales performance. Technologies used: Next.js 14, Nest.js, Shadcn/ui, Zustand.',
    link: '/',
    img: {
      src: SalesForce.src,
      alt: 'Sales Force',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Next.js 14' },
      { color: ColorTags.INDIGO, name: 'Nest.js' },
      { color: ColorTags.ROSE, name: 'Shadcn/ui' },
      { color: ColorTags.SKY, name: 'Zustand' },
      { color: ColorTags.YELLOW, name: 'TypeScript' },
    ],
  },
  {
    name: 'Ambivalence E-commerce',
    description:
      'Designed and developed a user interface for document management and administrative processes using Clean Architecture. Technologies used: Next.js 14, Nest.js, PostgreSQL, Docker, TypeScript.',
    link: '/',
    img: {
      src: Ambivalence.src,
      alt: 'Ambivalence E-commerce',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Next.js 14' },
      { color: ColorTags.INDIGO, name: 'Nest.js' },
      { color: ColorTags.SKY, name: 'PostgreSQL' },
      { color: ColorTags.EMERALD, name: 'Docker' },
      { color: ColorTags.YELLOW, name: 'TypeScript' },
    ],
  },

  {
    name: 'La Jefecita Restaurant',
    description:
      'Application that facilitates order management, improves staff coordination, and ensures efficient service. Technologies used: Next.js 14, Nest.js, Zustand, Websockets.',
    link: '/',
    img: {
      src: RestaurantApp.src,
      alt: 'La Jefecita Restaurant',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Next.js 14' },
      { color: ColorTags.INDIGO, name: 'Nest.js' },
      { color: ColorTags.ROSE, name: 'Zustand' },
      { color: ColorTags.SKY, name: 'Websockets' },
      { color: ColorTags.YELLOW, name: 'TypeScript' },
    ],
  },
];

const CustomProject = ({
  name,
  description,
  link,
  img,
  categories,
}: {
  name: string;
  description: string;
  link: string;
  img: { src: string; alt: string };
  categories: { color: string; name: string }[];
}) => (
  <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors hover:bg-gray-700">
    <a href={link}>
      <img
        className="mb-4 h-72 w-full rounded-md object-cover"
        src={img.src}
        alt={img.alt}
      />
      <h3 className="mb-2 text-xl font-semibold text-white">{name}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((tag: any) => (
          <Tags key={tag.name} color={tag.color}>
            {tag.name}
          </Tags>
        ))}
      </div>
    </a>
  </div>
);

const FeaturedProjectsSection = () => (
  <Section
    title={
      <>
        Featured <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <CustomProject
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          img={project.img}
          categories={project.categories}
        />
      ))}
    </div>
  </Section>
);

export { FeaturedProjectsSection };
