import { useAppSelector } from '../../../../../app/hooks/store';
import { selectCellsProducts } from '../../../../../state/serviceMenu/selectors';
import { useMemo } from 'react';

/**
 * Хук для преобразования ячеек с товарами
 */
export const useCellsControlProducts = () => {
  const { state: cellsProducts, isReject: isRejectCellsProducts } =
    useAppSelector(selectCellsProducts());

  const cellsPricesRows = useMemo(() => {
    const cells = cellsProducts?.view.cells || [];
    const rows: (typeof cells)[] = [];

    cells.forEach((cell) => {
      const rowIndex = cell.row;

      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
      }

      rows[rowIndex].push(cell);
    });

    return rows;
  }, [cellsProducts]);

  return {
    cellsPricesRows,
    isRejectCellsProducts: isRejectCellsProducts,
  };
};
