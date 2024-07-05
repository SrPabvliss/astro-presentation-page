import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import BlogCafe from '../images/coffee-blog/blog-cafe.jpg';
import FrontStore from '../images/frontend-store/frontend-store.jpg';
import LookPay from '../images/lookpay/lookpay.jpg';
import PostSystem from '../images/pos-system/pos-system.jpg';
import RockFestival from '../images/rock-festival/rock-festival.jpg';
import UtaWeb from '../images/uta-web/uta-web.jpg';

const secondaryProjects = [
  {
    name: 'LookPay',
    description:
      'Bank movement simulation application using facial recognition as a security method to confirm payments.',
    link: '/',
    img: {
      src: LookPay.src,
      alt: 'LookPay',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Next.js 13' },
      { color: ColorTags.ROSE, name: 'SpringBoot' },
      { color: ColorTags.SKY, name: 'Tailwind CSS' },
      { color: ColorTags.YELLOW, name: 'TypeScript' },
    ],
  },
  {
    name: 'POS System',
    description:
      'Point of sale application to manage your business and generate invoices valid for the SRI, involving electronic signatures.',
    link: '/',
    img: {
      src: PostSystem.src,
      alt: 'PostSystem',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Next.js 14' },
      { color: ColorTags.ROSE, name: 'SpringBoot' },
      { color: ColorTags.SKY, name: 'Tailwind CSS' },
      { color: ColorTags.YELLOW, name: 'TypeScript' },
    ],
  },
  {
    name: 'Uta Web Project',
    description:
      'Website showcasing the entire academic offer of the Technical University of Ambato, aiming to improve the current page by presenting information more clearly and organized.',
    link: '/',
    img: {
      src: UtaWeb.src,
      alt: 'Uta Web Project',
    },
    categories: [
      { color: ColorTags.FUCHSIA, name: 'Astro' },
      { color: ColorTags.SKY, name: 'CSS' },
    ],
  },
  {
    name: 'Rock & EDM Festival',
    description:
      'Simulation for a music festival for educational purposes, no functionalities included.',
    link: '/',
    img: {
      src: RockFestival.src,
      alt: 'Rock & EDM Festival',
    },
    categories: [
      { color: ColorTags.ROSE, name: 'HTML' },
      { color: ColorTags.SKY, name: 'CSS' },
      { color: ColorTags.YELLOW, name: 'JavaScript' },
    ],
  },
  {
    name: 'FrontEndStore',
    description:
      'Simulation of an e-commerce for educational purposes, no functionalities included.',
    link: '/',
    img: {
      src: FrontStore.src,
      alt: 'FrontEndStore',
    },
    categories: [
      { color: ColorTags.ROSE, name: 'HTML' },
      { color: ColorTags.SKY, name: 'CSS' },
    ],
  },
  {
    name: 'Blog de Café',
    description:
      'Simulation of a coffee blog for educational purposes, no functionalities included.',
    link: '/',
    img: {
      src: BlogCafe.src,
      alt: 'Blog de Café',
    },
    categories: [
      { color: ColorTags.ROSE, name: 'HTML' },
      { color: ColorTags.SKY, name: 'CSS' },
    ],
  },
];

const SecondaryProject = ({
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
  <div className="rounded-lg border border-gray-700 bg-gray-800 p-4 transition-colors hover:bg-gray-700">
    <a href={link}>
      <img
        className="mb-2 h-32 w-full rounded-md object-cover"
        src={img.src}
        alt={img.alt}
      />
      <h3 className="mb-1 text-lg font-semibold text-white">{name}</h3>
      <p className="mb-2 text-sm text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((tag) => (
          <Tags key={tag.name} color={tag.color as any}>
            {tag.name}
          </Tags>
        ))}
      </div>
    </a>
  </div>
);

const OtherProjectSection = () => (
  <Section
    title={
      <>
        Other <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {secondaryProjects.map((project) => (
        <SecondaryProject
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

export { OtherProjectSection };
