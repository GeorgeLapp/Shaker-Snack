import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../app/api';
import {
  CellPriceDTO,
  CellsPricesRowDTO,
  OpenProductListDTO,
  Pin,
  ProductToCellDTO,
  ProductToRowDTO,
  ServiceMenuAuthorizationDTO,
  ServiceMenuPricesDTO,
  ServiceMenuProductsDTO,
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
 * Получение товаров
 */
export const getCellsProductsThunk = createAsyncThunk<ServiceMenuProductsDTO, undefined>(
  'getCellsProducts',
  async () => {
    return await api.serviceMenu.getCellsProducts();
  },
);

/**
 * Изменение цены во всем ряду
 */
export const changeCellsPricesRowThunk = createAsyncThunk<undefined, CellsPricesRowDTO>(
  'changeCellsPricesRow',
  async (cellsPricesRow) => {
    return await api.serviceMenu.changeCellsPricesRow(cellsPricesRow);
  },
);

/**
 * Изменение цены в ячейке
 */
export const changeCellPriceThunk = createAsyncThunk<undefined, CellPriceDTO>(
  'changeCellPrice',
  async (cellPrice) => {
    return await api.serviceMenu.changeCellPrice(cellPrice);
  },
);

/**
 * Получение списка товаров
 */
export const getOpenProductsListThunk = createAsyncThunk<OpenProductListDTO, undefined>(
  'getOpenProductsList',
  async () => {
    return await api.serviceMenu.getOpenProductsList();
  },
);

/**
 *  Присвоение товара ячейке
 */
export const assignProductToCellThunk = createAsyncThunk<undefined, ProductToCellDTO>(
  'assignProductToCell',
  async (productToCell) => {
    return api.serviceMenu.assignProductToCell(productToCell);
  },
);

/**
 *  Присвоение товара ряду
 */
export const assignProductToRow = createAsyncThunk<undefined, ProductToRowDTO>(
  'assignProductToRow',
  async (assignProductToRow) => {
    return await api.serviceMenu.assignProductToRow(assignProductToRow);
  },
);

/**
 * Переход к сервисному меню
 */
export const backToServiceMenuThunk = createAsyncThunk('backToServiceMenu', async () => {
  return await api.serviceMenu.backToServiceMenu();
});
