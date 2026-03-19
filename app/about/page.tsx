import Biography from "@/components/about/Biography";
import Philosophy from "@/components/about/Philosophy";
import Skills from "@/components/about/Skills";
import Accomplishments from "@/components/about/Accomplishments";
import Degrees from "@/components/about/Degrees";

export default function AboutPage() {
  return (
    <>
      <Philosophy />
      <Skills />
      <Biography />
      <Degrees />
      <Accomplishments />
    </>
  );
}