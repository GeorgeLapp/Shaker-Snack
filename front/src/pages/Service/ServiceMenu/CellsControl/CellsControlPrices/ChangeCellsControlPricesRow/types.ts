/**
 * Свойства компонента ChangeCellControlPricesRow
 */
export type ChangeCellControlPricesRowProps = {
  /**
   * Номер ряда
   */
  row: number;
  /**
   * Флаг открытия модального окна
   */
  isOpen: boolean;
  /**
   * Обработчик закрытия модального окна
   */
  onClose: () => void;
};
