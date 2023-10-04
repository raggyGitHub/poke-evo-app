import '../sass/Card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({name, img}) => {
  return (
    <div className='card'>
      <p className='card_name'>{name}</p>
      <div className='card_circle'></div>
      <img className='card_img' src={img} alt='pokemon img' />
    </div>
  );
};

export {Card};
