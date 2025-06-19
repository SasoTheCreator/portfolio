
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  onClick,
  className = '',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gray-900 text-white focus:ring-gray-900',
    secondary: 'bg-white border border-black text-black focus:ring-black',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // Link
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 