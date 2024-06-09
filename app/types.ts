interface Job {
  _id: string;
  title: string;
  summary: string;
  description: TrustedHTML;
  location: string;
  job_type: string;
  salary: number[];
  company: string;
  company_url: string;
  company_logo: string;
  apply_url: string;
  tags: string[];
  status: string;
  seniority_level: string;
  work_arrangement: string;
  location_flexibility: string;
}
