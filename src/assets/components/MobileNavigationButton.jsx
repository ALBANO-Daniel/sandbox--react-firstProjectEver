import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  buttonMobile: {
    height: 8,
  },
})

export function MobileNavigationButton(props) {
  const classes = useStyles()
  return (
    <button id="btn-mobile" className={classes.buttonMobile} {...props}>
      Menu
      <span id="hamburger"></span>
    </button>
  )
}
