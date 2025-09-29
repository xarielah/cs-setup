export enum MenuHrefs {
  Home = '/',
  GuidedSetup = 'guided-setup',
  VideoSettings = 'video-settings',
  CrosshairDesigner = 'crosshair-designer',
  Keybindings = 'keybindings',
  LaunchOptions = 'launch-options',
  Performance = 'performance-boost',
}

export type MenuItem = {
  label: string;
  href: MenuHrefs;
};

export const menuItems: MenuItem[] = [
  { label: 'Home', href: MenuHrefs.Home },
  { label: 'Guided Setup', href: MenuHrefs.GuidedSetup },
  { label: 'Video Settings', href: MenuHrefs.VideoSettings },
  { label: 'Crosshair Designer', href: MenuHrefs.CrosshairDesigner },
  { label: 'Keybindings', href: MenuHrefs.Keybindings },
  { label: 'Launch Options', href: MenuHrefs.LaunchOptions },
  { label: 'Performance Boost', href: MenuHrefs.Performance },
];
