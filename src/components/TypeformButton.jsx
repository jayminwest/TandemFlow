import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const TypeformButton = ({ children, className }) => {
  return (
    <PopupButton
      id="hQG6LmMM"
      className={className}
      size={80}
      hidden={{ footer: true }}
      customIcon="https://images.typeform.com/images/8RGvszEKMBLs"
    >
      {children}
    </PopupButton>
  );
};

export default TypeformButton;
