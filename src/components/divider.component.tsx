import { FC, HTMLAttributes } from 'react';

export const Divider: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => {
  // const x = `h-[${height}rem]`
  return <div className={className} {...rest} />;
};