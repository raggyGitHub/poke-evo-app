//components
import {Button} from './components/Button';
import {Card} from './components/Card';
//styles
import './sass/App.scss';
//icons
import {TiArrowLeftOutline} from 'react-icons/ti';
import {TiArrowRightOutline} from 'react-icons/ti';
//hooks
import {useState} from 'react';
import {useEffect} from 'react';

const App = () => {
  const [pokeId, setPokeID] = useState(1);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);

  useEffect(() => {
    getEvolutions(pokeId);
    console.log('useEffect ejecutado');
  }, [pokeId]);

  const getEvolutions = async (id) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();
    let pokemonEvoArray = [];
    let pokemonLvl1 = data.chain.species.name;
    let pokemonLvl1Img = await getPokemonImgs(pokemonLvl1);
    pokemonEvoArray.push([pokemonLvl1, pokemonLvl1Img]);

    if (data.chain.evolves_to.length !== 0) {
      let pokemonLvl2 = data.chain.evolves_to[0].species.name;
      let pokemonLvl2Img = await getPokemonImgs(pokemonLvl2);
      pokemonEvoArray.push([pokemonLvl2, pokemonLvl2Img]);

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonLvl3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLvl3Img = await getPokemonImgs(pokemonLvl3);
        pokemonEvoArray.push([pokemonLvl3, pokemonLvl3Img]);
      }
    }
    setPokemonEvolutions(pokemonEvoArray);
  };

  const getPokemonImgs = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other['official-artwork'].front_default;
  };

  const handleClickPrev = () => {
    pokeId === 1 ? setPokeID(1) : setPokeID(pokeId - 1);
  };
  const handleClickNext = () => {
    setPokeID(pokeId + 1);
  };
  return (
    <div className='app'>
      <div className={`card-container card${pokemonEvolutions.length}`}>
        {pokemonEvolutions.map((pokemon) => (
          <Card key={pokemon[0]} name={pokemon[0]} img={pokemon[1]} />
        ))}
      </div>

      <div className='buttons-container'>
        <Button handleClick={handleClickPrev} icon={<TiArrowLeftOutline />} />
        <Button handleClick={handleClickNext} icon={<TiArrowRightOutline />} />
      </div>
    </div>
  );
};

export default App;
