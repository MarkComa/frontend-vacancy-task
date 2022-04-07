import React from 'react'
import { ButtonProps } from './Button.props'
import s from './Button.module.css'
import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

export const Button = ({
  menuEl,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const location = useLocation()

  return (
    <NavLink to={menuEl.id} className={s.link}>
      <button
        className={cn(s.button, className, {
          [s.active]: location.pathname === `/${menuEl.id}` || (location.pathname === '/' && menuEl.id === 'tokens'),
        })}
        {...props}
      >
        {menuEl.icon}
        <span className={s.title}> {menuEl.title}</span>
      </button>
    </NavLink>
  )
}
