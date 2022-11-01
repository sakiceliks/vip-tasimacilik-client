import React, {useState,useEffect} from 'react'
import AddDriver from '../components/AddDriver'
import Drivers from './Drivers'
import axios from 'axios'
function DriversPage() {
    const [drivers,setDrivers] = useState([])
    const [driver,setDriver] = useState({
      driverName:"",
      driverMail:"",
      driverPhone:""
})

  useEffect(() => {
    fetch('http://localhost:5000/drivers').then(res=>{
      if(res.ok){
        return res.json().then(console.log(res))
      } 
    }).then(jsonRes => setDrivers(jsonRes))
  })

const handleChange = (e) => {
  const { name,value} = e.target;
  setDriver(prevInput =>{
    return(
      {
        ...prevInput,
        [name]:value
      }
    )
  })
}


const addDriver = (e) =>{
  e.preventDefault();
  const newDriver = {
    driverID:driver.driverID,
    driverName:driver.driverName,
    driverMail:driver.driverMail,
    driverPhone:driver.driverPhone
  }


axios.post('http://localhost:5000/newDriver',newDriver)
alert(`${driver.driverName} isimli sürücü eklendi.`)
setDriver({driverID:"",driverName:"",driverMail:"",driverPhone:""})

}


  return (
    <div>
            <AddDriver driver={driver} handleChange={handleChange} addDriver={addDriver}/>

        <Drivers drivers={drivers}/>

    </div>
  )
}

export default DriversPage