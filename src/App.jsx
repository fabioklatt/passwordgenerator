import { useState } from "react"
import Input from "./components/Input/Input"

export default function App() {

  const [password, setPassword] = useState()
  const [copyText, setCopyText] = useState('copy')
  const [size, setSize] = useState(6)
  const [showInput, setShowInput] = useState(false)

  function generate() {
    const character = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%¨&*(_+´[]Ç~,.;`{}ç^<>:"
    let newPassword = ''

    for (let i = 0; i < size; i++) {
      let position = Math.floor((Math.random() * character.length))
      newPassword += character[position]    
    }

    setPassword(newPassword)
    setCopyText('copy')
  }

  function copy(){
    
    navigator.clipboard.writeText(password)
    setCopyText('copied!')
  }

  return (
    <div>
      <h2>PASSWORD GENERATOR</h2>
       <div className="customSize">
         <label>custom size </label>  
          <input 
            type="checkbox"
            value={showInput}
            onChange={() => setShowInput(currentValue => !currentValue)}
          />
          {showInput &&
           <Input size={size} setSize={setSize}/>
           }
       </div>
      
       <button onClick={generate}>generate</button>
       <button onClick={copy}>{copyText}</button>  
       <div className="newPassword">
         {password}
        </div>    
       

    </div>
  )

}
