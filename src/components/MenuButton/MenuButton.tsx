import React from 'react'
import { MenuButtonProps } from './MenuButton.props'
import s from './MenuButton.module.scss'
import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

export const MenuButton = ({
  menuEl,
  children,
  className,
  ...props
}: MenuButtonProps): JSX.Element => {
  const location = useLocation()

  return (
    <NavLink to={menuEl.id} className={s.link}>
      <button
        className={cn(s.button, className, {
          [s.active]:
            location.pathname === `/${menuEl.id}` ||
            (location.pathname === '/' && menuEl.id === 'tokens'),
        })}
        {...props}
      >
        {menuEl.icon}
        <span className={s.title}> {menuEl.title}</span>
      </button>
    </NavLink>
  )
}
