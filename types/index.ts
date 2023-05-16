export type VotesType = {
  count: number;
  value: number;
}

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[]
}

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
}

export type ProductType = {
  id: string;
  slug: string;
  title: string;
  price: number;
  images: any[];
  description: string;
  thumbnail: string;
}

export type ProductTypeList = {
  id: string;
  slug: string;
  title: string;
  price: number;
  images: any[];
  thumbnail: string;
}

export type ProductStoreType = {
  id: string;
  title: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
}

export type GtagEventType = {
  action: string;
  category: string; 
  label: string;
  value: string
}