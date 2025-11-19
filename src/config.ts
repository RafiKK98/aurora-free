import { mainDrawerWidth } from 'lib/constants';

export type FontFamily = 'Plus Jakarta Sans' | 'Roboto' | 'Inter' | 'Poppins';

export interface Config {
  assetsDir: string;
  sidenavCollapsed: boolean;
  openNavbarDrawer: boolean;
  drawerWidth: number;
  fontFamily: FontFamily;
}

export const initialConfig: Config = {
  assetsDir: import.meta.env.VITE_ASSET_BASE_URL ?? '',
  sidenavCollapsed: false,
  openNavbarDrawer: false,
  drawerWidth: mainDrawerWidth.full,
  fontFamily: 'Plus Jakarta Sans',
};

export const defaultAuthCredentials = {
  email: 'demo@aurora.com',
  password: 'password123',
};
