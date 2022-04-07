import React from 'react';
import { TokenProps } from './Token.props';
import s from './Token.module.css';
import cn from 'classnames';
import { changeColor, priceConvert } from '../../helpers/helpers';

export const Token = ({token, className, ...props}:TokenProps):JSX.Element => { 
        
        return <div
        className={cn(s.token, className, {
        })}
        {...props}
        >
        <div>#{token.id}</div>
        <img src={token.logoURI} alt='logo' className={s.logo} />
        <div className={s.name}>
                <div>{token.name}</div>
                <div>{token.symbol}</div>
        </div>
        <div className={s.price}>
                {priceConvert(token.price)}
                <div className={s.priceChange}>
                        <span>{changeColor(token.priceChange.hours24)}</span>
                        <span>{changeColor(token.priceChange.days7)}</span>
                        <span>{changeColor(token.priceChange.days365)}</span>
                </div>
        </div>
        <div>
                <span className={s.volume}>{priceConvert(token.volume)}</span>
                <span className={s.volumeChange}>{token.volumeChangePercentage} %</span>
        </div>
        <div className={s.tvl}>
                <span>{token.tvl}</span>
                <span>{token.tvlChangePercentage} %</span>
        </div>
        <div className={s.users}>
                {token.users}
        </div>

        </div>
} 