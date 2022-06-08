
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

/*
    const categories = [
      {
        id : 1,
        nombre_pelicula : 'OnePunch',
        fecha : '20220102'
      },
      {
        id : 2,
        nombre_pelicula : 'SamuraiX',
        fecha : '20220103'
      },
      {
        id : 3,
        nombre_pelicula : 'Dragon Ball',
        fecha : '20220104'
      },      
];

*/

//const categories = ['OnePunch', 'SamuraiX', 'Dragon Ball'];
const [categories, setCategories] = useState([]);
/*
const handleAdd = () => {
        setCategories([...categories,'HunterXHunter']);
}
*/

  return (
    <> 
    <div>GifExpertApp</div>
    <AddCategory setCategories={ setCategories } />
    <hr />
{
/*
    <button onClick={ handleAdd } > Agregar</button>
*/
}

    <ol>
        {
            categories.map((category,i) => (
                  <GifGrid 
                    key = { category }
                    category = { category }
                  />)
            )
        }
    </ol>

    </>
  )
}
