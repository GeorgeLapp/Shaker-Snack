/**
 * Пин
 */
export type Pin = {
  /**
   * Пин
   */
  pin: string;
};

/**
 * Ячейка в списке ячеек с ценами
 */
export type CellPrice = {
  /**
   * id ячейки
   */
  id: number;
  /**
   * Номер ряда
   */
  row: number;
  /**
   * Путь до картинки
   */
  imgPath: string;
  /**
   * Название бренда
   */
  brandName: string;
  /**
   * Название продукта
   */
  productName: string;
  /**
   * Вместимость ячейки
   */
  capacity: number;
  /**
   * Остаток в ячейке
   */
  stock: number;
  /**
   * Цена
   */
  price: number;
  /**
   * id продукта
   */
  productId: number | null;
  /**
   * Статус
   */
  status: string;
  /**
   * Тип
   */
  type: string;
};

export type ServiceMenuAuthorizationDTO = {
  /**
   * Мета информация
   */
  meta: any;
  /**
   * Состояние
   */
  state: string;
  /**
   * Вид
   */
  view: {
    /**
     * Сообщение
     */
    message: string;
    /**
     * Название экрана
     */
    screen: string;
  };
};

/**
 * dto управление ячейками - цены
 */
export type ServiceMenuPricesDTO = {
  /**
   * Мета информация
   */
  meta: any;
  /**
   * Состояние
   */
  state: string;
  /**
   * Вид
   */
  view: {
    /**
     * Список ячеек
     */
    cells: CellPrice[];
    /**
     * Название экрана
     */
    screen: string;
  };
};

/**
 * dto для смены цены в ряду
 */
export type CellsPricesRowDTO = {
  /**
   * Номер ряда
   */
  row: number;
  /**
   * Цена
   */
  price: number;
};
