import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

export const SnackbarContent: Components<Omit<Theme, 'components'>>['MuiSnackbarContent'] = {
  defaultProps: {
    variant: 'elevation',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: Number(theme.shape.borderRadius) * 8,
      padding: theme.spacing(0.75),
    }),
    message: {
      padding: 0,
    },
  },
};
