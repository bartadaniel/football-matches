export interface MatchHighlight {
  title: string;
  embed: string;
  url: string;
  thumbnail: string;
  date: Date;
  side1: {
    name: string;
    url: string;
  };
  side2: {
    name: string;
    url: string;
  };
  competition: {
    name: string;
    id: number;
    url: string;
  };
  videos: [
    {
      title: string;
      embed: string;
    }
  ];
}
