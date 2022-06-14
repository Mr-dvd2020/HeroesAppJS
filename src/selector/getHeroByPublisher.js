import { heroes } from "../data/heroes"

export const getHeroByPublisher=(publisher)=>{

    const validPublisher = ['DC Comics','Marvel Comics'];

    if (!validPublisher.includes( publisher ) ){
        //template string
        throw new Error(`Invalid Publisher: ${ publisher} not suported`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}