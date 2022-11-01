import React, {useState,useEffect} from 'react'
import AddTransfer from '../components/AddTransfer'
import TransferPage from './TransferPage'
import axios from 'axios'
function Dashboard() {
    const [transfers,setTransfers] = useState([])
    const [transfer,setTransfer] = useState(	{
      transferID: "",
      transferDate: "",
      transferTime: "",
      transferStartLine: "",
      transferEndLine: "",
      transferCarID:"",
      transferDriverID:"",
      transferPassengerID: ""
     
    })

  useEffect(() => {
    fetch('http://localhost:5000/transfers').then(res=>{
      if(res.ok){
        return res.json().then(console.log(res))
      } 
    }).then(jsonRes => setTransfers(jsonRes))
  })

const handleChange = (e) => {
  const { name,value} = e.target;
  setTransfer(prevInput =>{
    return(
      {
        ...prevInput,
        [name]:value
      }
    )
  })
}


const addTransfer = (e) =>{
  e.preventDefault();
  const newTransfer = {
    transferID: "",
    transferDate: "",
    transferTime: "",
    transferStartLine: "",
    transferEndLine: "",
    transferCarID:"",
    transferDriverID:"",
    transferPassengerID: ""
  }


axios.post('http://localhost:5000/newTransfer',newTransfer)
alert(`${transfer.transferID} isimli sürücü eklendi.`)
setTransfer({
  transferID: "",
  transferDate: "",
  transferTime: "",
  transferStartLine: "",
  transferEndLine: "",
  transferCarID:"",
  transferDriverID:"",
  transferPassengerID: ""
})

}


  return (
    <div>
            <AddTransfer transfer={transfer} handleChange={handleChange} addTransfer={addTransfer}/>

        <TransferPage transfers={transfers}/>

    </div>
  )
}

export default Dashboard