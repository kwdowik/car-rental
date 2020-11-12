import React from 'react';
import classnames from 'classnames'
import styles from './List.module.css'

export const List = ({ items, renderRow }) => {
  return (
    <div className={classnames(styles.primary)}>
      {items.map((item) => renderRow(item))}
    </div>
  )
}