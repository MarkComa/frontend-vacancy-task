import React from 'react'
import { Htag } from '../../Htag/Htag'
import s from './Search.module.css'

export const Search = ():JSX.Element => {
  return (
    <div className={s.search}>
    <Htag tag={'h1'}>Поиск</Htag>
    <div className={s.description}>Тестовое задание не предусматривает реализацию контента здесь.</div>
    </div>
  )
}
