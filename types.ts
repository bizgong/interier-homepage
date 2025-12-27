export interface NavItem {
  label: string;
  href: string;
}

export interface SpaceItem {
  id: string;
  title: string;
  image: string;
}

export interface SignatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: ('HOT' | 'NEW' | 'SALE')[];
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  theme: 'dark' | 'light';
}