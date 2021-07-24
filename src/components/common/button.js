import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"


const Button = ({
  className,
  onClick,
  children,
  loading,
  disabled,
  id,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.Button, className, {
        [`${styles.Button__disabled}`]: disabled,
        [`${styles.Button__loading}`]: loading,
      })}
      disabled={disabled}
      id={id}
      {...rest}
    >
      {!loading && children}
      {loading}
    </button>
  )
}

export default Button
