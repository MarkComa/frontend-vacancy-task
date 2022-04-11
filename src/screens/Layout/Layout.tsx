import React, { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu/Menu'
import s from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import cn from 'classnames'

export const Layout = ({children, className} :LayoutProps) => {
  const [isOpened, setIsOpened] = useState(true);
  
  return (
    <div className={cn(s.layout, className, {
      [s.closed]: !isOpened
    })}>
        <Menu isOpened={isOpened} setIsOpened={setIsOpened} className={s.menu} />
        
        <button
        onClick={()=>{setIsOpened(!isOpened)}}
        className={s.btnMenu}><span></span></button>
        <div className={s.children}>{children}</div>
    </div>
  )
}
