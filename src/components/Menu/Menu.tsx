import React from 'react';
import { MenuProps } from './Menu.props';
import s from './Menu.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { menu } from '../../menu';
import logo from './Logo.svg'

export const Menu = ({ className, ...props}:MenuProps):JSX.Element => { 
        
        return <div
        className={cn(s.menu, className, {
        })}
        {...props}
        >
        <img src={logo} alt="logo" className={s.logo}/>
        <div className={s.btn}>
                {menu.map(el => {
                return <Button
                key={el.id} 
                menuEl={el}/>
                })
        }
        </div>
                        
        </div>
} 