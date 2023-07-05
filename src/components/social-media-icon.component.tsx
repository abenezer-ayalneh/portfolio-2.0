import { FC, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export type SocialMediaIconProps = {
  icon: string;
  link: string;
};

export const SocialMediaIcon: FC<SocialMediaIconProps> = ({ icon, link }) => {
  const [copyText, setCopyText] = useState<string>('Click to Copy')
  const handleTextCopy = () => {
    setCopyText('Copied!')
    navigator.clipboard.writeText(link);
  };
  return (
    <>
      <a
        href={
          link.startsWith('http') ? link : '#'
          // : link.startsWith('+')
          // ? `tel:${link}`
          // : `mailto:${link}`
        }
        // title={link}
        target={link.startsWith('http') ? '_blank' : undefined}
        onClick={link.startsWith('http') ? undefined : handleTextCopy}
        data-tooltip-id="tooltip"
        data-tooltip-content={
          link.startsWith('http') ? undefined : copyText
        }
        className="h-[2.4rem] w-[2.4rem] lg:h-[2.85rem] lg:w-[2.85rem] bg-[#D9D9D9] rounded-full flex justify-center items-center p-[0.5rem]"
        onMouseLeave={() => setCopyText('Click to Copy')}
      >
        <img src={icon} alt="phone number" />
      </a>
      <ReactTooltip id="tooltip" />
    </>
  );
};
