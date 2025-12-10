import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {
  const [image,setImage] = useState(null)
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
  }
  const[car,setCar] = useState({
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
  })
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title='Add New Car' subTitle='Fill in details tolist a new car for booking,including pricing,availability,and car specifications. '/>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl' >
       {/*image icon*/}
       <div className='flex items-center gap-2 w-full '>
        <label htmlFor="car-image">
          <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
          <input type="file"  id='car-image' accept='image/*' hidden onChange={(e)=>{
           setCar( e.target.files[0])
          }}/>
          <p className='text-sm text-gray-500 '> Upload a picture of your car</p>
        </label>
       </div>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/*car brand model inputes*/}
          <div className='flex flex-col w-full'>
            <label className='text-lg font-medium'>Brand</label>
            <input type="text" placeholder='enter your car brand name..' required className='px-3 py-2 border border-borderColor rounded-md outline-none mt-1' value={car.brand} onChange={(e)=>setCar({...car,brand:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-lg font-medium'>Model</label>
            <input type="text" placeholder='enter your car model name..' required className='px-3 py-2 border border-borderColor rounded-md outline-none mt-1' value={car.model} onChange={(e)=>setCar({...car,model:e.target.value})}/>
          </div>
         </div>
          {/* car daily price category inputes*/}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           <div className='flex flex-col w-full'>
            <label className='font-medium text-lg'>Year</label>
              <input type="text" placeholder='2025' required className='border border-borderColor px-3 py-2 mt-1 rounded-md outline-none' value={car.year} onChange={(e)=>setCar({...car,year:e.target.value})}/>
           </div>
             <div className='flex flex-col w-full'>
            <label className='font-medium text-lg'>Category</label>
              <input type="text" placeholder='XUV' required className='border border-borderColor px-3 py-2 mt-1 rounded-md outline-none' value={car.category} onChange={(e)=>setCar({...car,category:e.target.value})}/>
           </div>
             <div className='flex flex-col w-full'>
            <label className='font-medium text-lg'>Daily Price($)</label>
              <input type="text" placeholder='100' required className='border border-borderColor px-3 py-2 mt-1 rounded-md outline-none' value={car.pricePerDay} onChange={(e)=>setCar({...car,pricePerDay:e.target.value})}/>
           </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           <div className='flex flex-col w-full'>
            <label className='font-medium text-lg'>Transmission</label>
              <input type="text" placeholder='Automatic' required className='border border-borderColor px-3 py-2 mt-1 rounded-md outline-none' value={car.transmission} onChange={(e)=>setCar({...car,transmission:e.target.value})}/>
           </div>
             <div className='flex flex-col w-full'>
            <label className='font-medium text-lg'>Fuel Type</label>
              <input type="text" placeholder='Disel' required className='border border-borderColor px-3 py-2 mt-1 rounded-md outline-none' value={car.fuel_type} onChange={(e)=>setCar({...car,fuel_type:e.target.value})}/>
           </div>
             <div className='flex flex-col w-full'>
            <label className='font-medium text-lg'>Seating Capacity</label>
              <input type="text" placeholder='100' required className='border border-borderColor px-3 py-2 mt-1 rounded-md outline-none' value={car.seating_capacity} onChange={(e)=>setCar({...car,seating_capacity:e.target.value})}/>
           </div>
         </div>
         <div className='flex flex-col w-full'>
             <label className='text-lg font-medium'>Loaction</label>
             <select placeholder='Sweden' className='px-3 py-2 border border-borderColor rounded-md mt-1' required value={car.location} onChange={(e)=>setCar({...car,location:e.target.value})} >
              <option value=''>Select Location</option>
              <option value='New York'>New York</option>
              <option value='Usa'>Usa</option>
              <option value='singapor'>singapor</option>
              <option value='India'>India</option>
             </select>
         </div >
         <div className='flex flex-col w-full'>
          <label >Description</label>
          <textarea rows={5} placeholder='e.g . A Luxurious SUV with a spacious interior and a powerful engine ' className='px-3 py-2 border border-borderColor rounded-md mt-1' required value={car.description} onChange={(e)=>setCar({...car,description:e.target.value})}></textarea>
         </div>
         <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
          <img src={assets.tick_icon} alt="" />
          List Your Car
         </button>
      </form>
    </div>
  )
}

export default AddCar