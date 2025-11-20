/**
 * Свойства компонента ChangeCellControlPricesRow
 */
export type ChangeCellControlPricesRowProps = {
  /**
   * Флаг открытия модального окна
   */
  isOpen: boolean;
  /**
   * Номер ряда
   */
  row: number;
  /**
   * Обработчик закрытия модального окна
   */
  onClose: () => void;
};
