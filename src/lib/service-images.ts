// Image shown on each service detail page, keyed by service slug.
// Sample images for now: replace each import with the client's photo when available.
import commercial from "@/assets/commercial.jpg";
import residential from "@/assets/residential.jpg";
import hero from "@/assets/cleaning-hero.jpg";

export const serviceImages: Record<string, string> = {
  "entretien-commercial": commercial,
  "apres-construction": hero,
  vitres: commercial,
  "tapis-carpettes": residential,
  "tissus-ameublement": residential,
  planchers: commercial,
  "renovation-planchers": hero,
  "grand-menage": residential,
};
