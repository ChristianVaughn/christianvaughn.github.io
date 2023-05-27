import { liveURL } from "../../../custom.config";
import { IPageTheme, IPageURL } from "../../../typescript/interfaces/common.interface";

export const pageURLs: IPageURL[] = [
  {
    url: liveURL + '/',
    title: 'Index 1'
  }
]

export const pageThemes: IPageTheme[] = [
  {
    name: 'orange',
    color: '#fd7e14'
  },
  {
    name: 'teal',
    color: '#22d4b5'
  },
  {
    name: 'primary',
    color: '#00bcd4'
  },
  {
    name: 'info',
    color: '#304CFD'
  },
  {
    name: 'grey',
    color: '#6c757d'
  },
  {
    name: 'red',
    color: '#ef4d56'
  },
  {
    name: 'turquoise',
    color: '#0dcaf0'
  },
  {
    name: 'blue',
    color: '#425cbb'
  },
  {
    name: 'secondary',
    color: '#7081b9'
  },
  {
    name: 'pink',
    color: '#f05492'
  },
  {
    name: 'green',
    color: '#69c380'
  },
  {
    name: 'yellow',
    color: '#ffc835'
  }
]