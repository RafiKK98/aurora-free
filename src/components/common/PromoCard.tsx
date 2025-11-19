import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper, { PaperProps } from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { storeLink } from 'lib/constants';
import Image from 'components/base/Image';
import image from '/assets/images/illustrations/2.webp';

const PromoCard = ({ sx, ...rest }: PaperProps) => {
  return (
    <Paper
      background={1}
      sx={{ p: 2, borderRadius: 4, outline: 0, position: 'relative', ...sx }}
      {...rest}
    >
      <Stack direction="column" alignItems="center" gap={0.5}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: 18,
            background: `linear-gradient(92.45deg, #20DE99 -0.35%, #7DB1F5 43.54%, #5A9EF6 78.08%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          More Features?
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`From only `}
          <Box component="strong" sx={{ color: 'text.primary' }}>
            $69
          </Box>
        </Typography>

        <Box component="figure" sx={{ maxWidth: 160, mx: 'auto', my: 0.5 }}>
          <Image alt="Aurora dashboard" src={image} sx={{ width: 1, height: 1 }} />
        </Box>

        <Button href={storeLink} target="_blank" variant="contained" color="neutral">
          Upgrade to Pro
        </Button>
      </Stack>
    </Paper>
  );
};

export default PromoCard;
