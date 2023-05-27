export interface INavs {
  hash: string;
  text: string;
  icon?: any;
}

export interface INavBar {
  navs: INavs[];
  className?: string;
  variant?: 'light' | 'dark'
}