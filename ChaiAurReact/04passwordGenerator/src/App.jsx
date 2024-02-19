import { useState,useCallback, useEffect ,useRef} from 'react'
import './App.css'

// hooks learnt 
// 1. usestate 2.usecallback 3. useEffect  4.useRef
function App() {
  const [length,setLength] = useState(0);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [password,setPassword] = useState("")

  const passwordref = useRef(null)
  // hook to set a refrence to an element

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str +="0123456789";
    }
    if(charAllowed){
      str +="!@#$%^&*()_+-<>[]{}~";
    }
    for (let index = 0; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length + 1)
      
      pass += str.charAt(char)
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);
//usecallback to optimize the result base on given dependencies

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select() 
    // selction effect
    passwordref.current?.setSelectionRange(0,9)
    // range to copy
      window.navigator.clipboard.writeText(password)
      // to copy text to clipboard
  },[password])

  // useEffect hook -> when page is called first time it is called
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed]);
  return (
    <>
        <div className="flex flex-col w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-400 bg-gray-700">
          <h1 className='text-white mt-3'>Password Generator </h1>
          <div className="flex shadow-lg overflow-hidden mb-4 ">
            <input type="text" value={password}
            className='outline-none  rounded-xl w-full py-1 mt-2 px-3 '
            placeholder='password'
            readOnly
            ref = {passwordref}//refrence by useRef hook
            />

            <button className='flex items-center justify-center px-3 bg-blue-700 rounded-xl outline-none mt-2 hover:bg-blue-400'
            onClick={copyPasswordToClipboard}>
              copy
            </button>
            </div>
            <div className="flex overflow-hidden justify-between  mt-2 mb-2 ml-2 mr-2">
              <div>
              <input type="range" min='6' max='20' value={length} className='cursor-pointer '
              onChange={(e)=>{
                setLength(e.target.value)
              }}/><label > Length:{length}</label>
              </div>
              <div className='flex items-center gap-x-1  '>
                <input type="checkbox" 
                
                defaultChecked={numberAllowed} 
                id="numberInput"
                onChange={()=>{
                  setnumberAllowed((prev)=>!prev);
                }}
                  
                
               />
               <label>Numbers</label>
              </div>
              <div className='flex items-center gap-x-1 '>
                <input type="checkbox" 
                defaultChecked={charAllowed} 
                id="charInput"
                onChange={()=>{
                  setcharAllowed((prev)=>!prev);
                }}
                  
                
               />
               <label>Characters</label>
              </div>
            </div>

        </div>
    </>
  )
}

export default App
