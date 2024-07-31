import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from 'react-redux'
import { AppDispatch, RootState } from './store'

type DispatchFucntion = () => AppDispatch

export const useCartDispatch: DispatchFucntion = useDispatch
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector
