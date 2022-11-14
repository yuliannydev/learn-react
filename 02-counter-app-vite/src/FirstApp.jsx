import React from 'react';
import PropTypes from 'prop-types';
export default function FirstApp({title, subTitle, name}) {
  return (
    <>
    <h1> {title} </h1>
    <p> {subTitle} </p>
    <em> {name} </em>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Nathalie Rivas',
  title: 'Hola poshito',
  subTitle: 'Desde tu mente :3'
}