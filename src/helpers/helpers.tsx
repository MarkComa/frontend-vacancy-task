import React from 'react'
import s from './helpers.module.css'

export const priceConvert = (price: number): string => {
  const str = price.toString()
  const index = str.indexOf('.')
  if (index === -1) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ' + '$')
  }
  let strStart = str.substring(0, index)
  strStart = strStart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  const strEnd = str.substring(index, str.length)
  return `${strStart}${strEnd}`.concat(' ' + '$')
}

export const usersCounter = (price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const changeColor = (percent: number) => {
  switch (percent === 0 ? 0 : percent < 0 ? 1 : -1) {
    case 1:
      return <div className={s.minus}>{percent}%</div>
    case -1:
      return <div className={s.plus}>+{percent}%</div>
    case 0:
      return <div className={s.zero}>{percent}%</div>
  }
}
