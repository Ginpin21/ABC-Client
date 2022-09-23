import { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {FaAngleLeft,FaAngleRight,FaUtensils,FaCalendarCheck} from 'react-icons/fa'
const Home = () => {
 
  const switchCarasoul=(e)=>{
      const slides=Array.from(document.querySelectorAll(".slide"))
      let currentIndex = Array.from(document.querySelectorAll(".slide")).indexOf(document.querySelector(".active-slide"))
      let slideIndex= e.currentTarget.id==="previous" ? -1 : 1
      let nextIndex= currentIndex+slideIndex
      if(nextIndex<0){
        nextIndex=slides.length-1
      }
      else if(nextIndex>=slides.length){
        nextIndex=0
      }
      slides[currentIndex].classList.remove("active-slide")
      slides[nextIndex].classList.add("active-slide")
}
  useEffect(()=>{
    const time= 10000
    const interval = setInterval(() => {
      const slides=Array.from(document.querySelectorAll(".slide"))
      let currentIndex = Array.from(document.querySelectorAll(".slide")).indexOf(document.querySelector(".active-slide"))
      let slideIndex= 1
      let nextIndex= currentIndex+slideIndex
      if(nextIndex>=slides.length){
        nextIndex=0
      }
      slides[currentIndex].classList.remove("active-slide")
      slides[nextIndex].classList.add("active-slide")
    }, time);
    return () => clearInterval(interval);
},[])
  return (
    <article className="flex flex-row ">
      <button className='swap-btn  left-0 ' id='previous' onClick={switchCarasoul}><FaAngleLeft /></button>
      <div className='w-full min-h-screen flex'>
        <div  className="active-slide slide flex items-center justify-center  bg-[url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
            <h1 className="section-title ">Welcome to ABC Restaurant</h1>
        </div>
        <div className="slide items-start  bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
            <div className='slide-content'>
              <h1 className='font-normal'>Just a few clicks away from the best food in town</h1>
              <p>Have a taste of the most exquisite & delicious dishes in town</p>
              <button className="btn"> <NavLink to={"/meals"} className="w-full h-full flex items-center justify-center gap-5"> Browse Menu <FaUtensils /></NavLink></button>
            </div>
        </div>
        <div className="slide items-end bg-[url('https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
          <div className='slide-content'>
            <p>From the best chefs to the best food, we have everything you need in a restaurant & more.</p>
            <button className="btn"><NavLink to={"/about"} className="w-full h-full flex items-center justify-center gap-5">Learn More <FaAngleRight /> </NavLink></button>
          </div>
        </div>
        <div className="slide items-center bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
          <div className='slide-content'>
            <h1 className='font-normal'>Want to come check it out?</h1>
            <p>What are you waiting for? Make a reservation and bring your friends and family.</p>
            <button className="btn"><NavLink to={"/reservation"} className="w-full h-full flex items-center justify-center gap-5">Make Reservation <FaCalendarCheck /> </NavLink></button>
          </div>
        </div>
      </div>
      <button className='swap-btn  right-0 ' id='next' onClick={switchCarasoul}><FaAngleRight /></button>
    </article>
  )
}

export default Home
