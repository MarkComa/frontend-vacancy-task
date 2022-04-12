import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Htag } from '../../components/Htag/Htag'
import { Token } from '../../components/Token/Token'
import { TokenModel } from '../../components/Token/Token.props'
import { tokens } from '../../tokens'

import s from './Search.module.css'

type searchType = {
  searchStr: string
}

export const Search = (): JSX.Element => {
  const [results, setResults] = useState<TokenModel[]>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<searchType>()
  const onSubmit: SubmitHandler<searchType> = (data) => {
    const searchResult = tokens.filter((token) => {
      return (
        token.name.toLowerCase().includes(data.searchStr.toLowerCase()) ||
        token.symbol.toLowerCase().includes(data.searchStr.toLowerCase())
      )
    })
    return setResults(searchResult)
  }

  return (
    <div className={s.search}>
      <div className={s.title}>
        <Htag tag={'h1'}>Поиск</Htag>
      </div>

      <div className={s.description}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <input
            className={s.input}
            {...register('searchStr', {
              required: true,
            })}
            type="text"
          />
          <input type="submit" value={'Поиск'} className={s.btn} />
          {errors.searchStr?.type === 'required' && (
            <div className={s.error}>Поисковый запрос не может быть пустым</div>
          )}
        </form>
        <div className={s.results}>
          {(!results && <div className={s.searchRes}>Введите поисковый запрос</div>) ||
            (results?.length === 0 && <div>Поищите в другом месте</div>) ||
            (results && results.map((el) => <Token token={el} className={s.token} />))}
        </div>
      </div>
    </div>
  )
}
