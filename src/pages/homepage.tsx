import { HeroSection } from "../components/hero-section.component"

export const Homepage = () => {
  return <div className="w-screen h-screen bg-[#102429] flex">
    <div className="w-[56%]"><HeroSection/></div>
    <div className="w-[44%]"></div>
  </div>
}