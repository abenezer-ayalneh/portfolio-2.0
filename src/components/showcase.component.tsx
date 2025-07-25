import { FC, Fragment } from 'react';
import { PortfolioDataInterface } from '../assets/data/portfolio-data.interface';
import './showcase.styles.css';

const DotSeparator = () => {
  return (
    <div className="w-[1rem] flex justify-center items-center">
      <span className="w-[0.187rem] h-[0.187rem] rounded-full bg-[#D9D9D9]"></span>
    </div>
  );
};

// Helper function to parse text and wrap URLs
const parseTextWithUrls = (text: string) => {
  const urlRegex =
    /(https?:\/\/[^\s|^)]+)/g; // Regex to match URLs starting with http or https

  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={`url-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7ED957] underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export const Showcase: FC<PortfolioDataInterface> = ({
  title,
  description,
  bulletPoints,
  company,
  jobType,
  location,
  period,
  link,
}) => {
  return (
    <div
      className="py-[1.25rem] px-[0.94rem] lg:p-[1.88rem] mb-[1.25rem] text-[#D9D9D9]"
      style={{
        borderRadius: '0.125rem',
        background:
          'linear-gradient(134deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 0%, rgba(16, 36, 41, 0.30) 100%)',
        backdropFilter: 'blur(29px)',
      }}
    >
      <div>
        {link ? (
          <a
            href={link}
            target="_blank"
            className="text-[1.375rem] lg:text-[1.75rem] font-bold leading-[125%] text-[#7ED957] underline"
          >
            {title}
          </a>
        ) : (
          <p className="text-[1.375rem] lg:text-[1.75rem] text-[#D9D9D9] font-bold leading-[125%]">
            {title}
          </p>
        )}
        <div className="flex justify-start items-center text-[0.875rem] lg:text-[1.125rem] leading-[125%]">
          {company && (
            <a
              href={`${company?.link ?? '#'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7ED957] underline"
            >
              {company?.name}
            </a>
          )}

          {jobType && (
            <>
              <DotSeparator />
              <p>{jobType}</p>
            </>
          )}
          {period && (
            <>
              <DotSeparator />
              <p>{period}</p>
            </>
          )}
        </div>
        {location && (
          <p className="text-[0.875rem] lg:text-[1.125rem] leading-[125%]">
            {location}
          </p>
        )}
      </div>
      <div className={'h-[1.25rem]'} />
      {description.map((text, index) => (
        <Fragment key={index}>
          <p className="text-[0.8125rem] lg:text-[1.125rem] leading-[125%]">
            {parseTextWithUrls(text)}
          </p>
          <div className={'h-[0.63rem]'} />
        </Fragment>
      ))}
      <ul className="pl-6 text-[0.8125rem] lg:text-[1.125rem] leading-[125%]">
        {bulletPoints?.map((text, index) => (
          <li key={`li-${index}`} className="list-outside">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
