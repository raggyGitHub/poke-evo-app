/* eslint-disable react/prop-types */
import '../sass/Button.scss'

const Button = ({icon, handleClick}) => {
  return (
    <div className='btn_box'>
      <button className='btn' onClick={handleClick}>
        {icon}
      </button>
      <div className='btn_shadow'></div>
    </div>
  );
};

export {Button}