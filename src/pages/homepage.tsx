import { HeroSection } from '../components/hero-section.component.tsx';
import { Showcase } from '../components/showcase.component.tsx';
import {
  workHistories,
  education,
  projects,
  Tabs,
  tabs,
} from '../assets/data/portfolio-data.tsx';
import { Link } from '../components/link.component.tsx';
import { useState } from 'react';
import BackgroundImage from '../assets/images/background.jpg';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ContactMe } from './contact.me.page.tsx';

export const Homepage = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.WORK);

  return (
    <div
      className="w-screen h-screen overflow-y-scroll flex flex-col lg:flex-row bg-center bg-no-repeat bg-fixed bg-cover bg-opacity-60"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-full lg:w-[56%] lg:h-screen">
        <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="hidden lg:block w-full lg:w-[44%] px-[1.25rem] lg:h-screen lg:overflow-hidden lg:right-0 lg:pt-4 lg:absolute">
        <PerfectScrollbar>
          <div
            className="w-full px-[0.62rem] py-[1.5rem] flex justify-between lg:hidden"
          >
            {tabs.map((tab, index) => (
              <Link
                text={tab.name}
                key={index}
                active={activeTab === tab.tab}
                onClick={() => setActiveTab(tab.tab)}
              />
            ))}
          </div>
          {activeTab === Tabs.WORK &&
            workHistories.map((workHistory, index) => (
              <Showcase key={index} {...workHistory} />
            ))}
          {activeTab === Tabs.PROJECTS &&
            projects.map((workHistory, index) => (
              <Showcase key={index} {...workHistory} />
            ))}
          {activeTab === Tabs.EDUCATION &&
            education.map((workHistory, index) => (
              <Showcase key={index} {...workHistory} />
            ))}
          {activeTab === Tabs.CONTACT_ME && <ContactMe/>}
        </PerfectScrollbar>
      </div>
      <div className="lg:hidden w-full lg:w-[44%] px-[1.25rem] lg:h-screen lg:overflow-hidden lg:right-0 lg:pt-4 lg:absolute">
          <div
            className="w-full px-[0.62rem] py-[1.5rem] flex justify-between lg:hidden"
            id="links"
          >
            {tabs.map((tab, index) => (
              <Link
                text={tab.name.split(' --- ')[1]}
                key={index}
                active={activeTab === tab.tab}
                onClick={() => setActiveTab(tab.tab)}
              />
            ))}
          </div>
          {activeTab === Tabs.WORK &&
            workHistories.map((workHistory, index) => (
              <Showcase key={index} {...workHistory} />
            ))}
          {activeTab === Tabs.PROJECTS &&
            projects.map((workHistory, index) => (
              <Showcase key={index} {...workHistory} />
            ))}
          {activeTab === Tabs.EDUCATION &&
            education.map((workHistory, index) => (
              <Showcase key={index} {...workHistory} />
            ))}
          {activeTab === Tabs.CONTACT_ME && <ContactMe/>}
      </div>
    </div>
  );
};
