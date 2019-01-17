export interface Project {
  id: number;
  name: string;
  description: string;
  slug: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  gitLink?: string;
  link?: string;
  type?: string;
  wip?: boolean;
}