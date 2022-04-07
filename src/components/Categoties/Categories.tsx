import React from 'react';
import { CategoriesProps } from './Categories.props';
import s from './Categories.module.css';
import { categories } from '../../tokens'
import cn from 'classnames';

export const Categories = ({category,setCategory, className, ...props}:CategoriesProps):JSX.Element => { 
        return <div
        className={cn(s.categories, className, {
        }) } {...props}
        >
                {categories.map(el => (
                        <div onClick={()=> {setCategory(el)}} key={el.id} className={cn(s.category, {
                                [s.active]: category.title === el.title
                        })}>{el.title}</div>
                 ))}
        </div>
} 