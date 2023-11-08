import { GradientText, Section } from 'astro-boilerplate-components';

import type { Project } from '@/components/ProjectCard';
import { ProjectCard } from '@/components/ProjectCard';

const projects: Project[] = [
  {
    title: 'Hideout Reminders',
    url: 'https://hideoutreminders.com',
    description:
      "Desktop application that plays reminders with text-to-speech, but pauses them if you aren't in a safe zone in Path of Exile.",
    thumb: 'teemo.jpg',
    tags: ['Rust', 'React', 'Zustand', 'Tauri', 'Desktop', 'Path of Exile'],
  },
  {
    title: 'Dark Prophecies',
    url: 'https://darkprophecies.com',
    description:
      'A physical card game I designed and self-published. Cards were designed using React, TypeScript, HTML, and CSS.',
    thumb: 'teemo.jpg',
    tags: ['React', 'TypeScript', 'Game Design', 'Physical'],
  },
  {
    title: 'Guess the Champion',
    url: 'https://guessthechampion.com',
    description:
      'A Worldle-type game where you guess the League of Legends character skin based on the revealed tiles.',
    thumb: 'teemo.jpg',
    tags: ['React', 'TypeScript', 'Frontend', 'AWS'],
  },
  {
    title: "Watcher's Eye Search",
    url: 'https://vindexus.github.io/WatchersEyeSearch/',
    description:
      'Creates trade links to find particular version of a Path of Exile item based on chosen Aura skills.',
    thumb: 'teemo.jpg',
    tags: ['React', 'TypeScript', 'Frontend', 'Path of Exile'],
  },
  {
    title: 'Rogue Champions',
    url: 'https://shalepumpkin.github.io/RogueChampions/',
    description:
      'A companion web app for the card game Marvel Champions. It adds a campaign mode with rogue-lite features.',
    tags: ['Vue'],
    thumb: 'teemo.jpg',
  },
];

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {projects.map((p, idx) => {
        return <ProjectCard key={idx} project={p} />;
      })}
    </div>
  </Section>
);

export { ProjectList };
