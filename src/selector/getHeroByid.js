
import { heroes } from '../data/heroes'

export const getHeroById = (id='') => {
  //console.log('getHeroById se llamo!');
  return heroes.find( heroe => heroe.id === id);
}

