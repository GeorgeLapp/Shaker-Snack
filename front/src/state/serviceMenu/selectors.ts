import { RootState } from '../../app/store';

/**
 * Селектор получения конфига ячеек
 */
export const selectCellsConfig = () => (state: RootState) => state.serviceMenu.cellsConfig;

/**
 * Селектор получения остатков
 */
export const selectCellsStocks = () => (state: RootState) => state.serviceMenu.cellsStocks;

/**
 * Селектор получения цен
 */
export const selectCellsPrices = () => (state: RootState) => state.serviceMenu.cellsPrices;
