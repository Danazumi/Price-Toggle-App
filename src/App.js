// import './App.css';
import './index.css';
import Toggle from './Toggle'
import { useState } from 'react'




function Vim({Basic, Professional, Master}) {
  const [price, setPrice] = useState({price1: 19.99, price2: 24.99, price3: 39.99 })
  const [enabled, setEnabled] = useState(false)

  // function handleT(){
  //   setEnabled(val => !val)
  // }
   
  
  return (
          
          <div className = "bckgrnd">
            <div className = "pt-8 text-3xl font-bold text-neutral-600 flex justify-center">Our Pricing</div>
            <div className = "font-bold flex justify-center space-x-5 > *">
            <div className = "py-16 font-bold text-neutral-400">Annually</div>
            <Toggle 
                  enabled = {enabled}
                    setEnabled = {setEnabled}/>
            <div className = "py-16 font-bold text-neutral-400">Monthly</div>
            </div>
            <main className = "cards">
            <div className='left'>
                <div className = "p-7 text-neutral-500"> Basic </div>
                <div className = " text-6xl font-bold text-neutral-700">{enabled ? price.price1 : price.price1 + 180}</div>
                <ul className = "p-7 text-neutral-500">
                <li className = "border-b-2 border-t-2 p-3">{`${Basic.storage} GB Storage`}</li>
                <li className = "border-b-2 p-3">{`${Basic.users} Users Allowed`}</li>
                <li className = "border-b-2 p-3">{`Send up to ${Basic.send} GB`}</li>
                </ul>
                <div className = "flex justify-center text-neutral-500">
                <button className={`${enabled ? 'bg-indigo-400 hover:bg-blue-700 text-white' : 'bg-white hover:bg-blue-700 text-indigo-400 border border-indigo-300'}
                w-64  font-bold py-2 px-4 rounded`}>
                  LEARN MORE
                </button>
                </div>
            </div>
            <div className='centre'>
            <div className = "py-10 text-white"> Professional </div>
                <div className = "text-6xl font-bold text-white">{enabled ? price.price2 : price.price2 + 225}</div>
                <ul className = "p-7 text-white">
                <li className = "border-b-2 border-t-2 p-3">{`${Professional.storage} TB Storage`}</li>
                <li className = "border-b-2 p-3">{`${Professional.users} Users Allowed`}</li>
                <li className = "border-b-2 p-3">{`Send up to ${Professional.send} GB`}</li>
                </ul>
                <div className = "flex justify-center text-neutral-500">
                {/* <button className="w-64 bg-white hover:bg-blue-700 text-indigo-500 font-bold py-2 px-4 rounded"> */}
                <button className={`${enabled ? 'bg-white hover:bg-blue-700 text-indigo-500' : 'bg-indigo-400 hover:bg-blue-700 text-white border border-white-100'}
                w-64  font-bold py-2 px-4 rounded`}>

                  LEARN MORE
                </button>
                </div>
            </div>
            <div className='right'>
            <div className = "p-7 text-neutral-500"> Master </div>
                <div className = " text-6xl font-bold text-neutral-700">{enabled ? price.price3 : price.price3 + 360}</div>
                <ul className = "p-7 text-neutral-500">
                <li className = "border-b-2 border-t-2 p-3">{`${Master.storage} TB Storage`}</li>
                <li className = "border-b-2 p-3">{`${Master.users} Users Allowed`}</li>
                <li className = "border-b-2 p-3">{`Send up to ${Master.send} GB`}</li>
                </ul>
                <div className = "flex justify-center text-neutral-500">
                <button className={`${enabled ? 'bg-indigo-400 hover:bg-blue-700 text-white' : 'bg-white hover:bg-blue-700 text-indigo-400 border border-indigo-300 '}
                w-64  font-bold py-2 px-4 rounded`}>
                  LEARN MORE
                </button>
                </div>
              
            </div>
            </main>  
          </div>
          
    
  )
}

export default function App() {
  return(
        <div>
          <Vim
              Basic = {{price: '19.99', storage:'500', users: '2', send:'3'}}
              Professional = {{price: '24.99', storage:'1', users: '5', send:'10'}}
              Master = {{price: '39.99', storage:'2', users: '10', send:'20'}}
            
          />
          
        </div>
  )
}

