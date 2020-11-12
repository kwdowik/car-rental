import React from 'react';
import styles from './Button.module.css'
import classnames from 'classnames'

export const Button = ({ type, children, ...properties }) => {
  return (
    <button
      className={classnames(styles.primary, styles[type])}
      {...properties}
    >
      {children}
    </button>
  )
}
