import { SyntheticEvent, useState } from 'react';
import { Button, SnackbarCloseReason } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import ProSnackbar from './ProSnackbar';

const ThemeToggler = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (_event: SyntheticEvent, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };
  return (
    <>
      <Button color="neutral" variant="soft" shape="circle" onClick={() => setOpen(true)}>
        <IconifyIcon icon="material-symbols-light:palette-outline" sx={{ fontSize: 22 }} />
      </Button>
      <ProSnackbar open={open} onClose={handleClose} />
    </>
  );
};

export default ThemeToggler;
