import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;
