import './Button.css';

const Button = ({text, type, onClick}) => {
  return (
  <button onClick={onClick} type={`Button Button_${type}`}className='Button'>
    버튼
  </button>
)};
export default Button;