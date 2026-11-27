// Every image and video slot on the site. Swap a photo by changing its `src` here.
// Current photos: Unsplash (free licence). Hero video: Pexels (free licence).

export type ImageAsset = {
  src: string;
  alt: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2400&q=80`;

export const heroVideo = {
  // Pexels #6693764, 1366x720. Replace with your own footage when available.
  src: "https://videos.pexels.com/video-files/6693764/6693764-hd_1366_720_24fps.mp4",
  type: "video/mp4",
} as const;

export const images = {
  hero: {
    src: unsplash("photo-1454496522488-7a8e488e8606"),
    alt: "Snow-covered Himalayan peaks rising above a long mountain range",
  },
  about: {
    src: unsplash("photo-1791370234119-980de6a526c1"),
    alt: "A single tent pitched on a grassy mountain slope above a valley filled with cloud",
  },
} satisfies Record<string, ImageAsset>;
