import { useState } from 'react';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FontFamily } from 'config';
import IconifyIcon from 'components/base/IconifyIcon';

interface FontFamilyItemProps {
  fontFamily: FontFamily;
  active: boolean;
}

const FontFamilyItem = ({ fontFamily, active }: FontFamilyItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <FormControlLabel
      value={fontFamily}
      control={<Radio />}
      label={
        <Paper
          background={isHovered || active ? 2 : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{ p: 2, borderRadius: 2, width: '100% !important', position: 'relative' }}
        >
          <Stack direction="column" gap={2}>
            <Typography variant="caption" sx={{ fontFamily, fontWeight: 500 }}>
              {fontFamily}
            </Typography>
            <Typography sx={{ fontFamily: fontFamily }}>
              Almost before we knew it, we had left the ground.
            </Typography>
          </Stack>
          {active && (
            <IconifyIcon
              icon="material-symbols:check-circle-rounded"
              sx={{
                color: 'primary.main',
                fontSize: 24,
                position: 'absolute',
                top: 8,
                right: 8,
              }}
            />
          )}
        </Paper>
      }
      sx={{
        [`& .${formControlLabelClasses.label}`]: { mt: 0 },
      }}
    />
  );
};

export default FontFamilyItem;
