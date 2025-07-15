import './App.css'
import { GraphicBar } from './components/GraphicBar'

import { Hero } from './components/Hero'
import { Presentation } from './components/Presentation'
import { UnorderedText } from './components/UnorderedText'

function App() {

  return (
    <main>
      <Hero/>
      <Presentation/>
      <UnorderedText/>
      <GraphicBar/>  
    </main>
  )
}

export default App
