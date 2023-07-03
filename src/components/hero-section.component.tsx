import { SocialMediaIcon } from './social-media-icon.component';
import GithubIcon from '../assets/icons/github-icon.svg';
import LinkedinIcon from '../assets/icons/linkedin-icon.svg';
import GmailIcon from '../assets/icons/gmail-icon.svg';
import PhoneIcon from '../assets/icons/phone-icon.svg';
import { Links } from './links.component';
import { Divider } from './divider.component';

export const HeroSection = () => {
  return (
    <div className="flex flex-col h-full justify-center items-start pl-20">
      <div className="w-[46.25rem]">
        <p className="text-[5.25rem] font-bold text-white leading-none">
          Hey, I'm
          <br />
          Abenezer Ayalneh
        </p>
      </div>
      <Divider height={3.12} />
      <div className="flex justify-between w-[16.25rem]">
        <SocialMediaIcon icon={GithubIcon} />
        <SocialMediaIcon icon={LinkedinIcon} />
        <SocialMediaIcon icon={GmailIcon} />
        <SocialMediaIcon icon={PhoneIcon} />
      </div>
      <Divider height={3.12} />
      <div className="w-[46.25rem]">
        <p className="text-[1.5rem] font-normal text-white leading-[160%]">
          I'm a software engineer based in Addis Ababa, Ethiopia. I am adept at
          utilizing frameworks like Laravel and Nest.js, working with databases
          such as MySQL and PostgreSQL, and leveraging Docker for efficient
          containerization. My proficiency extends to frontend technologies like
          React.js, allowing me to contribute effectively to full-stack
          development projects.
        </p>
      </div>
      <Divider height={3.12} />
      <Links />
    </div>
  );
};
