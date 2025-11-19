import React, { FC, useMemo, useState } from 'react';
import HorizontalContainer from '../../../../components/HorizontalContainer';
import VerticalContainer from '../../../../components/VerticalContainer';
import styles from './CellsControl.module.scss';
import { Button } from '@consta/uikit/Button';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '../../../../assets/icon/iconArrowLeft';
import { Text } from '@consta/uikit/Text';
import { IconArrowRight } from '../../../../assets/icon/iconArrowRight';
import TabsBadge from '../../../../components/TabsBadge';
import { TabProps } from '../../../../components/TabsBadge/TabBadge/types';
import { IconRevert } from '@consta/icons/IconRevert';
import { CellControlEnum } from './types';
import CellsControlPrices from './CellsControlPrices';
import { backToServiceMenuAction } from '../../../../state/serviceMenu/action';
import { useAppDispatch } from '../../../../app/hooks/store';

/**
 * Управление ячейками
 */
const CellsControl: FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [selectedCellControlTab, setSelectedCellControlTab] = useState<CellControlEnum>(
    CellControlEnum.STOCKS,
  );

  const tabsList = useMemo(
    (): TabProps[] => [
      {
        label: 'Остатки',
        isSelect: selectedCellControlTab === CellControlEnum.STOCKS,
        onClick: () => setSelectedCellControlTab(CellControlEnum.STOCKS),
      },
      {
        label: 'Глубина',
        isSelect: selectedCellControlTab === CellControlEnum.DEPTH,
        onClick: () => setSelectedCellControlTab(CellControlEnum.DEPTH),
      },
      {
        label: 'Цены',
        isSelect: selectedCellControlTab === CellControlEnum.PRICES,
        onClick: () => setSelectedCellControlTab(CellControlEnum.PRICES),
      },
      {
        label: 'Товары',
        isSelect: selectedCellControlTab === CellControlEnum.GOODS,
        onClick: () => setSelectedCellControlTab(CellControlEnum.GOODS),
      },
      {
        label: 'Конфиг ячеек',
        isSelect: selectedCellControlTab === CellControlEnum.CONFIG,
        onClick: () => setSelectedCellControlTab(CellControlEnum.CONFIG),
      },
    ],
    [selectedCellControlTab],
  );

  // Обработчики
  const handleBackClick = () => {
    dispatch(backToServiceMenuAction()).finally(() => navigate('/menu'));
  };

  // render методы
  const renderHeader = () => (
    <HorizontalContainer space="l">
      <Button
        view="secondary"
        size="l"
        onlyIcon
        iconLeft={IconArrowLeft}
        onClick={handleBackClick}
      />
      <HorizontalContainer space="2xs">
        <Text size="3xl" weight="semibold" view="secondary">
          Настройки
        </Text>
        <IconArrowRight />
        <Text size="3xl" weight="semibold">
          Управление ячейками
        </Text>
      </HorizontalContainer>
    </HorizontalContainer>
  );

  const renderTabs = () => (
    <HorizontalContainer isAutoWidth isAutoSpace>
      <TabsBadge size="l" tabsList={tabsList} />
      <Button size="l" onlyIcon iconLeft={IconRevert} view="ghost" />
    </HorizontalContainer>
  );

  const renderMainPart = () => {
    switch (selectedCellControlTab) {
      case CellControlEnum.PRICES:
        return <CellsControlPrices />;
      default:
    }
  };

  return (
    <VerticalContainer space="l" className={styles.CellsControl}>
      {renderHeader()}
      <VerticalContainer space="m">
        {renderTabs()}
        {renderMainPart()}
      </VerticalContainer>
    </VerticalContainer>
  );
};

export default CellsControl;
