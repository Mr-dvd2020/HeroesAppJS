import React from 'react'; 
import { HeroList } from '../hero/HeroList';
//ponemos "rafc", para crear automaticamente un componente
export const DcScreen = () => {
  return (
    <div>
        <h1>DcScreen</h1>
        <hr/>
        <HeroList publisher={ 'DC Comics' }/>
    </div>
  )
}

