interface ISubNavigation {
  title: string;
  href: string;
}

interface INavItem {
  id: number;
  neighbours: { left: number | null; right: number | null };
  title: string;
  href: string;
  subnavigation?: ISubNavigation[];
  leftBar?: string;
  bottomBar?: {
    title: string;
    links: { title: string; href: string }[];
  };
}
