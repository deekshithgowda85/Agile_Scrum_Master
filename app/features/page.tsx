import { HomeNavbar } from "@/components/home-navbar";
import { FeaturesContent } from "./features-content";

export const metadata = {
  title: "Features - Agile Scrum Master",
  description: "Discover our powerful features built for agile teams",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HomeNavbar />
      <FeaturesContent />
    </div>
  );
}
