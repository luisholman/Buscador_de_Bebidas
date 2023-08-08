
import {useContext} from 'react'
import { CategoriasContext } from '../context/Categorias'

export const useCategorias = () => {
  return useContext(CategoriasContext)
}
