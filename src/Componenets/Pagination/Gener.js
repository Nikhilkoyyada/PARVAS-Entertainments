import axios from 'axios'
import React from 'react'
import Chip from '@mui/material/Chip';
import { useEffect } from 'react';

const Gener = ({   type,
setGenere,
genere,
setSelectedGenre,
selectedGenre,

}) => {


  const handleAdd = (g) => {
    setSelectedGenre([...selectedGenre, g]);
    setGenere(genere.filter((gen) => gen.id !== g.id));
    
  };

  const handledelete = (genre) => {
    setSelectedGenre(selectedGenre.filter((selected) => selected.id !== genre.id));
    setGenere([...genere, genre]);
  
  };
 
  
    const fetchgener=async()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9849511ac6cdd6e184258727e15595ec&language=en-US`)
       setGenere(data.genres)
       console.log(data.genres)
      
    }
    useEffect(() => {
      
    fetchgener()
     
    }, [])
    
  return (
    <>
        <div style={{  padding: "6px 0", justifyContent: "center",  alignItems: "center"}}>
          {selectedGenre && selectedGenre.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
       color='primary'
          clickable
          size="small"
          onClick={()=>handledelete(genre)}
    
         
        />
      ))}   
          { genere&&genere.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
       color='secondary'
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
         
          
        />
      ))}
      </div>

    </>
  )
}

export default Gener