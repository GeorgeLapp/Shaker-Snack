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

/**
 * Мета информация
 */
export type Meta = {
  /**
   * Текст предупреждения
   */
  warn?: string;
};

export type ServiceMenuAuthorizationDTO = {
  /**
   * Мета информация
   */
  meta: Meta;
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
  meta: Meta;
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
 * dto управление ячейками - товары
 */
export type ServiceMenuProductsDTO = ServiceMenuPricesDTO;

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

/**
 * dto для смены цены в ячейке
 */
export type CellPriceDTO = {
  /**
   * id ячейки
   */
  cellId: number;
  /**
   * Цена
   */
  price: number;
};

/**
 * dto присвоения продукта ячейке
 */
export type ProductToCellDTO = {
  /**
   * Номер ячейки
   */
  cellId: number;
  /**
   * id продукта
   */
  productId: number;
};

/**
 * dto присвоения продукта ряду
 */
export type ProductToRowDTO = {
  /**
   * Номер ряда
   */
  row: number;
  /**
   * id продукта
   */
  productId: number;
  /**
   * Объем
   */
  scope: 'all';
};

/**
 * Режим изменения продуктов/цен
 */
export enum ChangeCellsModeEnum {
  /**
   * Ряд
   */
  ROW = 'ROW',
  /**
   * Ячейка
   */
  CELL = 'CELL',
}

export type ChangeCellsProducts = {
  /**
   * Номер ряда
   */
  row: number | null;
  /**
   * Номер ячейки
   */
  cell: number | null;
  /**
   * Режим изменения цен/продуктов
   */
  mode: ChangeCellsModeEnum | null;
  /**
   * Название продукта
   */
  productName: string | null;
};

/**
 * Продукт из каталога
 */
export type OpenListItem = {
  /**
   * Путь до картинки
   */
  imgPath: string;
  /**
   * id продукта
   */
  id: number;
  /**
   * Название продукта
   */
  name: string;
};

/**
 * Массив продукта из каталога
 */
export type OpenProductListDTO = {
  /**
   * Мета информация
   */
  meta: Meta;
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
    products: OpenListItem[];
    /**
     * Название экрана
     */
    screen: string;
  };
};
