import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CategoriesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: category
  setCategory: React.Dispatch<React.SetStateAction<category>>
}

type category = {
  id: string
  title: string
}
