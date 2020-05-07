import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from "react-beautiful-dnd"


import { Column } from '../componets/index'
import columnsActions from '../redux/actions/columns'
import cardsActions from '../redux/actions/cards'

const Columns = ({
  index,
  items,
  addColumn,
  addCard,
  removeColumn,
  reorderCards
}) => {
  const onDragEnd = result => {
    const { source, destination } = result
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
    reorderCards({
      source,
      destination
    })
  }

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {items.map((item, index ) => (
          <Column
            {...item}
            key={index}
            columnIndex={index}
            onAddColumn={addColumn}
            onAddCard={addCard}
            onRemove={removeColumn}
            onReorder={reorderCards}
          />
        ))}
      </DragDropContext>
      <Column onAddColumn={addColumn} onAddCard={addCard} />
    </Fragment>
  )
}

export default connect(
  ({ columns }) => ({ items: columns }),
  { ...columnsActions, ...cardsActions }
)(Columns);