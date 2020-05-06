import React from 'react'
import PropTypes from 'prop-types'

import addSvg from '../../../src/assets/add.svg'

import './Panel.scss'

//import Button from '../Button/Button'
import Card from '../Card/Card'


const Panel = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel__itams">
        {items.map(card => (
          <Card {...card} />
      ))}
      </div>
      <div className="panel__bottom">
        <div className="panel__bottom-add-btn">
          <img src={addSvg} alt="Add svg icon"/>
          <span>Добавить еще карточку</span>
        </div>
      </div>
    </div>
  )
}

Panel.propTypes = {
  text: PropTypes.string.isRequired
}

export default Panel;
