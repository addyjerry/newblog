interface Post {
  slug: string;
  header?: string;
  content?: string;
  imageUrl: string;
  type?: string;
  reporter?: string;
}

interface LatestNews {
  first: Post[];
  second: Post[];
}

export const posts: Post[] = [
  {
    slug: "world-news/influence-of-cultural-movement-on-contemporary-society",
    header:
      "A deep dive into the influence of cultural movement on contemporary society",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/worldnews.png",
  },
  {
    slug: "technology/cultural-movement-on-contemporary-society",
    header:
      "A deep dive into the influence of cultural movement on contemporary society",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/Health.png",
  },
  {
    slug: "world-news/influence-of-cultural-movement-on-contemporary-society",
    header:
      "A deep dive into the influence of cultural movement on contemporary society",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/Sports.png",
  },
  {
    slug: "world-news/influence-of-cultural-movement-on-contemporary-society",
    header:
      "A deep dive into the influence of cultural movement on contemporary society",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/Technology.png",
  },
];

export const headerPost: Post[] = [
  {
    slug: "/world-news",
    header: "WORLD NEWS",
    content: "Economic policies are shaping international markets",
    imageUrl: "/images/worldnews.png",
  },
  {
    slug: "/technology",
    header: "TECHNOLOGY",
    content: "The latest trends in AI and innovation",
    imageUrl: "/images/Technology.png",
  },
  {
    slug: "/health",
    header: "HEALTH",
    content: "Analyzing the effects of global health policies",
    imageUrl: "/images/Health.png",
  },
  {
    slug: "/sports",
    header: "SPORTS",
    content: "Affect the integrity and future of professional sports",
    imageUrl: "/images/Sports.png",
  },
];

export const latest: Post = {
  slug: "/culture",
  header:
    "A deep dive into the influence of cultural movement on contemporary society",
  type: "CULTURE",
  reporter: "GUY HAWKINS",
  imageUrl: "/images/latest/culturalmovements.png",
};

export const latestNews: LatestNews = {
  first: [
    // {
    //   slug: "world-news/influence-of-cultural-movement-on-contemporary-society",
    //   header:
    //     "A deep dive into the influence of cultural movement on contemporary society",
    //   content:
    //     "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    //   imageUrl: "/images/latest/innovation.png",
    // },
    {
      slug: "world-news/the-effect-of-geopolitical-shifts-on-global-security",
      header: "The effect of geopolitical shifts on global security",
      content:
        "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
      imageUrl: "/images/latest/politicalshift.png",
      type: "World news",
    },
    {
      slug: "sports/affect-the-integrity-and-future-of-professional-sports",
      header: "Affect the integrity and future of professional sports",
      content:
        "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
      imageUrl: "/images/Sports.png",
      type: "Sports",
    },
  ],
  second: [
    {
      slug: "business/strategies-for-success-in-a-competitive-landscape",
      header: "Strategies for success in a competitive landscape",
      content:
        "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
      imageUrl: "/images/latest/competitivelandscape.png",
      type: "Business",
    },
    {
      slug: "business/innovation-hubs-are-transforming-traditional-business-models",
      header: "Innovation hubs are transforming traditional business models",
      content:
        "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
      imageUrl: "/images/latest/businesscar.png",
      type: "Business",
    },
    {
      slug: "health/tailoring-treatments-to-individual-genetic-profiles",
      header: "Tailoring treatments to individual genetic profiles",
      content:
        "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
      imageUrl: "/images/latest/treatment.png",
      type: "Health",
    },
  ],
};

export const worldNews: Post[] = [
  {
    slug: "world-news/the-global-financial-landscape-and-its-implications-for-all",
    header: "Global financial landsape and its implications for all",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/worldnews/landscape.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "world-news/examining-the-challenges-and-responses-of-nations",
    header: "Examining the challenges and responses of nations",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/worldnews/challenges.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "world-news/a-comprehensive-analysis-of-the-state-of-global-affairs",
    header: "A comprehensive analysis of the state of global affairs",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/worldnews/socialmovement.png",
    reporter: "Guy Hawkins",
  },
];
export const technology: Post[] = [
  {
    slug: "technology/latest-innovations-pave-the-way-to-a-sustainable-future",
    header: "Latest innovations pave the way to a sustainable future",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/technology/future.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "technology/understanding-the-role-of-big-data-in-driving-technologies",
    header: "Understanding the role of big data in driving technologies",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/technology/bigdata.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "technology/exploring-the-latest-developments-in-ai-robotics",
    header: "Exploring the latest developments in AI, robotics",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/technology/explore.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "technology/future-of-computing-and-what-it-means-today-in-society",
    header: "Future computing and what it means today in society",
    content:
      "lorem ipsum A deep dive into the influence of cultural movement on contemporary society",
    imageUrl: "/images/technology/innovation.png",
    reporter: "Guy Hawkins",
  },
];

export const podcast: Post[] = [
  {
    slug: "podcast/riding-the-tide-of=innovation-and-inspiration",
    header: "Riding the tide of innovation and inspiration",
    content:
      "The latest trends, creative breakthroughs and visionary minds in driving change",
    imageUrl: "/images/podcasts/connecting.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "podcast/where-ideas-come-alive-and-stories-unfold",
    header: "Where ideas come alive and stories unfold",
    content:
      "This podcast explore the journey from concept to creation, showcasing the stories",
    imageUrl: "/images/podcasts/innovation.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "podcast/on-the-air-capturing-the-voices-of-change",
    header: "On the air capturing the voices of change",
    content:
      "Brings you powerful stories and conversations with individuals who are making differences",
    imageUrl: "/images/podcasts/on-air.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "podcast/exploring-the-thought-provoking-topics-weekly",
    header: "Exploring the thought provoking topics weekly",
    content:
      "A wide range of topics, offering fresh perspectives and in-depth analysis on issues",
    imageUrl: "/images/podcasts/provoking.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "podcast/the-podcast-where-ideas-take-flight",
    header: "The podcast where ideas take flight",
    content:
      "Offering listeners a chance to hear how groundbreaking ideas are launched into the world",
    imageUrl: "/images/podcasts/take-flight.png",
    reporter: "Guy Hawkins",
  },
  {
    slug: "podcast/connecting-ideas-and-people-perspectives",
    header: "Connecting ideas and people perspective",
    content:
      "The podcast bridges people, ideas and perspectives and fostering meaningful conversations",
    imageUrl: "/images/podcasts/ideas.png",
    reporter: "Guy Hawkins",
  },
];
