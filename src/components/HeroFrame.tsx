import Image from "next/image";
import heroImage from "../../public/reference-hero.png";

export default function HeroFrame() {
  return (
    <div className="hero-visual">
      <Image
        src={heroImage}
        alt="Illustration of Shifali Gwal, frontend engineer and UI/UX designer"
        className="hero-reference-image"
        sizes="(max-width: 860px) 100vw, 500px"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
