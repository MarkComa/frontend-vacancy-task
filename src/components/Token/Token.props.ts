import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TokenProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  token: TokenModel
}

export interface TokenModel {
  id: number
  name: string
  symbol: string
  address: string
  logoURI: string
  categories: string[]
  description: string
  price: number
  priceChange: priceChange
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
}

export interface priceChange {
  hours24: number
  days7: number
  days365: number
}
