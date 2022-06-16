import React, {component} from 'react';

export const navigatinRef = React.createRef(null);

export const navigate = (name, params) => {
  if (navigatinRef.current) {
    navigatinRef.current.navigate(name, params);
  }
};
