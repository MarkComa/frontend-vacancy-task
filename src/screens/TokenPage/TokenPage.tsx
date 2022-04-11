import React from 'react'
import { Htag } from '../../components/Htag/Htag'
import s from './TokenPage.module.css'

export const TokenPage = (): JSX.Element => {
  return (
    <div className={s.tokenPage}>
      <Htag tag={'h1'}>Наименование токена</Htag>
      <div className={s.description}>Тестовое задание не предусматривает реализацию контента здесь.</div>
    </div>
  )
}
