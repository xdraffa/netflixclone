import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Headers from './components/header'


export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(true)

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  },[]);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return() => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])
  
  
  
  return(
    <div className="page">
      <Headers black={blackHeader}/>
      


      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        <p>Netflix © ALL RIGHTS RESERVED 2021.</p>
        <p>THEMOVIEDB.ORG API.</p>
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando"/>
        </div>
      }
    </div>
  )

}