import React, { useState } from 'react'
import { Categories } from '../../components/Categoties/Categories'
import { Htag } from '../../components/Htag/Htag'
import { Token } from '../../components/Token/Token'
import { categories, tokens } from '../../tokens'
import s from './Tokens.module.css'

export const Tokens = (): JSX.Element => {
  const [category, setCategory] = useState(categories[0])
  return (
    <div className={s.tokens}>
      <div className={s.header}>
        <div className={s.title}>
          <Htag tag="h1">Токены Everscale</Htag>
        </div>
        <Categories category={category} setCategory={setCategory} className={s.sort} />
      </div>
      <div>
        {tokens.map((item) => {
          if (item.categories.includes(category.id) || category.id === 'all') {
            return <Token token={item} className={s.token} key={item.id} />
          }
        })}
      </div>
    </div>
  )
}
