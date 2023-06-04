
import './App.css'
import Navmenu from './components/header'
import Intro from './components/main'
import About from './components/about'
import Skills from './components/skills'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  
  return (
    <>
      
      <ChakraProvider>
      <Navmenu/>
      <Intro/>
      <About/>
      <Skills/>
    </ChakraProvider>
    </>
  )
}


export default App
