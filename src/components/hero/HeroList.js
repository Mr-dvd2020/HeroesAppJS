import React from 'react';
import { getHeroByPublisher } from '../../selector/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroByPublisher( publisher );

  return (
    <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map( heroe => (
                    <HeroCard
                        key={ heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    </>
  )
}
