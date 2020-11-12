import React from 'react';
import styles from './Row.module.css'
import classnames from 'classnames'

export const Row = ({ type, item }) => {
  return  (
    <span className={classnames(styles.primary, styles[type])}>
      [{item.id}] - {item.model}
    </span>
  )
}
