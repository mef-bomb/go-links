import { Box, Link } from '@mui/material'
import { FC } from 'react'

import { GithubLogo } from 'app/icons'

export const Footer: FC = () => {
  return (
    <Box
      sx={{
        display: 'none',
        '@media (min-width: 840px)': {
          height: 64,
          display: 'flex',
        },
        backgroundColor: '#f6f8fa',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <Link href='https://github.com/trotto/go-links'>
        <GithubLogo />
      </Link>
      <Link href='/pricing'>Pricing</Link>
      <Link href='/privacy'>Privacy</Link>
      <Link href='/terms'>Terms</Link>
      <Link href='/contact'>Contact us</Link>
    </Box>
  )
}
