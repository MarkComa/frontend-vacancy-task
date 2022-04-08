import React, { useState } from 'react'
import { TokenProps } from './Token.props'
import s from './Token.module.css'
import cn from 'classnames'
import users from './users.svg'
import { changeColor, priceConvert, usersCounter } from '../../helpers/helpers'
import arrow from './arrow.svg'

export const Token = ({ token, className, ...props }: TokenProps): JSX.Element => {
        const [isOpen, setIsOpen] = useState(false);
return (
    <div className={cn(s.token, className, {})} {...props}>
      <div className={s.id}>#{token.id}</div>
      <img src={token.logoURI} alt="logo" className={s.logo} />
      <div className={s.name}>
        <div>{token.name}</div>
        <div>{token.symbol}</div>
      </div>
      <div className={s.price}>
        {priceConvert(token.price)}
        <div className={s.priceChange}>
          <span>{changeColor(token.priceChange.hours24)}</span>
          <span className={s.dot}>•</span>
          <span>{changeColor(token.priceChange.days7)}</span>
          <span className={s.dot}>•</span>
          <span>{changeColor(token.priceChange.days365)}</span>
        </div>
      </div>
      <div className={s.volume}>
        <span className={s.volumeCurrent}>{priceConvert(token.volume)}</span>
        <span className={s.volumeChange}>{token.volumeChangePercentage}%</span>
      </div>
      <div className={s.tvl}>
        <span className={s.tvlCurrent}>{priceConvert(token.tvl)}</span>
        <span className={s.tvlCurrentPercent}>{token.tvlChangePercentage}%</span>
      </div>
      <div className={s.users}>
        <img className={s.userLogo} src={users} alt="users" />
        {usersCounter(token.users)}
      </div>
      <div className={s.action}>
        <button onClick={()=> setIsOpen(!isOpen)} className={s.arrowBtn}>
          <img className={cn(s.arrow, {
                  [s.openedArrow]: isOpen
          })} src={arrow} alt="arrow" />
        </button>
      </div>
      <div className={cn(s.description, {
              [s.opened]: isOpen
      })}>{token.description}</div>
    </div>
  )
}
