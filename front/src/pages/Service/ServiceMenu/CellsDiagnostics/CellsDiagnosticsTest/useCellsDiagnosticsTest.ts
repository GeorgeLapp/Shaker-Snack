import { useAppDispatch, useAppSelector } from '../../../../../app/hooks/store';
import { selectCellsTest } from '../../../../../state/serviceMenu/selectors';
import { useEffect, useMemo } from 'react';
import { getCellsTestAction } from '../../../../../state/serviceMenu/action';

/**
 * Хук для преобразования ячеек с диагностикой
 */
export const useCellsDiagnosticsTest = () => {
  const dispatch = useAppDispatch();

  const { state: cellsTest, isReject: isRejectCellsTest } = useAppSelector(selectCellsTest());

  const cellsTestRows = useMemo(() => {
    const cells = cellsTest?.view.cells || [];
    const rows: (typeof cells)[] = [];

    cells.forEach((cell) => {
      const rowIndex = cell.row;

      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
      }

      rows[rowIndex].push(cell);
    });

    return rows;
  }, [cellsTest]);

  useEffect(() => {
    dispatch(getCellsTestAction());
  }, [dispatch]);

  return {
    cellsTestRows,
    isRejectCellsTest,
  };
};
