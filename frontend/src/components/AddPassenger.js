import React from 'react'

export default function AddPassenger() {
  return (
    <div>
      <div className='container w-50 mt-5 border rounded p-2 border-secondary'>
      
<form style={{padding:'10px 10px 5px 10px'}}>
<div className='form-floating mb-3'>
  <input type="text" name="Driver Name" className="form-control" placeholder="Driver Name"></input>
  
  <label>Yolcu ID</label>
</div>
<div className='form-floating mb-3'>
  <input type="text" name="Driver Email" className="form-control" placeholder="Driver Email"></input>
  <label>Yolcu Adı</label>
</div>
<div className='form-floating mb-3'>
  <input type="text" name="Driver Phone Number" className="form-control" placeholder="Driver Phone Number"></input>
  <label>Yolcu Mail</label>
</div>
<div className='form-floating mb-3'>
  <input type="text" name="Driver Phone Number" className="form-control" placeholder="Driver Phone Number"></input>
  <label>Yolcu Tel No</label>
</div>
<div className='form-floating'>
  <select className='form-select' id="floatingSelect">
    <option value="calisan">Çalışan</option>
    <option value="hasta">Hasta</option>

  </select>
  <label for="floatingSelect">Yolcu Türü</label>

</div>
<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-1 py-2 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-6 md:text-lg">Yolcu Ekle</a>
            </div>
            
          </div>

</form>


      </div>
    </div>
  )
}

