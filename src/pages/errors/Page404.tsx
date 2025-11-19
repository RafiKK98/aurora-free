import { Box, Button, Stack, Typography } from '@mui/material';
import image from 'assets/images/illustrations/1.webp';
import Image from 'components/base/Image';

const Page404 = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: { xs: 2.5, sm: 5 },
      }}
    >
      <Stack
        direction="column"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mb: 10,
            width: {
              xs: 300,
              sm: 500,
              md: 800,
              lg: 1046,
            },
            height: 'auto',
          }}
        >
          <Image src={image} width="100%" height="100%" alt="404" />
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.disabled',
              fontWeight: 'medium',
              mb: 2,
            }}
          >
            Page not found
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              fontWeight: 'normal',
              mb: 5,
            }}
          >
            No worries! Let’s take you back{' '}
            <Box
              component="br"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            />
            while our bear is searching everywhere
          </Typography>

          <Button variant="contained" href="/" size="large" sx={{ px: 7 }}>
            Go Back Home{' '}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Page404;
