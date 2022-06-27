import { heroes } from "../data/heroes"

export const getHeroByName = (name = '') => {

  console.log('getHeroByName');
  if(name === ''){
    return [];
  }
  else{
    name=name.toLocaleLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));

  }
}
