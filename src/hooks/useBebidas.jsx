
import {useContext} from 'react'
import { BebidasContext } from '../context/BebidasProvider'

export const useBebidas = () => {
  return useContext(BebidasContext)
}
