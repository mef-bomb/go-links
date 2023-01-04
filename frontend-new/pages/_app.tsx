import styled from '@emotion/styled'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import 'styles/globals.css'
import useSWR from 'swr'

import { Footer, NavBar } from 'app/components'
import { User } from 'app/types'
import { fetcher } from 'app/utils/fetcher'

const Container = styled.div`
  height: 100vh;
`

const Main = styled.div`
  height: calc(100% - 64px - 64px);
`

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Sans-serif'].join(', '),
    h1: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      '@media (min-width:839px)': {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '30px',
      },
      '@media (min-width:1032px)': {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '36px',
      },
    },
    h2: {
      fontSize: '12px',
      lineHeight: '18px',
      '@media (min-width:839px)': {
        fontSize: '14px',
        lineHeight: '21px',
      },
      '@media (min-width:1032px)': {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
    h3: {
      fontSize: '10px',
      lineHeight: '15px',
      fontWeight: 700,
      '@media (min-width:839px)': {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '21px',
      },
      '@media (min-width:1032px)': {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
      },
    },
    body1: {
      fontSize: '10px',
      lineHeight: '15px',
      '@media (min-width:839px)': {
        fontSize: '12px',
        lineHeight: '18px',
      },
      '@media (min-width:1032px)': {
        fontSize: '14px',
        lineHeight: '21px',
      },
    },
    button: {
      fontSize: '12px',
      '@media (min-width:839px)': {
        fontSize: '14px',
      },
      '@media (min-width:1032px)': {
        fontSize: '16px',
      },
    },
  },
  components: {
    // Name of the component
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: '32px',
          padding: '4px 8px',
          '@media (min-width:839px)': {
            padding: '4px 16px',
          },
          '& fieldset': { border: 'none' },
          '& input, & .MuiInputBase-root': {
            padding: 0,
          },
          '& input:disabled': {
            color: '#000',
            // NOTE: MUI has this prop
            WebkitTextFillColor: 'unset',
          },
          '& input, & input::placeholder': {
            color: '#000',
            opacity: 1,
            fontSize: '10px',
            '@media (min-width:839px)': {
              fontSize: '12px',
            },
            '@media (min-width:1032px)': {
              fontSize: '14px',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          margin: '-8px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          outline: 'none',
          textDecoration: 'none',
          color: '#000000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: '#fff',
          backgroundColor: '#646ae7',
          height: '32px',
          padding: '0 24px',
          borderRadius: '32px',
          textTransform: 'none',
          '&:disabled': {
            backgroundColor: '#bdbcf3',
            color: '#fff',
          },
          '&:hover': {
            backgroundColor: '#bdbcf3',
            color: '#fff',
          },
        },
      },
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const { data: user } = useSWR(`/_/api/users/me`, fetcher<User>)
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar user={user} />
        <script src='/_scripts/config.js'></script>
        <Main>
          <Component {...pageProps} user={user} />
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
