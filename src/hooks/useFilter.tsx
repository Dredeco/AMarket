import { AppContext } from '@/context/Context'
import React, { useContext } from 'react'

export const useFilter = () => {
  return (
    useContext(AppContext)
  )
}
