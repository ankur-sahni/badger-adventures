import type { Trip } from "@/types";
import { tripImages } from "@/config/images";
import { reachManali } from "./shared";

// Itineraries, inclusions and exclusions come from the Badger Adventures itinerary PDFs.
// TODO: verify with guides: load-ferry altitude, reserve day and FAQ text.
// TODO: placeholder prices. Replace pricePerPersonINR with real prices.

const expeditionPorterNotes = [
  "We expect you to carry your own backpack. A porter for your backpack costs ₹7,600 if paid online at least 10 days ahead, or ₹8,600 if arranged in Manali.",
  "Maximum backpack weight for a porter is 15 kg, with a waterproof cover. Suitcases, strollers and other bags are not accepted.",
];

export const expeditions: Trip[] = [
  {
    slug: "friendship-peak-expedition",
    name: "Friendship Peak Expedition",
    category: "expedition",
    featured: true,
    order: 1,
    region: "Pir Panjal, Manali",
    route: "Manali to Manali",
    durationDays: 6,
    maxAltitudeM: 5289,
    maxAltitudeFt: 17352,
    difficulty: "Challenging",
    pricePerPersonINR: 18000,
    shortDescription: "A first 5,000 m summit with glacier travel and snow climbing, close to Manali.",
    overview: [
      "Friendship Peak (5,289 m) in the Pir Panjal Range is one of the most popular first mountaineering summits in the Indian Himalayas. It is close to Manali and introduces glacier travel, snow climbing and roped movement without highly technical ground.",
      "The plan follows the climb-high, sleep-low principle, with a hotel night and briefing in Manali, a load-ferry day for acclimatisation and a reserve day for weather. All technical climbing gear is included.",
    ],
    bestSeason:
      "May to June and September to October. Early season has more snow on the route; autumn is colder with firmer, icier ground.",
    fitnessLevel:
      "Challenging. Summit day is about 12 km over 10 to 12 hours on steep, loose ridges in thin air. Prepare with 2 to 3 months of cardio and leg strength training; previous high-altitude trekking is strongly recommended.",
    howToReach: `Day 1 starts at 10 AM on Manali Mall Road, with a hotel night in Manali. Transport to Dhundi and back is included. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Manali",
        facts: ["Meet 10 AM, Manali Mall Road", "Hotel in Manali"],
        description:
          "The group meets on Mall Road and checks into the hotel. An instructor briefs the team, answers questions and checks the mandatory equipment. After lunch, a one-hour acclimatisation walk to Hadimba Devi temple, then dinner and an overnight stay.",
      },
      {
        day: 2,
        title: "Manali to Dhundi, trek to Lady Leg base camp",
        facts: ["To 3,840 m", "Drive 21 km, 1 to 1.5 hrs", "Trek 7.5 km, 4 to 5 hrs", "Carry 2 litres of water"],
        description:
          "After breakfast we drive to Dhundi and trek to Lady Leg. The trail starts moderate and is mostly steep up to base camp, with limited water on the way. Overnight in tents at Lady Leg.",
      },
      {
        day: 3,
        title: "Acclimatisation hike and load ferry",
        facts: ["Climb high, sleep low", "Return to Lady Leg"],
        description:
          "An important acclimatisation day. We climb steep moraine and rocky trail towards the higher camp carrying some personal and team gear, spend about an hour at altitude, then return to Lady Leg for the night.",
      },
      {
        day: 4,
        title: "Lady Leg to summit camp",
        facts: ["3,840 m to about 4,300 m", "Trek 4.5 km, 3 to 4 hrs"],
        description:
          "A steep climb along a rugged, rocky ridge, with two or three streams early in the day. Summit camp is barren and cold. Early dinner and rest before the summit push.",
      },
      {
        day: 5,
        title: "Summit push to Friendship Peak (5,289 m)",
        facts: ["About 12 km, 10 to 12 hrs", "Start around 1 AM"],
        description:
          "We leave around 1 AM by headlamp to cross snow and frozen scree while it is firm. The ascent is physically demanding on steep, loose ridges, but not technical. From the top: Hanuman Tibba and the Pir Panjal and Dhauladhar ranges. A careful descent to Lady Leg.",
      },
      {
        day: 6,
        title: "Lady Leg to Dhundi, drive to Manali",
        facts: ["3,840 m to 2,050 m", "Trek 7.5 km, 3 to 4 hrs", "Breakfast only"],
        description:
          "A steep descent to Dhundi, arriving around 1 to 2 PM, where vehicles take us back to Manali. The expedition ends around 2 to 3 PM.",
      },
    ],
    inclusions: [
      "Permissions from local authorities, entry fees and IMF (Indian Mountaineering Foundation) permission.",
      "Trekking insurance for all participants.",
      "Meals from Day 1 lunch to the last day's breakfast, with vegetarian and egg options.",
      "Well-trained, certified climbing instructors.",
      "Transport between Manali and Dhundi.",
      "Dome or alpine tents on a sharing basis; twin-sharing available at extra cost.",
      "Oxygen cylinders and a fully equipped first-aid kit.",
      "Sleeping bags, mattresses, tents, dining and kitchen tents and utensils.",
      "Technical gear: static and dynamic ropes, helmet, ice axe, harness, carabiners, mountaineering boots and crampons, plus descender, jumar, pitons and slings when needed.",
      "Insurance cover for Badger Adventures staff.",
      "Summit certificate from Badger Adventures.",
    ],
    exclusions: [
      "Hotel stay in Manali on the last day.",
      "Porter for personal belongings.",
      "Personal trekking equipment such as poles, shoes, jackets, trek pants and backpacks.",
      "Sightseeing.",
      "Costs from natural calamities or other events outside our control.",
      "Personal expenses and anything not listed under inclusions.",
    ],
    notes: [
      "The itinerary may change with sudden weather. If weather stops the summit attempt, we use a reserve day for a second attempt.",
      ...expeditionPorterNotes,
    ],
    faqs: [
      {
        q: "Do I need mountaineering experience?",
        a: "No formal course is needed, but previous high-altitude trekking is strongly recommended. Our instructors teach the basics of using crampons, ice axe and ropes on the route.",
      },
      {
        q: "Is the climb technical?",
        a: "It is not highly technical, but it involves snow, scree and steep ridges at over 5,000 m, so ropes and crampons are used where conditions need them.",
      },
      {
        q: "What if the weather is bad on summit day?",
        a: "We keep a reserve day so the team can make a second attempt if weather stops the first.",
      },
    ],
    heroImage: tripImages["friendship-peak-expedition"].hero,
    galleryImages: tripImages["friendship-peak-expedition"].gallery,
  },
  {
    slug: "yunam-peak-expedition",
    name: "Yunam Peak Expedition",
    category: "expedition",
    featured: true,
    order: 2,
    region: "Lahaul, near Baralacha La",
    route: "Manali to Manali",
    durationDays: 7,
    maxAltitudeM: 6111,
    maxAltitudeFt: 20049,
    difficulty: "Challenging",
    pricePerPersonINR: 28000,
    shortDescription: "A non-technical 6,000 m summit near Baralacha La that rewards careful acclimatisation.",
    overview: [
      "Mount Yunam (6,111 m) near Baralacha La in Lahaul is one of the most accessible 6,000 m summits in India. It does not need complex ropework or ice climbing, but the extreme altitude demands strong stamina and strict acclimatisation.",
      "The route drives from Manali through the Atal Tunnel and over Baralacha La, past Deepak Tal and Suraj Tal, to base camp at Bharatpur. We follow a climb-high, sleep-low plan with a load-ferry day before the summit.",
    ],
    bestSeason: "Late June to mid-September, when the Manali to Leh highway is open and the route is mostly free of deep snow.",
    fitnessLevel:
      "Very high. You need an excellent aerobic base: aim to run 8 km in 60 to 70 minutes, with squats and lunges, for 2 to 3 months before the climb. Previous high-altitude experience is strongly recommended.",
    howToReach: `The expedition starts and ends in Manali; all transport from Manali to Bharatpur and back is included. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Manali",
        facts: ["2,050 m (6,726 ft)", "Hotel or guest house"],
        description:
          "Arrive in Manali and rest after the journey. Last-minute gear rental or shopping, and a mandatory team briefing with the expedition leader.",
      },
      {
        day: 2,
        title: "Manali to Jispa or Patsau via Atal Tunnel",
        facts: ["To 3,200 m (10,500 ft)", "Drive 85 to 100 km, 3 to 4 hrs"],
        description:
          "Along the Leh-Manali Highway through the Atal Tunnel, from the green Kullu valley into rugged Lahaul. A short, light walk along the Bhaga River to help acclimatise. Overnight at camp.",
      },
      {
        day: 3,
        title: "Jispa to Bharatpur base camp via Baralacha La",
        facts: ["4,500 m to 4,700 m", "Drive 55 to 90 km, 3 to 4 hrs"],
        description:
          "Past the high lakes of Deepak Tal and Suraj Tal, over Baralacha La at 4,850 m, then down slightly to Bharatpur. An afternoon of rest, water and practising movement on loose rock and scree. Overnight in mountaineering tents.",
      },
      {
        day: 4,
        title: "Acclimatisation hike and load ferry",
        facts: ["To about 5,200 m (17,000 ft)", "Return to Bharatpur"],
        description:
          "Climb high, sleep low: we carry some personal and team gear up steep moraine towards the higher camp, spend about an hour at altitude, then return to Bharatpur for the night.",
      },
      {
        day: 5,
        title: "Bharatpur to summit camp",
        facts: ["5,250 m to 5,300 m (about 17,400 ft)", "Trek 4 to 5 km, about 4 hrs"],
        description:
          "A steady, steep climb over loose scree and boulders, with possible glacial stream crossings, at a slow pace to manage heart rate. Summit camp is barren and cold. Early dinner and rest.",
      },
      {
        day: 6,
        title: "Summit push to Yunam Peak (6,111 m), return to Bharatpur",
        facts: ["About 6 km round trip to the summit, then 5 km to Bharatpur", "9 to 11 hrs"],
        description:
          "We start around 1 AM by headlamp to cross snow and frozen scree while it is firm. The climb is physically demanding on thin air and loose ridges but not technical. From the top: the Chandra-Bhaga and Mulkila ranges and the Zanskar peaks. A careful descent to Bharatpur.",
      },
      {
        day: 7,
        title: "Bharatpur to Manali",
        facts: ["Drive 7 to 8 hrs"],
        description:
          "We load the vehicles and drive back through Lahaul, Tandi bridge, Sissu and the Atal Tunnel to Manali, where the expedition ends.",
      },
    ],
    inclusions: [
      "Day 1 hotel in Manali; camps from Day 2 to Day 6.",
      "Dinner on Day 1 and breakfast on Day 2 at the hotel; vegetarian and egg meals from Day 2 lunch to Day 7 breakfast.",
      "Sleeping bag, mattress, tents, kitchen, dining and toilet tents and utensils.",
      "Permits and entry fees.",
      "First-aid kit and emergency oxygen.",
      "Mountaineering-qualified trek leaders, guides and support staff.",
      "Transport from Manali to Bharatpur and back.",
      "Technical gear: climbing ropes, ice axe, harness, carabiners, mountaineering boots, crampons and gaiters.",
      "Insurance cover for Badger Adventures staff.",
    ],
    exclusions: [
      "Hotel stay and meals in Manali on the last day.",
      "Personal equipment such as trek pants, jackets, rucksacks and trekking shoes.",
      "Food during transit.",
      "Insurance.",
      "Porter for personal luggage.",
      "Personal expenses and anything not listed in the itinerary and inclusions.",
    ],
    notes: [
      "The itinerary may change with sudden weather. If weather stops the summit attempt, we use a reserve day for a second attempt.",
      "Terrain is gravel, loose scree and snow patches. Stiff alpine boots (category C/D) and poles with snow baskets are essential.",
      ...expeditionPorterNotes,
    ],
    faqs: [
      {
        q: "Is Yunam a technical climb?",
        a: "No. It needs no complex ropework or ice climbing, but at over 6,000 m the altitude itself is the main challenge.",
      },
      {
        q: "How should I train?",
        a: "Two to three months of high-intensity cardio, running 8 km in about an hour, and leg strength work such as squats and lunges.",
      },
      {
        q: "Why do we drive so high on Day 3?",
        a: "Bharatpur is reached by road over Baralacha La, so the first nights are already high. That is why the plan includes a rest afternoon and a load-ferry day before the summit.",
      },
    ],
    heroImage: tripImages["yunam-peak-expedition"].hero,
    galleryImages: tripImages["yunam-peak-expedition"].gallery,
  },
];
