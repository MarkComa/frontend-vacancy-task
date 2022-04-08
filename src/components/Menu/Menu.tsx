import React from 'react';
import { MenuProps } from './Menu.props';
import s from './Menu.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { menu } from '../../menu';
import logo from './Logo.svg'

export const Menu = ({isOpened, setIsOpened, className, ...props}:MenuProps):JSX.Element => { 
        
        console.log(isOpened)
        return <div
        className={cn(s.menu, className, {
        })}
        {...props}
        >
        <button className={cn(s.btnClose, {
                [s.btnVisible]: !isOpened
        })}
        onClick={()=> {setIsOpened(!isOpened)}}><span></span></button>
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