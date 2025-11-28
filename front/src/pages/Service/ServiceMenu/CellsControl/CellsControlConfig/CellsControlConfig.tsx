import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../app/hooks/store';
import {
  changeCellsTypeAction,
  getCellsConfigAction,
  turnOnOffCellsAction,
} from '../../../../../state/serviceMenu/action';
import ContentCard from '../../../../../components/ContentCard';
import VerticalContainer from '../../../../../components/VerticalContainer';
import HorizontalContainer from '../../../../../components/HorizontalContainer';
import { Button } from '@consta/uikit/Button';
import { IconPowerOn } from '../../../../../assets/icon/iconPowerOn';
import { IconPowerOff } from '../../../../../assets/icon/iconPowerOff';
import { IconDivide } from '../../../../../assets/icon/iconDivide';
import { IconUnite } from '../../../../../assets/icon/iconUnite';
import { Text } from '@consta/uikit/Text';
import { IconLineConveyor } from '../../../../../assets/icon/iconLineConveyor';
import { IconSpring } from '../../../../../assets/icon/iconSpring';
import styles from './CellsControlConfig.module.scss';
import GridTable from '../../../../../components/GridTable';
import {
  CellPrice,
  CellStatusEnum,
  CellTypeEnum,
  ChangeCellsTypeDTO,
  TurnOnOffCellsDTO,
} from '../../../../../types/serverInterface/serviceMenuDTO';
import { GridCellProps } from '../../../../../components/GridTable/types';
import { useCellsControlConfig } from './useCellsControlConfig';
import classNames from 'classnames';

const cellGap = 7.2;
const rowGap = 12;
const rowContentHeight = 222;

/**
 * Управление ячейками: конфиг
 */
