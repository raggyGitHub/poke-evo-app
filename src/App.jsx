//components
import {Button} from './components/Button';
import {PokeCard} from './components/Card';
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
  const [pokeName, setPokeName] = useState();

  useEffect(() => {
    getEvolutions(pokeId);
    console.log('useEffect ejecutado');
  }, [pokeId]);

  const getEvolutions = async (id) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();
    setPokeName(data.chain.species.name);
  };

  const handleClickPrev = () => {
    pokeId === 1 ? setPokeID(1) : setPokeID(pokeId - 1);
  };
  const handleClickNext = () => {
    setPokeID(pokeId + 1);
  };
  return (
    <>
      <div className='card-container'>
        <PokeCard />
      </div>

      <div className='buttons-container'>
        <Button handleClick={handleClickPrev} icon={<TiArrowLeftOutline />} />
        {pokeId}-{pokeName}
        <Button handleClick={handleClickNext} icon={<TiArrowRightOutline />} />
      </div>
    </>
  );
};

export default App;
