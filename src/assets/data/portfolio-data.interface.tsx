export type PortfolioDataInterface = {
  title: string;
  company?: Company;
  jobType?: string;
  period?: string;
  location?: string;
  description: string[];
  bulletPoints?: string[];
}

type Company = {
  name: string;
  link?: string;
};