const CellsControlConfig: FC = () => {
  const dispatch = useAppDispatch();

  const { cellsConfigRows } = useCellsControlConfig();

  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getCellsConfigAction());
  }, [dispatch]);

  // Обработчики
  const handleCellClick = (cell: CellPrice, rowIndex: number) => {
    if (selectedRowIndex !== null && selectedRowIndex !== rowIndex) {
      setSelectedRowIndex(rowIndex);
      setSelectedCells([cell.id]);
      return;
    }

    setSelectedRowIndex(rowIndex);

    setSelectedCells((prev) => {
      if (prev.includes(cell.id)) {
        return prev.filter((id) => id !== cell.id);
      }

      return [...prev, cell.id];
    });
  };

  const handleSelectRow = (rowIndex: number) => {
    const row = cellsConfigRows[rowIndex] || [];
    const rowIds = row.map((cell) => cell.id);

    const isThisRowSelected =
      selectedRowIndex === rowIndex &&
      rowIds.length > 0 &&
      rowIds.every((id) => selectedCells.includes(id));

    if (isThisRowSelected) {
      setSelectedRowIndex(null);
      setSelectedCells([]);
      return;
    }

    setSelectedRowIndex(rowIndex);
    setSelectedCells(rowIds);
  };

  const handleChangeCellsType = (type: CellTypeEnum) => {
    if (selectedCells.length === 0) return;

    const changeCellsType: ChangeCellsTypeDTO = {
      cellsIds: selectedCells,
      type,
    };

    dispatch(changeCellsTypeAction(changeCellsType)).then(() => {
      setSelectedCells([]);
      setSelectedRowIndex(null);
    });
  };

  const handleTurnOnOffCells = (status: CellStatusEnum) => {
    if (selectedCells.length === 0) return;

    const turnOnOffCells: TurnOnOffCellsDTO = {
      cellsIds: selectedCells,
      status,
    };

    dispatch(turnOnOffCellsAction(turnOnOffCells)).then(() => {
      setSelectedCells([]);
      setSelectedRowIndex(null);
    });
  };

  // render методы
  const renderTurnCellsOnOffCard = () => (
    <ContentCard className={styles.contentCard}>
      <VerticalContainer space="xs">
        <Text size="l" weight="medium">
          Объединение
        </Text>
        <HorizontalContainer space="s">
          <Button
            disabled={selectedCells.length === 0}
            onlyIcon
            size="l"
            view="clear"
            iconLeft={IconUnite}
          />
          <Button
            disabled={selectedCells.length === 0}
            onlyIcon
            size="l"
            view="clear"
            iconLeft={IconDivide}
          />
        </HorizontalContainer>
      </VerticalContainer>
    </ContentCard>
  );

  const renderChangeCellsTypeCard = () => (
    <ContentCard className={styles.contentCard}>
      <VerticalContainer space="xs">
        <Text size="l" weight="medium">
          Тип ячейки
        </Text>
        <HorizontalContainer space="s">
          <Button
            disabled={selectedCells.length === 0}
            onlyIcon
            size="l"
            view="clear"
            iconLeft={IconSpring}
            onClick={() => handleChangeCellsType(CellTypeEnum.SPIRAL)}
          />
          <Button
            disabled={selectedCells.length === 0}
            onlyIcon
            size="l"
            view="clear"
            iconLeft={IconLineConveyor}
            onClick={() => handleChangeCellsType(CellTypeEnum.CONVEYOR)}
          />
        </HorizontalContainer>
      </VerticalContainer>
    </ContentCard>
  );

  const renderPowerCellsOnOffCard = () => (
    <ContentCard className={styles.contentCard}>
      <VerticalContainer space="xs">
        <Text size="l" weight="medium">
          Вкл/Выкл
        </Text>
        <HorizontalContainer space="s">
          <Button
            disabled={selectedCells.length === 0}
            onlyIcon
            size="l"
            view="clear"
            iconLeft={IconPowerOn}
            onClick={() => handleTurnOnOffCells(CellStatusEnum.ENABLED)}
          />
          <Button
            disabled={selectedCells.length === 0}
            onlyIcon
            size="l"
            view="clear"
            iconLeft={IconPowerOff}
            onClick={() => handleTurnOnOffCells(CellStatusEnum.DISABLED)}
          />
        </HorizontalContainer>
      </VerticalContainer>
    </ContentCard>
  );

  const renderCards = () => (
    <HorizontalContainer space="l">
      {renderTurnCellsOnOffCard()}
      {renderChangeCellsTypeCard()}
      {renderPowerCellsOnOffCard()}
    </HorizontalContainer>
  );

  const renderRowTitle = (index: number) => (
    <HorizontalContainer isAutoWidth isAutoSpace>
      <Text>{index} ряд</Text>
      <Button
        label="Выбрать всю полку"
        size="s"
        view="clear"
        onClick={() => handleSelectRow(index)}
      />
    </HorizontalContainer>
  );

  const renderCellNumber = (cell: CellPrice, isSelected: boolean) => (
    <ContentCard className={classNames(styles.cellNumberCard, isSelected && styles.isSelected)}>
      <Text size="s" weight="semibold" view="system">
        № {cell.id}
      </Text>
    </ContentCard>
  );

  const renderCellPlaceholder = (cell: CellPrice, isSelected: boolean) => {
    const imgPath = cell.imgPath;

    return (
      <ContentCard className={classNames(styles.mainPartCard, isSelected && styles.isSelected)}>
        <img
          src={imgPath}
          className={styles.img}
          alt="product image"
          loading="lazy"
          decoding="async"
        />
      </ContentCard>
    );
  };

  const renderCellType = (cell: CellPrice, isSelected: boolean) => (
    <ContentCard className={classNames(styles.priceCellCard, isSelected && styles.isSelected)}>
      {cell.type === CellTypeEnum.SPIRAL ? <IconSpring /> : <IconLineConveyor />}
    </ContentCard>
  );

  const renderCell = ({ data, rowIndex }: GridCellProps<CellPrice>) => {
    const isSelected = selectedCells.includes(data.id);

    return (
      <VerticalContainer
        space={0}
        onClick={() => handleCellClick(data, rowIndex)}
        className={classNames(isSelected && styles.cellWrapperSelected)}
      >
        {renderCellNumber(data, isSelected)}
        {renderCellPlaceholder(data, isSelected)}
        {renderCellType(data, isSelected)}
      </VerticalContainer>
    );
  };

  const renderGrid = () => (
    <GridTable
      data={cellsConfigRows}
      cellComponent={renderCell}
      rowContentHeight={rowContentHeight}
      getRowTitle={renderRowTitle}
      rowGap={rowGap}
      cellGap={cellGap}
    />
  );

  return (
    <VerticalContainer space="l" className={styles.CellsControlConfig}>
      {renderCards()}
      {renderGrid()}
    </VerticalContainer>
  );
};

export default CellsControlConfig;
