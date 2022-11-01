import React, {useState,useEffect} from 'react'
import AddPassenger from '../components/AddPassenger'
import Passengers from './Passengers'
function PassengerPage() {
    const [passengers,setPassengers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/passengers').then(res=>{
      if(res.ok){
        return res.json().then(console.log(res))
      } 
    }).then(jsonRes => setPassengers(jsonRes))
  })
  return (
    <div>
              <AddPassenger/>

        <Passengers passengers={passengers}/>
    </div>
  )
}

export default PassengerPage