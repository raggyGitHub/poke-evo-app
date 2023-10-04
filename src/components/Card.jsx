import '../sass/Card.scss';

const PokeCard = () => {
  return (
    <div className='card'>
      <p className='card_name'>Ronald</p>
      <div className='card_circle'></div>
      <img className='card_img' src='' alt='pokemon img' />
    </div>
  );
};

export {PokeCard};
