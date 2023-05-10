interface Repo {
  id: number;
  html_url: string;
  name: string;
}

export interface Project {
  company_email: string;
  company_name: string;
  project_description: string;
  project_name: string;
  repo: Object<Repo>;
  signed_customer: boolean;
  signed_document: boolean;
  url_document: string;
}
