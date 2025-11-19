import { useState } from 'react';
import { Button, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import { languages } from 'data/languages';
import IconifyIcon from 'components/base/IconifyIcon';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState(languages[0]); // static selection only

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (language: (typeof languages)[number]) => {
    setSelected(language); // purely UI selection
    handleClose();
  };

  return (
    <>
      <Button color="neutral" variant="text" shape="circle" onClick={handleClick}>
        <IconifyIcon icon={selected.icon} sx={{ fontSize: 24 }} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.shortLabel}
            onClick={() => handleItemClick(language)}
            selected={selected.locale === language.locale}
            sx={{ minWidth: 200 }}
          >
            <ListItemIcon>
              <IconifyIcon icon={language.icon} sx={{ fontSize: 24 }} />
            </ListItemIcon>

            <ListItemText
              primary={language.label}
              slotProps={{
                primary: { sx: { fontSize: 14 } },
              }}
            />

            <Typography
              variant="subtitle2"
              sx={{
                color: 'text.secondary',
                fontWeight: 'normal',
              }}
            >
              {language.currencySymbol}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;
