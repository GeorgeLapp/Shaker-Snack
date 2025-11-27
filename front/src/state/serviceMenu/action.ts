import { AppDispatch } from '../../app/store';
import {
  assignProductToCellThunk,
  assignProductToRow,
  authSubmitPinThunk,
  backToServiceMenuThunk,
  changeCellPriceThunk,
  changeCellsPricesRowThunk,
  getCellsConfigThunk,
  getCellsPricesThunk,
  getCellsProductsThunk,
  getCellsStocksThunk,
  getOpenProductsListThunk,
  getOpenSettingsThunk,
} from './thunk';
import {
  CellPriceDTO,
  CellsPricesRowDTO,
  Pin,
  ProductToCellDTO,
  ProductToRowDTO,
} from '../../types/serverInterface/serviceMenuDTO';

/**
 * Открытие сервисного меню
 */
export const getOpenSettingsAction = () => (dispatch: AppDispatch) =>
  dispatch(getOpenSettingsThunk());

/**
 * Авторизация по PIN
 * @param pin PIN
 */
export const authSubmitPinAction = (pin: Pin) => (dispatch: AppDispatch) =>
  dispatch(authSubmitPinThunk(pin));

/**
 * Получение конфига ячеек
 */
export const getCellsConfigAction = () => (dispatch: AppDispatch) =>
  dispatch(getCellsConfigThunk());

/**
 * Получение остатков
 */
export const getCellsStocksAction = () => (dispatch: AppDispatch) =>
  dispatch(getCellsStocksThunk());

/**
 * Получение цен
 */
export const getCellsPricesAction = () => (dispatch: AppDispatch) =>
  dispatch(getCellsPricesThunk());

/**
 * Получение товаров
 */
export const getCellsProductsAction = () => (dispatch: AppDispatch) =>
  dispatch(getCellsProductsThunk());

/**
 * Изменение цены во всем ряду
 */
export const changeCellsPricesRowAction =
  (cellsPricesRow: CellsPricesRowDTO) => (dispatch: AppDispatch) =>
    dispatch(changeCellsPricesRowThunk(cellsPricesRow));

/**
 * Изменение цены в ячейке
 */
export const changeCellPriceAction = (cellPrice: CellPriceDTO) => (dispatch: AppDispatch) =>
  dispatch(changeCellPriceThunk(cellPrice));

/**
 * Получение списка товаров
 */
export const getOpenProductsListAction = () => (dispatch: AppDispatch) =>
  dispatch(getOpenProductsListThunk());

/**
 *  Присвоение товара ячейке
 */
export const assignProductToCellAction =
  (productToCell: ProductToCellDTO) => (dispatch: AppDispatch) =>
    dispatch(assignProductToCellThunk(productToCell));

/**
 *  Присвоение товара ряду
 */
export const assignProductToRowAction =
  (productToRow: ProductToRowDTO) => (dispatch: AppDispatch) =>
    dispatch(assignProductToRow(productToRow));

/**
 * Переход к сервисному меню
 */
export const backToServiceMenuAction = () => (dispatch: AppDispatch) =>
  dispatch(backToServiceMenuThunk());
