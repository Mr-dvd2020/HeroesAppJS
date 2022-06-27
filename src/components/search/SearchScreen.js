import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selector/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import  queryString  from 'query-string';//exp defect

export const SearchScreen = () => {

  const navigate = useNavigate();
  
  const location = useLocation();
  const {q=''} = queryString.parse(location.search);
 


  const [value, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText }=value;

  //llamar a getheroeByName
  const heroFilterd = useMemo(() => getHeroByName(q), [q]);//useMemo(..)

  const handleSearch = (e) => {
    e.preventDefault();//para evitar recargar la pagina innecesariamente
    navigate(`?q=${ searchText}`);//
  }

  return (
    <div>
        <h1>Busquedas</h1>
        <hr/>
        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr/>

            <form onSubmit={ handleSearch }>
              <input
                type='text'
                placeholder='Buscar un heroe ...'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={ handleInputChange}
              />
              
              <button
                className='btn btn-outline-primary mt-2'
                type='submit'
              >
                Buscar ...
              </button>

            </form>
          </div>

          <div className='col-7'>
            <h4> Resultados</h4>
            <hr/>
            {
              (q ==='')
                ? <div className='alert alert-info'>Buscar un heroe</div>
                : (heroFilterd.length === 0 )
                  && <div className='alert alert-danger'>No hay resultados: {q} </div>
            }

            {
              heroFilterd.map( hero => (
                <HeroCard
                  key={ hero.id}
                  { ...hero}
                />
              ))
            }

          </div>

        </div>
    </div>
  )
}
