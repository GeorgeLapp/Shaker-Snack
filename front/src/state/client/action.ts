import { AppDispatch } from '../../app/store';
import { getProductMatrixThunk } from './thunk';

/**
 * Получение матрицы продуктов
 */
export const getProductMatrixAction = () => (dispatch: AppDispatch) =>
  dispatch(getProductMatrixThunk());
