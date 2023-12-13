export interface Company {
  companyName: string;
  jobs: job[]
}

interface job {
  title: string;
  locality: string;
  technicalSkills: string[];
}