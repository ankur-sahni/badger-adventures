import type { Trip } from "@/types";
import { tripImages } from "@/config/images";
import { reachManali, standardTrekExclusions } from "./shared";

// Itineraries, inclusions and exclusions come from the Badger Adventures itinerary PDFs.
// TODO: verify with guides: altitudes, best season, fitness and FAQ text (season and access researched online).
// TODO: placeholder prices. Replace pricePerPersonINR with real prices.

export const treks: Trip[] = [
  {
    slug: "chandrakhani-pass-trek",
    name: "Chandrakhani Pass Trek",
    category: "trek",
    featured: true,
    order: 1,
    region: "Kullu Valley",
    route: "Manali to Manali",
    durationDays: 3,
    maxAltitudeM: 3660,
    maxAltitudeFt: 12000,
    difficulty: "Easy",
    pricePerPersonINR: 6500,
    shortDescription: "Pine forest, open meadows and wide views over the Kullu and Parvati valleys.",
    overview: [
      "Chandrakhani Pass sits on a high ridge in the Kullu Valley, with views across the Pir Panjal, the Parvati Range and Deo Tibba. The trail climbs from Rumsu village through pine and oak forest into wide alpine meadows.",
      "Local legend says Jamlu Devta of Malana was carrying a basket of gods over this pass when the wind scattered them across the valley, which is why Kullu is called the Valley of Gods. It is a good first Himalayan trek and a quiet choice away from busier trails.",
    ],
    bestSeason:
      "May to June and September to October. September and early October bring the clearest views. July and August are wet, with slippery trails.",
    fitnessLevel:
      "Suitable for beginners. You should be comfortable walking 5 to 8 hours a day on forest and meadow trails. The pass day is the longest at about 14 km round trip.",
    howToReach: `The trek starts from Rumsu village near Naggar, a 23 km drive from Manali that is included in the package. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Manali to Rumsu, trek to Naya Tapru",
        facts: ["Drive 23 km, about 1.5 hrs", "Trek 5 km, 4 to 5 hrs"],
        description:
          "We meet in Manali and drive to Rumsu through the villages of the Kullu Valley. After a packed lunch, the trail climbs gradually through pine and oak forest until it opens onto the mountains. Overnight in tents at Naya Tapru.",
      },
      {
        day: 2,
        title: "Naya Tapru to Chandrakhani Pass and back",
        facts: ["Pass at 3,660 m (12,000 ft)", "Trek 14 km round trip, 7 to 8 hrs"],
        description:
          "The main day. An early start through forest, meadow and open ridge to the pass, with views of the Pir Panjal and Dhauladhar ranges, the Parvati and Malana valleys and Deo Tibba. Time at the top, then back the same way to Naya Tapru.",
      },
      {
        day: 3,
        title: "Naya Tapru to Rumsu, drive to Manali",
        facts: ["Trek 5 km, 3 to 4 hrs", "Drive 23 km, about 1.5 hrs"],
        description:
          "After breakfast we walk down through pine forest and meadows to Rumsu, where the vehicle takes us back to Manali.",
      },
    ],
    inclusions: [
      "Meals from Day 1 lunch to Day 3 breakfast, with vegetarian and egg options.",
      "2 nights in alpine or dome tents on a sharing basis.",
      "All forest permits and entry fees.",
      "Camping equipment: tents, sleeping bags, mattresses, kitchen, dining and toilet tents.",
      "Gaiters and crampons when conditions need them.",
      "Oxygen cylinder and a full first-aid kit.",
      "Transport from Manali to Rumsu and back.",
      "Experienced trek leader, local guides and support staff.",
      "Porters or mules for common camping equipment.",
      "Trek completion certificate from Badger Adventures.",
    ],
    exclusions: [
      "Breakfast on Day 1 and lunch on Day 3.",
      "Backpack offloading (available at extra cost).",
      "Personal porter.",
      "Personal expenses such as snacks, drinks, shopping, phone calls, laundry and tips.",
      "Costs caused by bad weather, roadblocks, natural calamities or medical emergencies.",
    ],
    faqs: [
      {
        q: "Is Chandrakhani Pass good for a first trek?",
        a: "Yes. The altitude is moderate, the trail is well defined and you sleep at the same camp both nights, so you carry less on the pass day.",
      },
      {
        q: "Can I offload my backpack?",
        a: "Yes, a mule or porter can carry your backpack for an extra charge. Ask us when you book so we can arrange it in advance.",
      },
      {
        q: "Will there be snow?",
        a: "In May and early June there are often snow patches near the pass, and we carry gaiters and crampons if needed. By late summer the route is usually clear.",
      },
    ],
    heroImage: tripImages["chandrakhani-pass-trek"].hero,
    galleryImages: tripImages["chandrakhani-pass-trek"].gallery,
  },
  {
    slug: "beas-kund-trek",
    name: "Beas Kund Trek",
    category: "trek",
    featured: true,
    order: 2,
    region: "Solang Valley",
    route: "Manali to Manali",
    durationDays: 3,
    maxAltitudeM: 3690,
    maxAltitudeFt: 12100,
    difficulty: "Easy",
    pricePerPersonINR: 6500,
    shortDescription: "A short walk from Solang Valley to the glacial source of the Beas River.",
    overview: [
      "Beas Kund is the glacial lake at the source of the Beas River, set in a high basin below Hanuman Tibba, Friendship Peak and the Seven Sisters. The trail starts above Solang Valley and follows the river through meadow and moraine.",
      "It is one of the shortest routes to real high-mountain scenery from Manali, and the base camp at Bakarthach is the same one used for the Friendship Peak expedition.",
    ],
    bestSeason:
      "June to October. June has snow near the lake; July and August are green but wetter; September and October are clear and cold.",
    fitnessLevel:
      "Easy to moderate. The lake day is about 12 km over boulders and moraine, 7 to 8 hours in total, so some regular walking or running beforehand helps.",
    howToReach: `The trek starts from Dhundi, 22 km from Manali beyond Solang Valley. Transport from Manali is included. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Manali to Dhundi, trek to Bakarthach",
        facts: ["2,050 m to 3,270 m", "Drive 22 km, 1 to 1.5 hrs", "Trek 4.5 km, 3 to 4 hrs"],
        description:
          "After breakfast we drive to Dhundi and cross the Beas River. The trail passes meadows, shrubs and rocky sections with views of glaciers and snow peaks, reaching Bakarthach by afternoon. Evening tea and an overnight stay at camp.",
      },
      {
        day: 2,
        title: "Bakarthach to Beas Kund and back",
        facts: ["3,270 m to 3,690 m", "Trek about 12 km, 7 to 8 hrs"],
        description:
          "Carrying a packed lunch and rain gear, we cross boulder fields, short steep climbs and moraine into a valley with two waterfalls, then reach Beas Kund below the surrounding peaks. Time at the lake, then back to Bakarthach for dinner.",
      },
      {
        day: 3,
        title: "Bakarthach to Dhundi, drive to Manali",
        facts: ["3,270 m to 2,050 m", "Trek 4.5 km, 3 to 4 hrs", "Drive 22 km"],
        description:
          "We retrace the trail to Dhundi, taking care on the rocky sections, and drive back to Manali through Solang Valley.",
      },
    ],
    inclusions: [
      "All trek permits and entry fees.",
      "Experienced trek leaders and guides.",
      "Camping accommodation with sleeping bags and foam mattresses.",
      "Vegetarian meals during the trek.",
      "Kitchen and dining tents.",
      "First-aid kit and emergency oxygen.",
      "Transport as per the itinerary.",
      "Support staff and porters for common camping equipment.",
    ],
    exclusions: [
      "Hotel stay in Manali.",
      "Personal porter or mule.",
      "Trekking gear rental.",
      "Travel or medical insurance.",
      "Costs caused by weather, roadblocks or other unforeseen situations.",
      "Sightseeing or activities not in the itinerary.",
      "Personal expenses of any kind.",
    ],
    notes: ["Please reach Manali at least a day before the trek starts, in case of travel delays."],
    faqs: [
      {
        q: "How hard is the Beas Kund trek?",
        a: "The first and last days are short. The lake day is long and rocky, but there is no technical section, so fit beginners manage it well.",
      },
      {
        q: "Where do we sleep?",
        a: "Both nights are in tents at Bakarthach, so you walk to the lake with a light day pack.",
      },
      {
        q: "Is Beas Kund the same base camp as Friendship Peak?",
        a: "Yes, Bakarthach is the base for both, which makes this trek a good preview if you are planning Friendship Peak later.",
      },
    ],
    heroImage: tripImages["beas-kund-trek"].hero,
    galleryImages: tripImages["beas-kund-trek"].gallery,
  },
  {
    slug: "rani-sui-lake-trek",
    name: "Rani Sui Lake Trek",
    category: "trek",
    featured: true,
    order: 3,
    region: "Manali",
    route: "Manali to Manali",
    durationDays: 3,
    maxAltitudeM: 3400,
    maxAltitudeFt: 11155,
    difficulty: "Moderate",
    pricePerPersonINR: 6500,
    shortDescription: "Starts on foot from Manali and climbs through forest to a quiet meadow lake.",
    overview: [
      "Rani Sui is a small lake in alpine meadows above Manali, reached on foot straight from town near Hadimba Temple. The trail climbs through pine, cedar and oak forest to the meadows of Lama Dugh.",
      "From the ridges you see Rohtang Pass, Deo Tibba, Indrasan, the Pir Panjal and the Manalsu glacier. It is a short trek with no long drives, good for beginners and anyone with only a few days.",
    ],
    bestSeason: "May to October. Meadows flower in June and July; September and October are the clearest.",
    fitnessLevel:
      "Moderate. The second day is long at 14 to 15 km, so you should be able to walk most of a day with steady climbs.",
    howToReach: `The trek starts on foot from Manali near Hadimba Temple, so no drive is needed. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Manali to Lama Dugh",
        facts: ["Trek about 4.5 km, 4 to 5 hrs", "Lunch and dinner"],
        description:
          "We start near Hadimba Temple and climb steadily through dense forest. Views of Rohtang Pass, Deo Tibba, the Pir Panjal and Indrasan open up as we gain height. Overnight in tents at Lama Dugh, a wide meadow known for its wildflowers.",
      },
      {
        day: 2,
        title: "Lama Dugh to Rani Sui Lake and back",
        facts: ["Trek 14 to 15 km", "Breakfast, lunch and dinner"],
        description:
          "An early start for a steady climb through flowering meadows, with views over the Kullu Valley and the Beas River. The lake sits among meadows, snow patches and shepherd camps. Time to rest at the lake, then back to Lama Dugh.",
      },
      {
        day: 3,
        title: "Lama Dugh to Manali",
        facts: ["Trek 4.5 km, 3 to 4 hrs", "Breakfast"],
        description: "We walk back down the same forest trail to Manali.",
      },
    ],
    inclusions: [
      "All trek permits and entry fees.",
      "Experienced trek leaders and guides.",
      "Camping accommodation with sleeping bags and foam mattresses.",
      "Vegetarian meals during the trek.",
      "Kitchen and dining tents.",
      "First-aid kit and emergency oxygen.",
      "Support staff and porters for common camping equipment.",
    ],
    exclusions: [
      "Hotel stay in Manali.",
      "Personal porter or mule.",
      "Trekking gear rental.",
      "Travel or medical insurance.",
      "Costs caused by weather, roadblocks or other unforeseen situations.",
      "Sightseeing or activities not in the itinerary.",
      "Personal expenses of any kind.",
    ],
    faqs: [
      {
        q: "Do we need any transport?",
        a: "No. The trek begins and ends on foot in Manali, so you can walk out of your hotel to the start.",
      },
      {
        q: "Is it suitable for beginners?",
        a: "Yes, if you are reasonably fit. The lake day is long, but the trail is not technical.",
      },
      {
        q: "What is the camp like?",
        a: "Lama Dugh is an open meadow with views of the Manali peaks. We pitch sharing tents with a kitchen and dining tent.",
      },
    ],
    heroImage: tripImages["rani-sui-lake-trek"].hero,
    galleryImages: tripImages["rani-sui-lake-trek"].gallery,
  },
  {
    slug: "bhrigu-lake-trek",
    name: "Bhrigu Lake Trek",
    category: "trek",
    featured: true,
    order: 4,
    region: "Manali",
    route: "Manali to Manali",
    durationDays: 3,
    maxAltitudeM: 4267,
    maxAltitudeFt: 14000,
    difficulty: "Moderate",
    pricePerPersonINR: 6500,
    shortDescription: "Forest, wide alpine meadows and a high lake that changes with the season.",
    overview: [
      "Bhrigu Lake sits at about 4,267 m above Manali, surrounded by the Pir Panjal and Dhauladhar ranges, with views of Friendship Peak, Deo Tibba and Hanuman Tibba. The route climbs from Kulang village through forest into large alpine meadows.",
      "The lake changes through the season: frozen in winter, melting in May with a ring of ice, and surrounded by green meadows and wildflowers by midsummer. It is one of the most popular short treks near Manali.",
    ],
    bestSeason:
      "May to October. May and June have snow and a partly frozen lake; July and August are green; September and October are clear and cold.",
    fitnessLevel:
      "Moderate. The lake day gains about 1,400 m over 10 to 11 km with steep and rocky sections, so build up with regular cardio for a few weeks.",
    howToReach: `We meet at 10 AM at Nehru Park on Mall Road, Manali, and drive 7.5 km to Kulang village. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Manali to Kulang, trek to Mori Dugh",
        facts: ["2,050 m to 2,850 m", "Drive 7.5 km, 30 min", "Trek 5 km, 4 to 5 hrs", "Meet 10 AM, Nehru Park"],
        description:
          "The group meets at Nehru Park and drives to Kulang village. The trail climbs steadily through pine, oak and birch forest, crossing small streams, to the meadow camp at Mori Dugh. Lunch at camp and an overnight stay in tents.",
      },
      {
        day: 2,
        title: "Mori Dugh to Bhrigu Lake and back",
        facts: ["2,850 m to 4,267 m", "Trek 10 to 11 km, 7 to 8 hrs"],
        description:
          "After breakfast we climb through steep and rocky sections into wide meadows where horses graze, with the Himalayan peaks all around. Time at the lake to rest and take photos, then back down the same trail to Mori Dugh for dinner.",
      },
      {
        day: 3,
        title: "Mori Dugh to Kulang, drive to Manali",
        facts: ["2,850 m to 2,050 m", "Trek 5 km, 3 to 4 hrs"],
        description:
          "A relaxed breakfast, then down through the forest to Kulang village, where the vehicle takes us back to Manali.",
      },
    ],
    inclusions: [
      "2 nights in alpine or dome tents at Mori Dugh on a sharing basis.",
      "Meals from Day 1 lunch to Day 3 breakfast, with vegetarian and egg options.",
      "Sleeping bags, sleeping mats and camping tents.",
      "Experienced, certified trek leaders trained in mountaineering and wilderness safety.",
      "First-aid kit and emergency oxygen.",
      "Porters or mules for common camping and kitchen equipment.",
      "Safety equipment, including static rescue ropes and seat harnesses.",
      "Insurance cover for Badger Adventures staff.",
      "Transport from Manali to Kulang and back.",
      "Forest entry permits, camping fees and all campsite arrangements.",
    ],
    exclusions: standardTrekExclusions,
    faqs: [
      {
        q: "When is the lake frozen?",
        a: "The lake is usually frozen until May and melts through late May and June. From July it is fully open and surrounded by green meadows.",
      },
      {
        q: "Is Bhrigu Lake hard for beginners?",
        a: "It is a moderate trek. The lake day is steep and long at altitude, so beginners should prepare with a few weeks of regular cardio.",
      },
      {
        q: "Where is the meeting point?",
        a: "Nehru Park on Mall Road, Manali, at 10 AM on Day 1.",
      },
    ],
    heroImage: tripImages["bhrigu-lake-trek"].hero,
    galleryImages: tripImages["bhrigu-lake-trek"].gallery,
  },
  {
    slug: "ghepan-lake-trek",
    name: "Ghepan Lake Trek",
    category: "trek",
    featured: true,
    order: 5,
    region: "Lahaul",
    route: "Manali to Manali",
    durationDays: 4,
    maxAltitudeM: 4140,
    maxAltitudeFt: 13583,
    difficulty: "Moderate",
    pricePerPersonINR: 9500,
    shortDescription: "Across the Atal Tunnel to a turquoise glacial lake in remote Lahaul.",
    overview: [
      "Ghepan Lake is a glacial lake at about 4,140 m in Lahaul, known for its turquoise water and the snow peaks that surround it. The route starts at Sissu, across the Atal Tunnel from Manali, and climbs through valleys, meadows and rocky ground.",
      "Lahaul is drier and far less visited than the Kullu side, so the trail feels remote even though it is only a short drive from Manali.",
    ],
    bestSeason:
      "Late June to September. The trail is usually under snow outside this window; mid-July to mid-September is the most reliable.",
    fitnessLevel:
      "Moderate. Days are 4 to 9 km, but the altitude is high and nights are cold, so good general fitness and some trekking experience help.",
    howToReach: `Day 1 is a hotel day in Manali. On Day 2 we drive 40 km through the Atal Tunnel to Sissu, included in the package. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Manali",
        facts: ["Hotel or guest house in Manali", "Dinner"],
        description:
          "Arrive in Manali and report at the meeting point. A team briefing on the trek, safety and an equipment check, then free time to rest, rent gear or explore Manali.",
      },
      {
        day: 2,
        title: "Manali to Sissu via Atal Tunnel, trek to camp",
        facts: ["2,050 m to 3,500 m", "Drive 40 km, 1.5 hrs", "Trek 8 to 9 km, 4 to 5 hrs"],
        description:
          "We drive through the Atal Tunnel to Sissu village. The trail climbs steadily, crossing small streams, to a meadow campsite with wildflowers and mountain views. Overnight in tents.",
      },
      {
        day: 3,
        title: "Camp to Ghepan Lake and back",
        facts: ["3,500 m to 4,140 m", "Trek 4 km, 1.5 to 2 hrs each way"],
        description:
          "A climb with a few steep, rocky sections opens onto alpine meadows and the lake below the surrounding peaks. Time at the lake, then back to camp for dinner.",
      },
      {
        day: 4,
        title: "Camp to Sissu, drive to Manali",
        facts: ["3,500 m to 2,050 m", "Trek 8 km, 4 to 5 hrs"],
        description: "After breakfast we walk down to Sissu, where the vehicle takes us back to Manali.",
      },
    ],
    inclusions: [
      "1 night in a hotel in Manali and 2 nights in alpine or dome tents on a sharing basis.",
      "Meals from Day 1 dinner to Day 4 breakfast, with vegetarian and egg options.",
      "Sleeping bags, sleeping mats and camping tents.",
      "Experienced, certified trek leaders trained in mountaineering and wilderness safety.",
      "First-aid kit and emergency oxygen.",
      "Porters or mules for common camping and kitchen equipment.",
      "Safety equipment, including static rescue ropes and seat harnesses.",
      "Insurance cover for Badger Adventures staff.",
      "Transport from Manali to Sissu and back.",
      "Forest entry permits, camping fees and all campsite arrangements.",
    ],
    exclusions: [
      "Personal trekking gear such as jackets, trekking shoes, trekking pants, backpacks and gloves.",
      "Travel or trekking insurance for participants.",
      "Personal porter or mule for your own luggage.",
      "Costs caused by bad weather, roadblocks, natural calamities or emergencies.",
      "Personal expenses such as snacks, drinks, laundry and shopping.",
      "Anything not listed under inclusions.",
    ],
    faqs: [
      {
        q: "Why does the trek start with a day in Manali?",
        a: "It gives you time to arrive, rest and meet the team for the safety briefing and gear check before we cross into Lahaul.",
      },
      {
        q: "How cold does it get?",
        a: "Days are usually mild, but nights at camp can drop close to freezing even in summer. Bring proper warm layers.",
      },
      {
        q: "Can the trek be done in May?",
        a: "Usually not. The approach stays under heavy snow until late June in most years.",
      },
    ],
    heroImage: tripImages["ghepan-lake-trek"].hero,
    galleryImages: tripImages["ghepan-lake-trek"].gallery,
  },
  {
    slug: "sar-pass-trek",
    name: "Sar Pass Trek",
    category: "trek",
    featured: true,
    order: 6,
    region: "Parvati Valley",
    route: "Kasol to Barshaini",
    durationDays: 5,
    maxAltitudeM: 4200,
    maxAltitudeFt: 13800,
    difficulty: "Moderate",
    pricePerPersonINR: 9000,
    shortDescription: "Five days through Parvati forests and snowfields, with a long slide off the pass.",
    overview: [
      "Sar Pass crosses a high ridge above the Parvati Valley, starting in Kasol and finishing at Barshaini. Over about 42 km the trail moves through rhododendron and pine forest, Grahan village, open meadows and snowfields to the pass at around 4,200 m.",
      "The name comes from the local word for lake, after a small glacial lake on the route. No previous experience is needed, which makes it a popular first multi-day trek for families, school groups and beginners.",
    ],
    bestSeason:
      "Mid-May to June for snow on the pass and the snow slide; September and October for clear, colder conditions with less snow.",
    fitnessLevel:
      "Easy to moderate, but five consecutive days. The pass day is 14 km and 6 to 8 hours, partly on snow, so regular cardio for a month beforehand helps.",
    howToReach:
      "The trek starts at Kasol in the Parvati Valley, about 30 km from Bhuntar and 75 km from Manali. Overnight buses run from Delhi to Bhuntar or Kasol (about 12 to 13 hours), and Bhuntar airport is the nearest airport. It ends at Barshaini, from where you return to Kasol.",
    itinerary: [
      {
        day: 1,
        title: "Kasol to Grahan village",
        facts: ["1,700 m to 2,350 m", "Trek 10 km, 4 to 5 hrs"],
        description:
          "Meet the team at Kasol base camp for an introduction to trekking basics. The trail follows Grahan Nallah through rhododendron forest, easy at first and steeper near the end, to Grahan village. Overnight under the stars.",
      },
      {
        day: 2,
        title: "Grahan to Min Thach",
        facts: ["2,350 m to 3,400 m", "Trek 7 km, 4 to 5 hrs"],
        description:
          "Through dense forest with gradual climbs and a few steep sections to Min Thach, with views of Nagaru and Sar Top. Dinner and overnight at camp.",
      },
      {
        day: 3,
        title: "Min Thach to Nagaru",
        facts: ["3,400 m to 3,800 m", "Trek 8 km, 4 to 6 hrs"],
        description:
          "The trail steepens through forest and then open ground, with valley views as we climb. Overnight at Nagaru, ready for the pass.",
      },
      {
        day: 4,
        title: "Nagaru to Sar Pass to Biskeri Thach",
        facts: ["3,800 m to 4,200 m to 3,350 m", "Trek 14 km, 6 to 8 hrs"],
        description:
          "An early start over snow to the pass, with views of the Tosh Valley. On the far side comes a snow slide of about 1 km, then meadows and streams down to Biskeri Thach.",
      },
      {
        day: 5,
        title: "Biskeri Thach to Barshaini",
        facts: ["3,350 m to 2,400 m", "Trek 10 km, 4 to 5 hrs"],
        description:
          "Down through pine forest and meadows past the villages of Pulga and Tulga, then over the Parvati River to Barshaini, where the trek ends.",
      },
    ],
    inclusions: [
      "Tents on a sharing basis from Day 1 to Day 4, with separate tents for men and women.",
      "Toilet tents at every campsite; bathing facilities at base camp only.",
      "Sleeping bags and sleeping mats.",
      "Vegetarian or Jain meals from Day 1 lunch to Day 5 lunch: breakfast, lunch, snacks and dinner daily.",
      "Professional, certified guides.",
      "Forest permissions and camping charges.",
    ],
    exclusions: [
      "5% GST.",
      "Travel insurance.",
      "Airfare and transport to Kasol or from Barshaini.",
      "Packed lunch box.",
      "Personal porter charges.",
      "Costs from emergencies.",
      "Extra costs from itinerary changes due to landslides, road blocks, bad weather, strikes or other events outside our control.",
      "Personal expenses of any kind.",
    ],
    faqs: [
      {
        q: "Do I need trekking experience for Sar Pass?",
        a: "No. It is suitable for fit beginners, though the five days and the snow on the pass make it more demanding than a weekend trek.",
      },
      {
        q: "What is the snow slide?",
        a: "Just after the pass, there is a long natural snow slope of about 1 km that trekkers slide down on the way to Biskeri. It is guided by our team and depends on snow conditions.",
      },
      {
        q: "Where does the trek start and end?",
        a: "It starts at Kasol and ends at Barshaini in the Parvati Valley, not in Manali.",
      },
    ],
    heroImage: tripImages["sar-pass-trek"].hero,
    galleryImages: tripImages["sar-pass-trek"].gallery,
  },
  {
    slug: "patalsu-peak-trek",
    name: "Patalsu Peak Trek",
    category: "trek",
    featured: true,
    order: 7,
    region: "Solang Valley",
    route: "Manali to Manali",
    durationDays: 3,
    maxAltitudeM: 4264,
    maxAltitudeFt: 13990,
    difficulty: "Challenging",
    pricePerPersonINR: 6000,
    shortDescription: "A short, steep summit above Solang Valley with views of Hanuman and Deo Tibba.",
    overview: [
      "Patalsu Peak rises to about 13,990 ft above Solang Valley, with views of Friendship Peak, Hanuman Tibba, Deo Tibba and the Beas Kund peaks. It is a real summit without the technical demands of an expedition.",
      "We add a camp at Shagadugh to help with acclimatisation and shorten the summit day. It suits fit beginners, photographers, college groups and experienced trekkers looking for a short climb near Manali.",
    ],
    bestSeason:
      "April to June and September to October for the standard climb. December and January offer a colder snow-trek version that is harder near the summit ridge.",
    fitnessLevel:
      "Challenging for a short trek. Summit day is 12 km over 9 to 10 hours on steep, exposed terrain with no water source, so you need strong stamina.",
    howToReach: `The trek starts from Solang Valley, a 14 km drive from Manali that is included. ${reachManali}`,
    itinerary: [
      {
        day: 1,
        title: "Manali to Solang Valley, trek to Shagadugh",
        facts: ["8,400 ft to 10,700 ft", "Drive 14 km, 45 min to 1 hr", "Trek 5 km"],
        description:
          "A short day on a well-marked trail from Solang village, with taps and water points along the way. The extra camp at Shagadugh helps acclimatisation and shortens summit day. An easy acclimatisation walk in the evening.",
      },
      {
        day: 2,
        title: "Shagadugh to Patalsu summit and back",
        facts: ["10,700 ft to 13,990 ft", "Trek 12 km, 9 to 10 hrs", "Carry 2 litres of water"],
        description:
          "An early start across level meadows at the foot of the peak, then up steep, exposed ground along a ridge to the summit. Time to take in the Beas Kund peaks before returning to Shagadugh. There is no water on this route.",
      },
      {
        day: 3,
        title: "Shagadugh to Solang, drive to Manali",
        facts: ["10,700 ft to 8,400 ft", "Trek 5 km"],
        description: "We walk back down to Solang village and drive to Manali.",
      },
    ],
    inclusions: [
      "Meals from Day 1 lunch to Day 3 breakfast, with vegetarian and egg options.",
      "2 nights in alpine or dome tents, 3 to a tent.",
      "Permits and entry fees for the trek route.",
      "Common trekking equipment: tents, mattresses, warm sleeping bags, kitchen, dining and toilet tents.",
      "Gaiters and crampons when needed, oxygen cylinders and a first-aid kit.",
      "Transport from Manali to Solang Valley and back.",
      "Experienced mountaineering and trek leader.",
      "Porters or mules for common equipment.",
      "Achievement certificate from Badger Adventures.",
    ],
    exclusions: [
      "Transport between Manali and the nearest airport or railway station.",
      "Breakfast on Day 1 and lunch on Day 3.",
      "Backpack offloading.",
      "Personal porter.",
      "Any insurance.",
      "Personal expenses and anything not listed under inclusions.",
    ],
    notes: [
      "Backpack offloading: ₹1,500 if paid online at least 10 days before the trek, or ₹1,800 if arranged in Manali.",
      "Maximum offloaded backpack weight is 15 kg, with a waterproof cover. Suitcases and other bags are not accepted.",
    ],
    faqs: [
      {
        q: "Is Patalsu suitable for beginners?",
        a: "Fit beginners can do it, but summit day is long and steep with no water, so come prepared with good stamina.",
      },
      {
        q: "Why do we camp at Shagadugh?",
        a: "The extra camp helps your body adjust to altitude and cuts the distance of the summit push.",
      },
      {
        q: "Can I offload my backpack?",
        a: "Yes, for ₹1,500 if paid online 10 days ahead or ₹1,800 in Manali, up to 15 kg.",
      },
    ],
    heroImage: tripImages["patalsu-peak-trek"].hero,
    galleryImages: tripImages["patalsu-peak-trek"].gallery,
  },
  {
    slug: "shrikhand-mahadev-trek",
    name: "Shrikhand Mahadev Trek",
    category: "trek",
    featured: true,
    order: 8,
    region: "Kullu district",
    route: "Fancha to Fancha",
    durationDays: 5,
    maxAltitudeM: 5227,
    maxAltitudeFt: 17149,
    difficulty: "Challenging",
    pricePerPersonINR: 12000,
    shortDescription: "A demanding pilgrimage to a natural rock Shivling at 5,227 m.",
    overview: [
      "Shrikhand Mahadev is a sacred pilgrimage site at 5,227 m in Kullu district, known for its tall natural rock Shivling. Devotees believe Lord Shiva meditated here, and it is one of the most revered pilgrimages in the Himalayas.",
      "The climb covers 32 to 35 km of forest, alpine meadow, rocky ground and snowfield. The yatra usually runs in July, when the route is opened by the district administration and thousands of pilgrims and trekkers make the journey.",
    ],
    bestSeason:
      "July, during the official yatra window set each year by the Kullu administration. The trek runs only when the route is declared open.",
    fitnessLevel:
      "Challenging. Summit day is about 15 km over 10 to 12 hours with steep rock and glacier sections at high altitude. You need strong endurance and previous trekking experience.",
    howToReach:
      "The trek starts from Fancha village. From Shimla, travel about 130 km to Rampur, then continue by road towards Nirmand and the base village. Travel to and from the base village is not included.",
    itinerary: [
      {
        day: 1,
        title: "Reach Fancha village",
        facts: ["About 2,086 m", "Homestay or tents"],
        description:
          "Arrive at Fancha, the starting point. A briefing on the route and acclimatisation, time to explore the village and meet locals, and an overnight stay.",
      },
      {
        day: 2,
        title: "Fancha to Spa Bhavi",
        facts: ["To 3,500 m", "Trek 6 to 7 km, 3 to 4 hrs"],
        description:
          "A gradual climb through oak, deodar and rhododendron forest, crossing small streams and wooden bridges. Look out for the Himalayan monal and medicinal herbs along the trail. Overnight in tents at the meadow camp of Spa Bhavi.",
      },
      {
        day: 3,
        title: "Spa Bhavi to Maujbaun",
        facts: ["To 4,000 m", "Trek 6 to 7 km, 4 to 5 hrs"],
        description:
          "The trail steepens over rocky ground and open ridges, with views of the Kullu and Spiti mountains. We cross moraine and meadows where Brahma Kamal grows, then climb steeply to Maujbaun camp.",
      },
      {
        day: 4,
        title: "Maujbaun to Shrikhand Mahadev and back",
        facts: ["Summit 5,227 m", "Trek about 15 km, 10 to 12 hrs"],
        description:
          "The hardest day: a steep rocky climb over glacier and ridges to the Shivling, where pilgrims offer prayers, with views of Kinner Kailash, the Parvati Valley and the Spiti mountains. A careful descent back to camp.",
      },
      {
        day: 5,
        title: "Descend to Fancha village",
        facts: ["To 2,086 m", "Trek via Spa Bhavi"],
        description:
          "Down through forest and meadows, with a chance to spot the snow partridge and Himalayan griffon. We reach Fancha around midday.",
      },
    ],
    inclusions: [
      "Experienced trek leader and local support team throughout.",
      "Tents and homestays on a sharing basis.",
      "Freshly prepared meals from Day 1 dinner to Day 5 lunch.",
      "Camping equipment: tents, sleeping bags and sleeping mats.",
      "Bonfire.",
      "First-aid kit and emergency oxygen.",
      "All trek permits and local entry permissions.",
    ],
    exclusions: [
      "Personal trekking gear such as a backpack, shoes, poles and clothing.",
      "Travel to Fancha village and back home after the trek.",
      "Personal expenses, including porters, tips, extra snacks and drinks.",
      "Travel or adventure insurance.",
    ],
    notes: [
      "The yatra opens only when the Kullu administration declares the route safe. Dates can change or be cancelled at short notice, and we confirm departures accordingly.",
    ],
    faqs: [
      {
        q: "When can I do the Shrikhand Mahadev trek?",
        a: "Usually in July, during the official yatra window. The administration fixes the dates each year and can suspend the yatra if the route is unsafe.",
      },
      {
        q: "How hard is it?",
        a: "It is one of the toughest pilgrim treks in India, with a 10 to 12 hour summit day above 5,000 m. Previous high-altitude trekking experience is strongly recommended.",
      },
      {
        q: "Is a medical check needed?",
        a: "The administration may require registration and a health check before the yatra. We share the current requirements when you book.",
      },
    ],
    heroImage: tripImages["shrikhand-mahadev-trek"].hero,
    galleryImages: tripImages["shrikhand-mahadev-trek"].gallery,
  },
];
