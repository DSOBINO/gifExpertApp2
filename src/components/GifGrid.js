import React, {useState, useEffect} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
  
  const [images, setImages] = useState([]);

  //const state = useFetchGifs();

  const { data, loading } = useFetchGifs( category );

  /*
  console.log(loading);
  console.log(data);
*/
  // useEffect(() => { 
  //       getGifs( category )
  //           //.then( imgs => setImages( imgs ) ) 
  //           .then( setImages ); 
  // }, [ category ])

  return (
    <div className = "card-grid">
        <h3> { category } </h3>
        <h3>
            { loading ?? 'Cargando...' }
            { 
                data.map( img => (
                   <GifGridItem 
                        key={ img.id }
                        { ...img} 
                   />
                ))
            }
        </h3>
    </div>
  )
}
