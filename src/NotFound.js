import React from 'react';

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <h1>İçerik Bulunamadı!</h1>;
};