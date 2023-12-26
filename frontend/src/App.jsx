
import Header1 from './Components/header/Header1'
import Header2 from './Components/header/Header2'
import Header3 from './Components/header/Header3'
import Hero from './Components/hero/Hero'
import Main from './Components/main/Main'
import Footer from './Components/footer/Footer'
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Components/Theme";
import Scroll from './Components/scroll/Scroll'

function App() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />

    <Header1/>
    <Header2/>
    <Header3/>
    <Box bgcolor={theme.palette.bg.main}>
    <Hero/>
    <Main/>
    </Box>
    <Footer/>
    <Scroll/>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
