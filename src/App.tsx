import {  Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import NavbarMain from "./components/NavbarMain";
import { Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "./components/Footer";


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavbarMain />
      <Container maxWidth="sm">
        <Routes >
          <Route path='/' element={<HomePage />}  />
          <Route path='/home' element={<HomePage />}  />
          {/* <Route path='/about' element={<AboutPage />} />
          <Route path='/certificate' element={<CertificatePage />} />
          <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
      </Container>
      <Footer />
      </ThemeProvider>
    </Box>
  )
}

export default App
