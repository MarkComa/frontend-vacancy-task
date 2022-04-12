import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}
