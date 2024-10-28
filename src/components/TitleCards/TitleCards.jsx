import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({ title,category }) => {

  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGE5NWViZTQzNjMwZWFjM2Y2MDA2YTkxMWIzN2FlMiIsIm5iZiI6MTczMDEyNTk2Ni4yMjQ3NjEsInN1YiI6IjY3MWY5ZThiNDU0MmUzNzFmZTBiMTg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FET_YVqRgh8gpA-31tBQ0SSJ2hd17aRpF_QrJdN3hwA'
    }
  };
  
  
  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <div className="card" key={index}><img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}/>
          <p>{card.original_title}</p></div>
        })}
      </div>
    </div>
  )
}

export default TitleCards