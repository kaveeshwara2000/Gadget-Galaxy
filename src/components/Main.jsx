import React,{useState} from 'react'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import keyboard from '../assets/keyboard.jpg'
import sunGlass from '../assets/glasses.jpeg'
import leatherWatch from '../assets/leatherWatch.jpg'
import mouse from '../assets/mouse.jpg'
import monitor from '../assets/monitor.jpg'


const Main = () => {
  let Products =[
    {
      img:sunGlass,
      title:'Sun Glasses',
      description:'lorem ipsum dolar',
      price:1200
    },
    {
      img:keyboard,
      title:'Black Keyboard',
      description:'lorem ipsum dolar',
      price:1500
    },
    {
      img:watch,
      title:'Apple Watch',
      description:'lorem ipsum dolar',
      price:45000
    },
    {
      img:mouse,
      title:'Black Mouse',
      description:'lorem ipsum dolar',
      price:650
    },
    {
      img:laptop,
      title:'acer laptop',
      description:'lorem ipsum dolar',
      price:130000
    },
    {
      img:leatherWatch,
      title:'Leather Watch',
      description:'lorem ipsum dolar',
      price:3000
    },
    {
      img:monitor,
      title:'One plus monitor',
      description:'lorem ipsum dolar',
      price:35000
    },
    
  ]
  const [filteredProducts,setFilteredProducts]=useState(Products)
  const searchHandler = (e)=>{
    const filteredArray= Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
    if(filteredArray.length !=0){
      setFilteredProducts(filteredArray);
    }
  }
  return (
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='text-3xl font-bold'>Gadget Galaxy</h1>
          <div className='search flex justify-between items-center px-5py-2 bg-gray-100 rounded'>
          <input type="text" placeholder='Search product' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><CiSearch/></button>
          </div>
        </div>
        <div className='categories w-full flex justify-between px-2 py-10'>
          <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Monitors</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Mouses</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Glasses</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Keyboards</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>PC</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Headset</p>
          </div>
        </div>
      </div>
      <div className='products grid grid-cols-2 xl:grid-cols-5'>
      {filteredProducts && filteredProducts.map((product,idx)=>{
          return(
            <div key={idx} className='product h-[300px] bg-white drop-shadow-2xl p-2 border'>
            <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2' />
            <div className='m-2 bg-gray-100 p-2 text-left'>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <p className='flex-sm'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>Rs.{product.price}.00</p>
                <CiShoppingCart size={'2rem'}/>
              </div>
            </div>
          </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default Main