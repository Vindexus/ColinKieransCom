import { GradientText, Section } from 'astro-boilerplate-components';

import type { Project } from '@/components/ProjectCard';
import { ProjectCard } from '@/components/ProjectCard';

const projects: Project[] = [
  {
    title: 'Rune Scry',
    url: 'https://runescry.ca',
    description:
      'A search tool for Diablo 2 Runewords, with a key:value searching syntax.',
    tags: ['React', 'TypeScript', 'Frontend', 'Claude'],
    year: 2026,
  },
  {
    title: 'Hideout Reminders',
    url: 'https://hideoutreminders.com',
    description:
      "Desktop application that plays reminders with text-to-speech, but pauses them if you aren't in a safe zone while playing Path of Exile.",
    tags: ['Rust', 'React', 'Zustand', 'Tauri', 'Desktop', 'Path of Exile'],
    year: 2024,
  },
  {
    title: 'Dark Prophecies',
    url: 'https://darkprophecies.com',
    description:
      'A physical card game I designed and self-published. Cards were designed using React, TypeScript, HTML, and CSS.',
    tags: ['React', 'TypeScript', 'Game Design', 'Physical'],
    year: 2024,
  },
  {
    title: 'Guess the Magic Card',
    url: 'https://guessthemagiccard.com.com',
    description:
      'A Worldle-type game where you guess the Magic the Gathering card based on the revealed tiles of its art.',
    tags: ['React', 'TypeScript', 'Frontend', 'AWS'],
    year: 2022,
  },
  {
    title: "Watcher's Eye Search",
    url: 'https://vindexus.github.io/WatchersEyeSearch/',
    description:
      'Creates trade links to find particular version of a Path of Exile item based on chosen Aura skills.',
    tags: ['React', 'TypeScript', 'Frontend', 'Path of Exile'],
    year: 2024,
  },
  {
    title: 'Rogue Champions',
    url: 'https://shalepumpkin.github.io/RogueChampions/',
    description:
      'A companion web app for the card game Marvel Champions. It adds a campaign mode with rogue-lite features.',
    tags: ['Vue', 'Game Design'],
    year: 2021,
  },
  {
    title: 'Streamer Showdown',
    url: 'https://www.youtube.com/channel/UCqTXZYQkynopSoxlqzp2i4w',
    description: `Built the web interface and video overlays for playing game shows that were live-streamed to Twitch.`,
    year: '2017-2020',
    tags: ['Socket.io', 'Angular', 'NodeJS', 'OBS'],
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
