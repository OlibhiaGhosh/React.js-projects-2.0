import { useState } from 'react'
import './App.css'
import Basiccomponent from './component/basiccomponent'

function App() {
  const [fromamount, setfromAmount ]= useState("");
  const [toamount, settoAmount ]= useState("");
  const [isamount, setIsamount ]= useState(true);
  const [iscurrency, setIscurrency ]= useState(false);
  const [fromcurrency, setfromCurrency] = useState("USD")
  const [tocurrency, settoCurrency] = useState("INR")


  return (
    <>
      <Basiccomponent/>
      <button>Swap</button>
      <Basiccomponent/>
      <button>Convert</button>
    </>
  )
}

export default App
