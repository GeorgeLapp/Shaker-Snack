import { FC, useState } from 'react';
import { ChangeCellControlPricesRowProps } from './types';
import DefaultModal from '../../../../../../components/DefaultModal';
import HorizontalContainer from '../../../../../../components/HorizontalContainer';
import { Button } from '@consta/uikit/Button';
import { CellsPricesRowDTO } from '../../../../../../types/serverInterface/serviceMenuDTO';
import { useAppDispatch } from '../../../../../../app/hooks/store';
import {
  backToServiceMenuAction,
  changeCellsPricesRowAction,
} from '../../../../../../state/serviceMenu/action';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@consta/uikit/TextField';
import { getInputNumberValue } from '../../../../../../helpers/inputHelpers';

/**
 * Модальное окно для смены цены во всем ряду
 */
const ChangeCellsControlPricesRow: FC<ChangeCellControlPricesRowProps> = ({
  isOpen,
  row,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [price, setPrice] = useState<number | null>(null);

  // Обработчики
  const handleSubmitCellsPricesRow = () => {
    if (price !== null) {
      const cellsPricesRow: CellsPricesRowDTO = {
        row: row,
        price: price,
      };

      dispatch(changeCellsPricesRowAction(cellsPricesRow))
        .then(() => dispatch(backToServiceMenuAction()))
        .finally(() => {
          onClose();
          navigate('/menu');
        });
    }
  };

  const handleChangePrices = (value: string | null) => {
    setPrice(Number(value));
  };

  // render методы
  const renderTextField = () => (
    <TextField
      value={getInputNumberValue(price)}
      label="Цена"
      placeholder="0"
      width="full"
      size="m"
      rightSide="₽"
      onChange={handleChangePrices}
    />
  );

  const renderActions = () => (
    <HorizontalContainer space="m">
      <Button size="m" view="clear" label="Отменить" onClick={onClose} />
      <Button size="m" view="primary" label="Сохранить" onClick={handleSubmitCellsPricesRow} />
    </HorizontalContainer>
  );

  return (
    <DefaultModal
      isOpen={isOpen}
      modalTitle="Изменение цены ряда"
      renderActions={renderActions}
      onClose={onClose}
    >
      {renderTextField()}
    </DefaultModal>
  );
};

export default ChangeCellsControlPricesRow;
