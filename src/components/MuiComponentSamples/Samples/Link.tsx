/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function LinksExample() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      {"課題：下線の距離、bold"}<br />
      {""}<br />
      
      <Link href="#" underline="none">テキスト</Link>
      <Link href="#" underline="always">テキスト</Link>
    </Box>
  );
}
