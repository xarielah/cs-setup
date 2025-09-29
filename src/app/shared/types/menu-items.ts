export enum MenuHrefs {
  Home = '/',
  GuidedSetup = '/guided-setup',
  Articles = '/articles',
}

export type MenuItem = {
  label: string;
  href: MenuHrefs;
};

export const menuItems: MenuItem[] = [
  { label: 'Home', href: MenuHrefs.Home },
  { label: 'Guided Setup', href: MenuHrefs.GuidedSetup },
  { label: 'Articles', href: MenuHrefs.Articles },
];
