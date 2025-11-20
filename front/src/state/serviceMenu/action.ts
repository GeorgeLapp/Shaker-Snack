import { AppDispatch } from '../../app/store';
import {
  authSubmitPinThunk,
  backToServiceMenuThunk,
  changeCellsPricesRowThunk,
  getCellsConfigThunk,
  getCellsPricesThunk,
  getCellsStocksThunk,
  getOpenSettingsThunk,
} from './thunk';
import { CellsPricesRowDTO, Pin } from '../../types/serverInterface/serviceMenuDTO';

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
 * Изменение цены ряда
 */
export const changeCellsPricesRowAction =
  (cellsPricesRow: CellsPricesRowDTO) => (dispatch: AppDispatch) =>
    dispatch(changeCellsPricesRowThunk(cellsPricesRow));

/**
 * Переход к сервисному меню
 */
export const backToServiceMenuAction = () => (dispatch: AppDispatch) =>
  dispatch(backToServiceMenuThunk());
