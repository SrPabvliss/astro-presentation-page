import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import ProfilePhoto from '../images/ImgPerfilFix.jpg';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Pablo Villacrés</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a software developer passionate about enhancing my technical
          skills and tackling new challenges. With expertise in{' '}
          <GradientText>frontend</GradientText> and backend development, I have
          experience working with technologies like{' '}
          <GradientText> Next.js</GradientText>, Tailwind,{' '}
          <GradientText>Nest.js</GradientText>, PostgreSQL, Docker, and
          <GradientText> TypeScript</GradientText>. I'm always eager to learn
          and grow in my field.
        </>
      }
      avatar={
        <div className="flex justify-center">
          <img
            className="h-60 w-60 rounded-full border-4 border-sky-700 object-cover shadow-lg"
            src={ProfilePhoto.src}
            alt="Avatar image"
            loading="lazy"
          />
        </div>
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/pablo-villacres-26a060125/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://github.com/SrPabvliss">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
