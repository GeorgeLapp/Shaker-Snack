import { RootState } from '../../app/store';

/**
 * Селектор получения матрицы продуктов
 */
export const selectProductMatrix = () => (state: RootState) => state.client.productMatrix;
