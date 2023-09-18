

import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Nav from './components/Navbar/Nav'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptins/PriceOptions'

function App() {

  return (
    <>
    <Nav></Nav>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl font-bold underline">
      Hello world!
    </h1>
    <PriceOptions></PriceOptions>
    <LineChart ></LineChart>
    <Phones></Phones>
    
    </>
  )
}

export default App
