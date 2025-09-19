import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../app/api';
import { ProductMatrixDTO } from '../../types/serverInterface/ProductMatrixDTO';

/**
 * Получение матрицы продуктов
 */
export const getProductMatrixThunk = createAsyncThunk<ProductMatrixDTO>(
  'getProductMatrix',
  async () => {
    return await api.client.getProductMatrix();
  },
);
