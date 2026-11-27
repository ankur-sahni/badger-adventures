import type { ImageAsset } from "@/types";

// The founders plan and run the company; certified guides lead the groups on the trail.
// TODO: get both founders' consent before launch, a line from each on what they handle, and a photo of them.

export type Credential = {
  course: string;
  institute: string;
  year: number;
  detail: string;
};

// From the certificates supplied by Badger Adventures. Personal details are redacted in /public/certificates.
export const omPrakash = {
  name: "Om Prakash",
  role: "Co-founder",
  summary: "Qualified mountaineering instructor, born and raised in Kanyal, above Manali.",
  credentials: [
    {
      course: "Search and Rescue Course",
      institute: "NIM, Uttarkashi",
      year: 2024,
      detail: "Grade A in rock, snow and avalanche rescue.",
    },
    {
      course: "Method of Instruction (Mountaineering)",
      institute: "ABVIMAS, Manali",
      year: 2023,
      detail: "Qualified to instruct. Grade AX.",
    },
    {
      course: "Advanced Mountaineering Course",
      institute: "ABVIMAS, Manali",
      year: 2023,
      detail: "Grade A. Summited Friendship Peak.",
    },
    {
      course: "Basic Mountaineering Course",
      institute: "ABVIMAS, Manali",
      year: 2022,
      detail: "Grade A. Reached 15,700 ft.",
    },
  ] satisfies Credential[],
  certificates: [
    {
      src: "/certificates/nim-search-and-rescue.jpg",
      alt: "Search and Rescue Course report, Nehru Institute of Mountaineering, Uttarkashi, 2024, Grade A",
    },
    {
      src: "/certificates/abvimas-method-of-instruction.jpg",
      alt: "Method of Instruction (Mountaineering) certificate, ABVIMAS Manali, 2023, Grade AX",
    },
    {
      src: "/certificates/abvimas-advanced-mountaineering.jpg",
      alt: "Advanced Mountaineering Course certificate, ABVIMAS Manali, 2023, Grade A, Friendship Peak climbed",
    },
    {
      src: "/certificates/abvimas-basic-mountaineering.jpg",
      alt: "Basic Mountaineering Course certificate, ABVIMAS Manali, 2022, Grade A",
    },
    {
      src: "/certificates/naf-rock-climbing.jpg",
      alt: "Rock climbing programme certificate, National Adventure Foundation, Manali, 2018",
    },
  ] satisfies ImageAsset[],
};

export const rahulNegi = {
  name: "Rahul Negi",
  role: "Co-founder",
  qualification: "Master's degree in tourism",
  summary: "Holds a master's degree in tourism.",
};

export const founders = [omPrakash, rahulNegi];
