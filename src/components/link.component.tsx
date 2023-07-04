import { FC } from 'react';

type LinkProps = {
  active?: boolean;
  text: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
};

export const Link: FC<LinkProps> = ({ active = false, text, onClick }) => {
  return (
    <a
      className={`text-[0.875rem] lg:text-[1.25rem] leading-[125%] cursor-pointer ${
        active ? 'text-[#7ED957]' : 'text-white'
      }`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};
