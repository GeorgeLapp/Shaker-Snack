import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../app/hooks/store';
import { getCellsPricesAction } from '../../../../../state/serviceMenu/action';
import HorizontalContainer from '../../../../../components/HorizontalContainer';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import VerticalContainer from '../../../../../components/VerticalContainer';
import { GridCellProps } from '../../../../../components/GridTable/types';
import GridTable from '../../../../../components/GridTable';
import ContentCard from '../../../../../components/ContentCard';
import styles from './CellsControlPrices.module.scss';
import { useCellsControlPrices } from './useCellsControlPrices';
import { CellPrice } from '../../../../../types/serverInterface/serviceMenuDTO';
import ChangeCellsControlPricesRow from './ChangeCellsControlPricesRow';

const cellGap = 7.2;
const rowGap = 12;
const rowContentHeight = 222;

/**
 * Управление ячейками: цены
 */
const CellsControlPrices: FC = () => {
  const dispatch = useAppDispatch();

  const { cellsPricesRows, isRejectCellsPrices } = useCellsControlPrices();

  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isChangeCellsPricesOpen, setIsChangeCellsPricesOpen] = useState(false);

  useEffect(() => {
    dispatch(getCellsPricesAction());
  }, [dispatch]);

  // Обработчики
  const handleChangeCellsPricesRowOpen = (index: number) => {
    setSelectedRow(index);
    setIsChangeCellsPricesOpen(true);
  };

  const handleChangeCellsPricesRowClose = () => {
    setSelectedRow(null);
    setIsChangeCellsPricesOpen(false);
  };

  // render методы
  const renderRowTitle = (index: number) => (
    <HorizontalContainer isAutoWidth isAutoSpace>
      <Text>{index} ряд</Text>
      <Button
        label="Изменить цену всех ячеек в ряду"
        size="s"
        view="clear"
        onClick={() => handleChangeCellsPricesRowOpen(index)}
      />
    </HorizontalContainer>
  );

  const renderCellNumber = (cell: CellPrice) => (
    <ContentCard className={styles.cellNumberCard}>
      <Text size="s" weight="semibold" view="system">
        № {cell.id}
      </Text>
    </ContentCard>
  );

  const renderCellPlaceholder = (cell: CellPrice) => {
    const imgPath = cell.imgPath;

    return (
      <ContentCard className={styles.mainPartCard}>
        <img
          src={imgPath}
          className={styles.img}
          alt="product image"
          loading="lazy"
          decoding="async"
          onError={(e) => (e.currentTarget.src = '/images/placeholder.png')}
        />
      </ContentCard>
    );
  };

  const renderCellPrice = (cell: CellPrice) => (
    <ContentCard className={styles.priceCellCard}>
      <Text size="s" weight="semibold" view="system">
        {cell.price} ₽
      </Text>
    </ContentCard>
  );

  const renderProductName = (cell: CellPrice) => (
    <Text
      size="xs"
      className={styles.productNameText}
    >{`${cell.brandName} ${cell.productName}`}</Text>
  );

  const renderCell = ({ data }: GridCellProps<CellPrice>) => (
    <VerticalContainer space="2xs" isAutoWidth>
      <VerticalContainer space={0}>
        {renderCellNumber(data)}
        {renderCellPlaceholder(data)}
        {renderCellPrice(data)}
      </VerticalContainer>
      {renderProductName(data)}
    </VerticalContainer>
  );

  const renderPricesTable = () => (
    <GridTable
      data={cellsPricesRows}
      cellComponent={renderCell}
      rowContentHeight={rowContentHeight}
      getRowTitle={renderRowTitle}
      rowGap={rowGap}
      cellGap={cellGap}
    />
  );

  const renderError = () => (
    <Text size="6xl" align="center">
      Ошибка
    </Text>
  );

  const renderModal = () =>
    selectedRow !== null && (
      <ChangeCellsControlPricesRow
        isOpen={isChangeCellsPricesOpen}
        row={selectedRow}
        onClose={handleChangeCellsPricesRowClose}
      />
    );

  if (isRejectCellsPrices) return renderError();

  return (
    <VerticalContainer className={styles.CellsControlPrices}>
      {renderPricesTable()}
      {renderModal()}
    </VerticalContainer>
  );
};

export default CellsControlPrices;
