import { SocialMediaIcon } from './social-media-icon.component.tsx';
import GithubIcon from '../assets/icons/github-icon.svg';
import LinkedinIcon from '../assets/icons/linkedin-icon.svg';
import GmailIcon from '../assets/icons/gmail-icon.svg';
import PhoneIcon from '../assets/icons/phone-icon.svg';
import DownArrow from '../assets/icons/down-arrow.svg';

export const HeroSection = () => {
  return (
    <div className='h-full w-full flex flex-col justify-between pt-20 pb-[3.8rem] px-[1.25rem]'>
      <div className={'w-full flex flex-col'}>
        <p className={'text-[2.5rem] text-white font-bold'}>Hey, I'm<br />Abenezer Ayalneh</p>
        <div className={'h-[1.92rem]'} />
        <div className={'w-full flex justify-center'}>
          <div className={'flex w-[12.5rem] justify-between'}>
            <SocialMediaIcon icon={GithubIcon} />
            <SocialMediaIcon icon={LinkedinIcon} />
            <SocialMediaIcon icon={GmailIcon} />
            <SocialMediaIcon icon={PhoneIcon} />
          </div>
        </div>
        <div className={'h-[1.92rem]'} />
        <p className={'text-center leading-[160%] text-[1.125rem] text-white'}>I’m a software engineer based in Addis Ababa, Ethiopia. I am adept at utilizing frameworks like Laravel and Nest.js,
          working with databases such as MySQL and PostgreSQL, and leveraging Docker
          for efficient containerization. My proficiency extends to frontend technologies like React.js, allowing me to contribute effectively to full-stack development projects.</p>
      </div>
      <div className={'w-full flex justify-center items-center'}>
        <img src={DownArrow} alt={'next page'}/>
      </div>
    </div>
  );
};
