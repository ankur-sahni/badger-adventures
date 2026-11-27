// Every image and video slot on the site. Swap a photo by changing its `src` here.
// Current photos: Unsplash (free licence). Hero video: Pexels (free licence).
import type { ImageAsset } from "@/types";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2400&q=80`;

const img = (id: string, alt: string): ImageAsset => ({ src: unsplash(id), alt });

// Pexels #6693764. Replace with your own footage when available.
export const heroVideo = {
  desktop: "https://videos.pexels.com/video-files/6693764/6693764-hd_1366_720_24fps.mp4",
  mobile: "https://videos.pexels.com/video-files/6693764/6693764-sd_960_506_24fps.mp4",
} as const;

export const images = {
  hero: img(
    "photo-1454496522488-7a8e488e8606",
    "Snow-covered Himalayan peaks rising above a long mountain range",
  ),
  about: img(
    "photo-1791370234119-980de6a526c1",
    "A single tent pitched on a grassy mountain slope above a valley filled with cloud",
  ),
} satisfies Record<string, ImageAsset>;

// Gallery page, in display order. The bento layout repeats every 12 images.
export const galleryImages: ImageAsset[] = [
  img("photo-1548659979-53d6a343b767", "Trekkers gathered around a bonfire on a mountainside at dusk"),
  img("photo-1718115575222-6d26c5e5e0b9", "Bhrigu Lake partly frozen in a snowy basin under dark clouds"),
  img("photo-1643903096045-07741be1f245", "A climber with an ice axe ascending a snow-covered mountain"),
  img("photo-1787937710893-8504ad365cbd", "A blue tent on a grassy slope below jagged snow-dusted peaks"),
  img("photo-1572109801525-0bb0272e8579", "Trekkers resting on a green meadow below a snow peak"),
  img("photo-1777010147757-d9fd181e404a", "Snowy mountains reflected in a deep blue glacial lake"),
  img("photo-1767756472218-04f165c3f72c", "A lantern and prayer flags hanging in front of distant peaks"),
  img("photo-1530738270955-2ed78de5c2a9", "A group of trekkers on a snow-covered ridge"),
  img("photo-1724405504642-39518cce855a", "Tents pitched in front of a snow-covered mountain slope"),
  img("photo-1623177738943-93ad69fff0f1", "A campfire in a pine forest with a mountain behind"),
  img("photo-1718183159115-972a4606a073", "Trekkers walking across a wide green meadow towards snow peaks"),
  img("photo-1788237860425-69ac282e1bed", "Snow-covered peaks rising above a rocky foreground and low cloud"),
];

// Stock stand-ins per trip until real trip photos are available.
export const tripImages: Record<string, { hero: ImageAsset; gallery: ImageAsset[] }> = {
  "kanyal-dhungri-trail": {
    hero: img("photo-1655809062121-8f3b53832a6d", "The wooden pagoda roof of Hadimba Devi Temple among deodar trees"),
    gallery: [
      img("photo-1713981275025-03497dcb375c", "The tiered wooden roof of Hadimba Devi Temple in the forest"),
      img("photo-1663353104784-4568fbf87d9d", "A wooden walkway through a dense forest"),
      img("photo-1713981275586-9743b954e5d3", "Hadimba Devi Temple seen between tall cedar trunks"),
    ],
  },
  "lama-dugh-day-hike": {
    hero: img("photo-1651910031244-8f6c3c4c5cac", "Deodar trees on a ridge with snow-covered peaks behind"),
    gallery: [
      img("photo-1737608266315-f4d1ea18056c", "A stand of tall pine trees in a mountain forest"),
      img("photo-1623428084953-4eb04b1c859d", "Looking up through the canopy of a tall forest"),
      img("photo-1597167231350-d057a45dc868", "Manali's green-roofed houses below snow-covered mountains"),
    ],
  },
  "khanpari-tibba-trek": {
    hero: img("photo-1593181629936-11c609b8db9b", "Snow-covered mountain ridges under a deep blue sky"),
    gallery: [
      img("photo-1626419825300-c56f471b94a2", "Tall pine trees against a blue sky with clouds"),
      img("photo-1647014070673-43bad4171631", "A mountain village below snow-covered slopes"),
      img("photo-1587377758203-07b1d983923d", "Snow-covered mountains under a clear blue sky"),
    ],
  },
  "deo-tibba-base-camp-trek": {
    hero: img("photo-1669995654053-533bbaa7b6bb", "A turquoise glacial lake in a rocky moraine below snow peaks"),
    gallery: [
      img("photo-1712388430474-ace0c16051e2", "A rocky glacial valley below snow-covered peaks"),
      img("photo-1611872736537-f8227460ff9e", "A high glacial lake below a ridge of snow peaks"),
      img("photo-1633323773512-486500ee15ef", "Snow peaks rising through cloud above a high valley"),
    ],
  },
  "chandrakhani-pass-trek": {
    hero: img("photo-1718179118802-a46fcd082e9f", "Green alpine meadow sloping towards forested ridges and snow peaks"),
    gallery: [
      img("photo-1773739967497-e09144a822d4", "Snow-capped mountains behind a stand of tall pine trees"),
      img("photo-1572109801525-0bb0272e8579", "Trekkers resting on a green meadow below a snow peak"),
      img("photo-1503265192943-9d7eea6fc77a", "Tents pitched on a grassy campsite below grey mountains"),
    ],
  },
  "beas-kund-trek": {
    hero: img("photo-1718183159118-12f96f031613", "Grassy hillside facing a long wall of snow-covered peaks"),
    gallery: [
      img("photo-1670088776580-e44d6a2a29e3", "Snow-covered boulders on a high trail with mountains behind"),
      img("photo-1519719498756-2f0d81cdf13b", "Pack mules walking along a rocky mountain trail"),
      img("photo-1587377758203-07b1d983923d", "Snow-covered mountains under a clear blue sky"),
    ],
  },
  "rani-sui-lake-trek": {
    hero: img("photo-1658954338931-3ae54dc697f5", "A small alpine lake in a green basin ringed by mountains"),
    gallery: [
      img("photo-1661318977466-5fbd41d8ed83", "A small lake sitting in a high mountain valley"),
      img("photo-1768383565166-0c17033a91df", "Tents beside a stream in a remote mountain valley"),
      img("photo-1767756472218-04f165c3f72c", "A lantern and prayer flags hanging in front of distant peaks"),
    ],
  },
  "bhrigu-lake-trek": {
    hero: img("photo-1718115575222-6d26c5e5e0b9", "Bhrigu Lake partly frozen in a snowy basin under dark clouds"),
    gallery: [
      img("photo-1718183159115-972a4606a073", "Trekkers walking across a wide green meadow towards snow peaks"),
      img("photo-1724405504642-39518cce855a", "Tents pitched in front of a snow-covered mountain slope"),
      img("photo-1718183159109-3f2364850d10", "A rider on horseback crossing a green alpine meadow"),
    ],
  },
  "ghepan-lake-trek": {
    hero: img("photo-1777010147757-d9fd181e404a", "Snowy mountains reflected in a deep blue glacial lake"),
    gallery: [
      img("photo-1697984286841-5cedb7885109", "A high-altitude lake in the dry mountains of Lahaul"),
      img("photo-1723575410239-15eba0b813e3", "A line of trekkers walking up a trail towards snow peaks"),
      img("photo-1787937710893-8504ad365cbd", "A blue tent on a grassy slope below jagged snow-dusted peaks"),
    ],
  },
  "sar-pass-trek": {
    hero: img("photo-1522527414937-8b7363e8701d", "Two trekkers walking up a snow-covered mountain slope"),
    gallery: [
      img("photo-1663685251714-a097ba68f776", "Snowy mountains above a pine forest in Parvati Valley"),
      img("photo-1519229875649-6b8da16368fd", "Two trekkers climbing a snow slope towards a ridge"),
      img("photo-1548659979-53d6a343b767", "Trekkers gathered around a bonfire on a mountainside at dusk"),
    ],
  },
  "patalsu-peak-trek": {
    hero: img("photo-1526963057617-9bc28fd645e5", "Trekkers climbing a steep snow-covered ridge"),
    gallery: [
      img("photo-1592548890095-cd2a7aeca5ac", "Snow-covered mountains above a forested valley"),
      img("photo-1626621341517-bbf3d9990a23", "A trekker standing on a snowy summit slope"),
      img("photo-1530738270955-2ed78de5c2a9", "A group of trekkers on a snow-covered ridge"),
    ],
  },
  "shrikhand-mahadev-trek": {
    hero: img("photo-1707072314299-a5cfd618c851", "A snow-covered valley with a stream running between steep mountains"),
    gallery: [
      img("photo-1772625719423-5f2ba59ab1b4", "A snow-capped peak emerging from cloud"),
      img("photo-1652501834567-937de29c4533", "A river running through a deep forested valley"),
      img("photo-1720882981421-f471d691ba3c", "Prayer flags strung across a mountainside"),
    ],
  },
  "friendship-peak-expedition": {
    hero: img("photo-1643903096045-07741be1f245", "A climber with an ice axe ascending a snow-covered mountain"),
    gallery: [
      img("photo-1612360069998-dec1c5e14a9e", "A climber standing on a snow ridge with rocky peaks behind"),
      img("photo-1528148204584-a1910b6efa11", "A rope team of climbers moving across a high mountain top"),
      img("photo-1788237860425-69ac282e1bed", "Snow-covered peaks rising above a rocky foreground and low cloud"),
    ],
  },
  "yunam-peak-expedition": {
    hero: img("photo-1634040843188-5ca36cf26cc1", "A climber standing below a steep snow-covered summit pyramid"),
    gallery: [
      img("photo-1679249013646-d2d06e70cf7d", "A high-altitude lake below a range of snow peaks"),
      img("photo-1679249013140-91ed78b13e33", "Climbers standing beside a frozen lake high in the mountains"),
      img("photo-1788238025460-b541321dc5f0", "Snow-covered mountains rising above a wide valley floor"),
    ],
  },
};
