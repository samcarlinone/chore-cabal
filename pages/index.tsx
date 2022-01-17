import { Container, Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from '../src/shared/Link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Chore Cabal</title>
      </Head>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
