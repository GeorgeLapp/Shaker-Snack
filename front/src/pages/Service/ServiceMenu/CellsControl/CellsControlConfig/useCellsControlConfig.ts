import { useAppSelector } from '../../../../../app/hooks/store';
import { selectCellsConfig } from '../../../../../state/serviceMenu/selectors';
import { useMemo } from 'react';

/**
 * Хук для преобразования ячеек для конфига
 */
export const useCellsControlConfig = () => {
  const { state: cellsConfig, isReject: isRejectCellsConfig } = useAppSelector(selectCellsConfig());

  const cellsConfigRows = useMemo(() => {
    const cells = cellsConfig?.view.cells || [];
    const rows: (typeof cells)[] = [];

    cells.forEach((cell) => {
      const rowIndex = cell.row;

      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
      }

      rows[rowIndex].push(cell);
    });

    return rows;
  }, [cellsConfig]);

  return { cellsConfigRows, isRejectCellsConfig };
};
