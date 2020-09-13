import { MatchHighlight } from './match-highlight.model';

export function createMockMatchHighlight(id: number): MatchHighlight {
  return {
    title: `title${id}`,
    embed: `embed${id}`,
    url: `url${id}`,
    thumbnail: `thumbnail${id}`,
    date: new Date(id),
    side1: {
      name: `name${id}`,
      url: `url${id}`,
    },
    side2: {
      name: `name${id}`,
      url: `url${id}`,
    },
    competition: {
      name: `competition name${id}`,
      id: id,
      url: `competition url${id}`,
    },
    videos: [
      {
        title: `highlights${id}`,
        embed: `videoembed1${id}`,
      },
    ],
  };
}
