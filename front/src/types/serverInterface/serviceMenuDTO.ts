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
 * Тип ячейки
 */
export enum CellTypeEnum {
  /**
   * Спираль
   */
  SPIRAL = 'spiral',
  /**
   * Конвейер
   */
  CONVEYOR = 'conveyor',
}

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
  status: CellStatusEnum;
  /**
   * Тип ячейки
   */
  type: CellTypeEnum;
};

/**
 * Ячейка в списке ячеек с диагностикой
 */
export type CellDiagnostics = CellPrice & {
  /**
   * id моторов
   */
  motorIds: number[];
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
 * dto управление ячейками - конфиг
 */
export type ServiceMenuConfigDTO = ServiceMenuPricesDTO;

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
  productId: number | null;
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
 * Статус ячейки
 */
export enum CellStatusEnum {
  /**
   * Выключена
   */
  DISABLED = 'disabled',
  /**
   * Включена
   */
  ENABLED = 'enabled',
}

/**
 * dto для включения/выключения ячеек
 */
export type TurnOnOffCellsDTO = {
  /**
   * Номера ячеек
   */
  cellsIds: number[];
  /**
   * Статус ячеек
   */
  status: CellStatusEnum;
};

/**
 * dto для объединения ячеек
 */
export type MergeCellsDTO = {
  /**
   * Номера ячеек
   */
  cellsIds: number[];
};

/**
 * dto для изменения типа ячейки
 */
export type ChangeCellsTypeDTO = {
  /**
   * Номера ячеек
   */
  cellsIds: number[];
  /**
   * Тип ячейки
   */
  type: CellTypeEnum;
};

/**
 * dto для теста ячеек
 */
export type RunDiagnosticsDTO = {
  /**
   * Номера ячеек
   */
  cellsIds: number[];
};

/**
 * dto для перезапуска теста ячеек
 */
export type RerunDiagnosticsDTO = RunDiagnosticsDTO;

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

/**
 * dto диагностика - тест ячеек
 */
export type DiagnosticsTestDTO = {
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
    cells: CellDiagnostics[];
    /**
     * Название экрана
     */
    screen: string;
  };
};
