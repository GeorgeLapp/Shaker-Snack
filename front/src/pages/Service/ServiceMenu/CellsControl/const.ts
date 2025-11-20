import { CellControlEnum, CellControlTab } from './types';

export const cellControlTabs: CellControlTab[] = [
  {
    label: 'Остатки',
    value: CellControlEnum.STOCKS,
  },
  {
    label: 'Глубина',
    value: CellControlEnum.DEPTH,
  },
  {
    label: 'Цены',
    value: CellControlEnum.PRICES,
  },
  {
    label: 'Товары',
    value: CellControlEnum.GOODS,
  },
  {
    label: 'Конфиг ячеек',
    value: CellControlEnum.CONFIG,
  },
];
