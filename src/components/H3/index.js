import React from 'react';
import styles from './H3.module.css'
import classnames from 'classnames'

export const H3 = ({ children, type }) => {
  return <h3 className={classnames(styles.primary, styles[type])}>{children}</h3>
}
