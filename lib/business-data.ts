import { Music, Film, Users, Gamepad2, type LucideIcon } from "lucide-react";

export interface BusinessDivision {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  externalLink?: string;
}

export const businessDivisions: BusinessDivision[] = [
  {
    id: "music",
    name: "Nzinga Music",
    tagline: "Artist Development & Label Services",
    description: "Empowering artists to reach their full potential through comprehensive label services, artist development, and distribution.",
    fullDescription: "Nzinga Music is dedicated to discovering, developing, and promoting musical talent across all genres. We provide comprehensive label services including artist development, music production, marketing, and global distribution. Our team works closely with artists to craft their unique sound and build sustainable careers in the ever-evolving music industry.",
    icon: Music,
    href: "/business/music/",
    features: [
      "Artist Development Programs",
      "Music Production & Recording",
      "Global Distribution",
      "Marketing & Promotion",
      "Licensing & Sync Placement",
      "Tour Support",
    ],
  },
  {
    id: "pictures",
    name: "Nzinga Pictures",
    tagline: "Movies & Television Production",
    description: "Creating compelling stories for film and television that captivate audiences and push creative boundaries.",
    fullDescription: "Nzinga Pictures produces high-quality content for film and television, bringing diverse stories to screens worldwide. From our upcoming projects like \"Safety Patrol\" to groundbreaking series like \"The Melody,\" we're committed to storytelling that entertains, inspires, and challenges perspectives. Our production slate spans drama, comedy, documentary, and more.",
    icon: Film,
    href: "/business/pictures/",
    features: [
      "Feature Film Production",
      "Television Series Development",
      "Documentary Production",
      "Content Acquisition",
      "Post-Production Services",
      "International Co-Productions",
    ],
  },
  {
    id: "management",
    name: "Nzinga Management",
    tagline: "Talent Management Services",
    description: "Guiding careers and building legacies for entertainers, athletes, and creative professionals.",
    fullDescription: "Nzinga Management provides comprehensive talent management services for entertainers, athletes, and creative professionals. Our dedicated team works tirelessly to secure opportunities, negotiate deals, and guide career strategies that maximize our clients' potential. We believe in building long-term partnerships based on trust, transparency, and shared success.",
    icon: Users,
    href: "/business/management/",
    externalLink: "https://nzingamgmt.com",
    features: [
      "Career Strategy & Planning",
      "Contract Negotiation",
      "Brand Partnerships",
      "Public Relations",
      "Business Development",
      "Personal Branding",
    ],
  },
  {
    id: "gaming",
    name: "Nzinga Gaming",
    tagline: "Interactive Entertainment",
    description: "Building the next generation of gaming experiences through innovative development and strategic partnerships.",
    fullDescription: "Nzinga Gaming represents our expansion into the interactive entertainment space. Through strategic partnerships like our collaboration with Royal BattleField, we're developing engaging gaming experiences that bring our entertainment expertise to the gaming world. From esports initiatives to game development, we're committed to becoming a major player in the gaming industry.",
    icon: Gamepad2,
    href: "/business/gaming/",
    features: [
      "Game Development",
      "Esports Initiatives",
      "Gaming Partnerships",
      "Content Creator Support",
      "Gaming Events",
      "Interactive Experiences",
    ],
  },
];

export function getDivisionById(id: string): BusinessDivision | undefined {
  return businessDivisions.find((division) => division.id === id);
}
