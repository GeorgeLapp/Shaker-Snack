import { useAppSelector } from '../../../../../app/hooks/store';
import { selectCellsPrices } from '../../../../../state/serviceMenu/selectors';
import { useMemo } from 'react';

/**
 * Хук для преобразования цен ячеек
 */
export const useCellsControlPrices = () => {
  const { state: cellsPrices } = useAppSelector(selectCellsPrices());

  const cellsPricesRows = useMemo(() => {
    const cells = cellsPrices?.view.cells || [];
    const rows: (typeof cells)[] = [];

    cells.forEach((cell) => {
      const rowIndex = cell.row;

      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
      }

      rows[rowIndex].push(cell);
    });

    return rows;
  }, [cellsPrices]);

  return { cellsPricesRows };
};
