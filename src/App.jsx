import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [lst,setList] = useState([]);
  let [item, setItem] = useState('');
  
  function addItem (){
    setList([...lst,item])
    setItem('')
  }

  function changeItem(e){
    setItem(e.target.value)
  }

  function deleteItem(index){
    let temp = [...lst]
    let temp2 = [];
    for(let i = 0; i<temp.length; i++){
      if(i == index){
        continue;
      }else{
        temp2.push(temp[i])
      }
    }
    setList(temp2)
  }

  function editITem(index,e){
    let temp = [...lst]
    for (let i = 0; i<temp.length;i++){
      if(i === index){
        temp[i] = e.target.value;
        
      }
    }
    console.log(temp)
    setList(temp)
  }

  return(
    <div className='conta'>
      <h1>TO-DO List</h1>
      <div className='main'>
        <div>
          <input type="text" value={item} placeholder='Enter the task' onChange={(e) => changeItem(e)}/>
        </div>
        <div>
          <button type='submit' onClick={addItem}>Add</button>
        </div>
      </div>
      <div>
        {
          lst.map((item, index)=>{
            return(
              <div key={index} className='items'>
                <input type="text" value={item} onChange={(e) => editITem(index,e)}/>
                <button type='submit' onClick={()=>deleteItem(index)}> Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
