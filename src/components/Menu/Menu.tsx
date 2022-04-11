import React from 'react'
import { MenuProps } from './Menu.props'
import s from './Menu.module.scss'
import cn from 'classnames'
import { MenuButton } from '../MenuButton/MenuButton'
import { menu } from '../../menu'
import logo from './Logo.svg'

export const Menu = ({
  isOpened,
  setIsOpened,
  className,
  ...props
}: MenuProps): JSX.Element => {
  return (
    <div className={cn(s.menu, className, {})} {...props}>
      <button
        className={cn(s.btnClose, {
          [s.btnVisible]: !isOpened,
        })}
        onClick={() => {
          setIsOpened(!isOpened)
        }}
      >
        <span></span>
      </button>
      <img src={logo} alt="logo" className={s.logo} />
      <div className={s.action}>
        <div className={s.btn}>
          {menu.map((el) => {
            return <MenuButton key={el.id} menuEl={el} />
          })}
        </div>
        <button className={s.setting}>Русский</button>
      </div>
    </div>
  )
}
