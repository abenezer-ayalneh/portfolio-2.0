import { HeroSection } from '../components/hero-section.component.tsx';
import { Showcase } from '../components/showcase.component.tsx';
import { workHistories, education, projects, Tabs, tabs } from '../assets/data/portfolio-data.tsx';
import { Link } from '../components/link.component.tsx';
import { useState } from 'react';


export const Homepage = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.WORK);

  return (
    <div
      className="w-screen h-screen overflow-y-scroll flex flex-col lg:flex-row bg-center bg-no-repeat bg-fixed bg-cover bg-opacity-60"
      style={{ backgroundImage: 'url(/src/assets/images/background.jpg)' }}
    >
      <div className="w-full lg:w-[56%]">
        <HeroSection activeTab={activeTab} setActiveTab={ setActiveTab} />
      </div>
      <div className="w-full lg:w-[44%] px-[1.25rem] lg:h-full lg:overflow-y-scroll">
        <div className="w-full px-[0.62rem] flex justify-between lg:hidden" id='links'>
          {tabs.map((tab, index) => (
            <Link
              text={tab.name}
              key={index}
              active={activeTab === tab.tab}
              onClick={() => setActiveTab(tab.tab)}
            />
          ))}
        </div>
        {activeTab === Tabs.WORK && workHistories.map((workHistory, index) => (
          <Showcase key={index} {...workHistory} />
        ))}
        {activeTab === Tabs.PROJECTS && projects.map((workHistory, index) => (
          <Showcase key={index} {...workHistory} />
        ))}
        {activeTab === Tabs.EDUCATION && education.map((workHistory, index) => (
          <Showcase key={index} {...workHistory} />
        ))}
      </div>
    </div>
  );
};
