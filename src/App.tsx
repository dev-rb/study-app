import * as React from 'react';
import { AppShell, ColorScheme, ColorSchemeProvider, Group, MantineProvider, Stack, Title } from '@mantine/core'
import AppHeader from './components/Navbar';
import { CardsDisplay } from './components/CardsDisplay';
import PreviewDisplay from './components/PreviewDisplay';
import { appTheme } from './utils/theme';
import './App.css'
import { data } from './utils/mockData';

function App() {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, ...appTheme }} withGlobalStyles withNormalizeCSS>
        <div className="App">
          <AppShell
            header={<AppHeader />}
            styles={{ 'main': { height: '100vh' } }}
          >
            <Stack align={'center'} justify='center' spacing={'xs'} sx={{ height: '100%' }}>
              {/* <Title align='left' sx={(theme) => ({ color: theme.colors.gray[5] })}> Cards </Title> */}
              <CardsDisplay cardData={data}></CardsDisplay>

              <PreviewDisplay />
            </Stack>
          </AppShell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
