import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../app/api';
import {
  CellsPricesRowDTO,
  Pin,
  ServiceMenuAuthorizationDTO,
  ServiceMenuPricesDTO,
} from '../../types/serverInterface/serviceMenuDTO';

/**
 * Открытие сервисного меню
 */
export const getOpenSettingsThunk = createAsyncThunk('getOpenSettings', async () => {
  return await api.serviceMenu.getOpenSettings();
});

/**
 * Авторизация по PIN
 *
 * @param pin PIN
 */
export const authSubmitPinThunk = createAsyncThunk<ServiceMenuAuthorizationDTO, Pin>(
  'authSubmitPin',
  async (pin) => {
    return api.serviceMenu.authSubmitPin(pin);
  },
);

/**
 * Получение конфига ячеек
 */
export const getCellsConfigThunk = createAsyncThunk('getCellsConfig', async () => {
  return await api.serviceMenu.getCellsConfig();
});

/**
 * Получение остатков
 */
export const getCellsStocksThunk = createAsyncThunk('getCellsStocks', async () => {
  return await api.serviceMenu.getCellsStocks();
});

/**
 * Получение цен
 */
export const getCellsPricesThunk = createAsyncThunk<ServiceMenuPricesDTO, undefined>(
  'getCellsPrices',
  async () => {
    return await api.serviceMenu.getCellsPrices();
  },
);

/**
 * Изменение цены ряда
 */
export const changeCellsPricesRowThunk = createAsyncThunk<undefined, CellsPricesRowDTO>(
  'changeCellsPricesRow',
  async (cellsPricesRow) => {
    return await api.serviceMenu.changeCellsPricesRow(cellsPricesRow);
  },
);

/**
 * Переход к сервисному меню
 */
export const backToServiceMenuThunk = createAsyncThunk('backToServiceMenu', async () => {
  return await api.serviceMenu.backToServiceMenu();
});
