import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Colin Kierans</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a web developer and game designer from Vancouver, BC. I love
          making games, I love writing code, and I love sharing my knowledge and
          experience with up-and-coming developers.
        </>
      }
			avatar={
				<>
					<img src={'/colinface.png'} alt={'Colin Kierans'} />
				</>
			}
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
