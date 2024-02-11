import React, { ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';
import './button.scss'

interface ButtonComponentProps extends ButtonProps {
    children: ReactNode
    color?: string
}

const SharedButton = ({ children, color, type, onClick, ...rest }: ButtonComponentProps) => {
  return (
    <Button type={type} onClick={onClick} {...rest} className={`button ${color}-color`}>
      {children}
    </Button>
  );
};

export default SharedButton;
