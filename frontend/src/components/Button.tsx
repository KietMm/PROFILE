import { Button as MuiButton } from '@mui/material';
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <MuiButton
      onClick={onClick}
      variant="contained"
      className={className}
      sx={{ margin: '8px' }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
