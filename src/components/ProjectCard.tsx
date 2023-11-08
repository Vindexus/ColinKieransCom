import { ColorTags, Tags } from 'astro-boilerplate-components';
import type { Values } from 'astro-boilerplate-components/dist/esm/types/TypeUnion';

type IProjectProps = {
  project: Project;
};

export type Project = {
  title: string;
  url: string;
  tags: string[];
  description: string;
  thumb: string;
};

const tagColors: Record<string, Values<typeof ColorTags>> = {};
const colors: string[] = [
  ColorTags.AMBER,
  ColorTags.BLUE,
  ColorTags.CYAN,
  ColorTags.EMERALD,
  ColorTags.FUCHSIA,
  ColorTags.GREEN,
  ColorTags.INDIGO,
  ColorTags.LIME,
  ColorTags.LIME,
  ColorTags.ORANGE,
  ColorTags.PINK,
  ColorTags.PURPLE,
  ColorTags.RED,
  ColorTags.ROSE,
  ColorTags.SKY,
  ColorTags.TEAL,
  ColorTags.VIOLET,
  ColorTags.YELLOW,
];
let tagColorIdx = 0;
function getTagColor(tag: string): Values<typeof ColorTags> {
  if (tagColors[tag]) {
    return tagColors[tag]!;
  }
  const color = colors[tagColorIdx] as Values<typeof ColorTags>;
  tagColors[tag] = color;
  tagColorIdx++;
  if (tagColorIdx >= colors.length) {
    tagColorIdx = 0;
  }
  return color;
}

const ProjectCard = (props: IProjectProps) => {
  const { project } = props;

  const { description, tags, title, url } = project;

  // const imgSrc = `/assets/images/projects/${thumb}`

  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
      {/* <div className="shrink-0">
			<a href={url}>
				<img
					className="h-36 w-36 hover:translate-y-1"
					src={imgSrc}
					alt={title}
					loading="lazy"
				/>
			</a>
		</div> */}

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={url}>
            <div className="text-xl font-semibold">{title}</div>
          </a>

          <div className="ml-3 flex flex-wrap gap-2">
            {tags.map((t) => {
              return (
                <Tags key={t} color={getTagColor(t)}>
                  {t}
                </Tags>
              );
            })}
          </div>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };
