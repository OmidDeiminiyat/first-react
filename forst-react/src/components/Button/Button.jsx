import './Button.module.scss';

const Button = ({ action, size = 'medium', theme = 'light', text }) => {
  // Define the class names based on props
  const className = `button ${size} ${theme}`;

  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};

export default Button;