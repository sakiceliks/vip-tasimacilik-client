import React, {useState,useEffect} from 'react'
import CreateTransfer from '../components/CreateTransfer'
import Transfers from './Transfers'

function TransferPage() {
    const [transfers,setTransfers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/transfers').then(res=>{
      if(res.ok){
        return res.json().then(console.log(res))
      } 
    }).then(jsonRes => setTransfers(jsonRes))
  })
  return (
    <div>
        <Transfers transfers={transfers}/>
    </div>
  )
}

export default TransferPage