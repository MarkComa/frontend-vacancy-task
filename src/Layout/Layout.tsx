import React from 'react'
import { Menu } from '../components/Menu/Menu'
import s from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import cn from 'classnames'

export const Layout = ({children, className} :LayoutProps) => {
  return (
    <div className={cn(s.layout, className)}>
        <Menu className={cn(s.menu)}/>
        <div className={s.children}>{children}</div>
    </div>
  )
}
