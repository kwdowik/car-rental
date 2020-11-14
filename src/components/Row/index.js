import React from 'react';
import styles from './Row.module.css'
import classnames from 'classnames'

export const Row = ({ type, item }) => {
  return  (
    <span role="listitem" className={classnames(styles.primary, styles[type])}>
      {item.model} - {item.price}$/day
    </span>
  )
}
