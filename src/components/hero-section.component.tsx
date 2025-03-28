import { SocialMediaIcon } from './social-media-icon.component.tsx';
import DownArrow from '../assets/icons/down-arrow.svg';
import { Link } from './link.component.tsx';
import { socialMediaLinks, Tabs, tabs } from '../assets/data/portfolio-data.tsx';
import { Dispatch, FC, SetStateAction } from 'react';

type HeroSectionProps = {
  activeTab: Tabs;
  setActiveTab: Dispatch<SetStateAction<Tabs>>;
};

export const HeroSection: FC<HeroSectionProps> = ({
                                                    activeTab,
                                                    setActiveTab,
                                                  }) => {
  return (
    <div className="h-full w-full flex flex-col pt-20 lg:pt-[8vh] pb-[3.8rem] px-[1.25rem] lg:px-16">
      <div className={'w-full flex flex-col'}>
        <p
          className={
            'text-[2.5rem] lg:text-[3.75rem] lg:leading-[115%] text-[#D9D9D9] font-bold'
          }
        >
          Hey, I'm
          <br />
          Abenezer Ayalneh
        </p>
        <div className={'h-[0.9rem] lg:h-[3.5vh]'} />
        <div className={'w-full flex justify-center lg:justify-start'}>
          <div className={'flex w-[12.5rem] lg:w-[16.25rem] justify-between'}>
            {socialMediaLinks.map((item, index) => (
              <SocialMediaIcon icon={item.icon} link={item.link} key={index} />
            ))}
          </div>
        </div>
        <div className={'h-[0.9rem] lg:h-[3.5vh]'} />
        <p
          className={
            'text-center lg:text-left leading-[160%] text-[1.125rem] lg:text-[1.3rem] text-[#D9D9D9]'
          }
        >
          Full-Stack Developer with 4 years of experience in web application development. My expertise concentrates on Typescript based frontend and backend technologies namely Angular/React and
          Nest.js(Node.js). Even though I don’t like code issues, I have the quality of providing solutions in the best-practice way.
        </p>
        <div className={'hidden lg:flex lg:h-[3.12rem]'} />
        <div className="hidden w-full px-[0.62rem] lg:flex lg:justify-between lg:w-[80%]">
          {tabs.map((tab, index) => (
            <Link
              text={tab.name}
              key={index}
              active={activeTab === tab.tab}
              onClick={() => setActiveTab(tab.tab)}
            />
          ))}
        </div>
      </div>
      <div className={'w-full flex justify-center items-center lg:hidden'}>
        <div className={'h-40 lg:h-[3.12rem]'} />
        <a href="#links">
          <img src={DownArrow} alt={'next page'} />
        </a>
      </div>
    </div>
  );
};
