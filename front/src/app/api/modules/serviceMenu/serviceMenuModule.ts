import { AbstractApiModule } from '../../abstractApiModule';
import { serviceMenuBaseUrl } from '../../../../consts/env';
import {
  CellPriceDTO,
  CellsPricesRowDTO,
  ChangeCellsTypeDTO,
  DiagnosticsTestDTO,
  MergeCellsDTO,
  OpenProductListDTO,
  Pin,
  ProductToCellDTO,
  ProductToRowDTO,
  RerunDiagnosticsDTO,
  RunDiagnosticsDTO,
  ServiceMenuAuthorizationDTO,
  ServiceMenuConfigDTO,
  ServiceMenuPricesDTO,
  ServiceMenuProductsDTO,
  TurnOnOffCellsDTO,
} from '../../../../types/serverInterface/serviceMenuDTO';

export class ServiceMenuModule extends AbstractApiModule {
  /**
   * Открытие сервисного меню
   */
  getOpenSettings() {
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/open-settings`);
  }

  /**
   * Авторизация по PIN
   * @param pin PIN
   */
  authSubmitPin(pin: Pin) {
    return this.request.post<Pin, ServiceMenuAuthorizationDTO>(
      `${serviceMenuBaseUrl}/bff/auth/login`,
      pin,
    );
  }

  /**
   * Получение конфига ячеек
   */
  getCellsConfig() {
    return this.request.post<undefined, ServiceMenuConfigDTO>(
      `${serviceMenuBaseUrl}/bff/ui/nav/cells-config`,
    );
    // return getDataFromServer(mockCellsPrices);
  }

  /**
   * Получение остатков
   */
  getCellsStocks() {
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/nav/cells-stocks`);
  }

  /**
   * Получение цен
   */
  getCellsPrices() {
    return this.request.post<undefined, ServiceMenuPricesDTO>(
      `${serviceMenuBaseUrl}/bff/ui/nav/cells-prices`,
    );
    // return getDataFromServer(mockCellsPrices);
  }

  /**
   * Получение товаров
   */
  getCellsProducts() {
    return this.request.post<undefined, ServiceMenuProductsDTO>(
      `${serviceMenuBaseUrl}/bff/ui/nav/cells-products`,
    );
    // return getDataFromServer(mockCellsPrices);
  }

  /**
   * Получение диагностики ячеек
   */
  getCellsTest() {
    return this.request.post<undefined, DiagnosticsTestDTO>(
      `${serviceMenuBaseUrl}/bff/ui/nav/diagnostics`,
    );
    // return getDataFromServer(mockCells);
  }

  /**
   * Изменение цены во всем ряду
   */
  changeCellsPricesRow(cellsPricesRow: CellsPricesRowDTO) {
    return this.request.post<CellsPricesRowDTO, ServiceMenuPricesDTO>(
      `${serviceMenuBaseUrl}/bff/cells/price/row`,
      cellsPricesRow,
    );
  }

  /**
   * Изменение цены в ячейке
   */
  changeCellPrice(cellPrice: CellPriceDTO) {
    return this.request.post<CellPriceDTO, ServiceMenuPricesDTO>(
      `${serviceMenuBaseUrl}/bff/cells/price/cell`,
      cellPrice,
    );
  }

  /**
   * Получение списка товаров
   */
  getOpenProductsList() {
    return this.request.post<undefined, OpenProductListDTO>(
      `${serviceMenuBaseUrl}/bff/products/open-list`,
    );
  }

  /**
   *  Присвоение товара ячейке
   */
  assignProductToCell(productToCell: ProductToCellDTO) {
    return this.request.post<ProductToCellDTO, ServiceMenuProductsDTO>(
      `${serviceMenuBaseUrl}/bff/products/assign`,
      productToCell,
    );
  }

  /**
   *  Присвоение товара ряду
   */
  assignProductToRow(productToRow: ProductToRowDTO) {
    return this.request.post<ProductToRowDTO, ServiceMenuProductsDTO>(
      `${serviceMenuBaseUrl}/bff/products/assign-row`,
      productToRow,
    );
  }

  /**
   * Включение/выключение ячеек
   */
  turnOnOffCells(turnOnOffCells: TurnOnOffCellsDTO) {
    return this.request.post<TurnOnOffCellsDTO, ServiceMenuConfigDTO>(
      `${serviceMenuBaseUrl}/bff/cells/status`,
      turnOnOffCells,
    );
  }

  /**
   * Объединение ячеек
   */
  mergeCells(mergeCells: MergeCellsDTO) {
    return this.request.post<MergeCellsDTO, ServiceMenuConfigDTO>(
      `${serviceMenuBaseUrl}/bff/cells/merge`,
      mergeCells,
    );
  }

  /**
   * Изменение типа ячеек
   */
  changeCellsType(cellsType: ChangeCellsTypeDTO) {
    return this.request.post<ChangeCellsTypeDTO, ServiceMenuConfigDTO>(
      `${serviceMenuBaseUrl}/bff/cells/type`,
      cellsType,
    );
  }

  /**
   * Тест ячеек
   */
  runDiagnostics(runDiagnostics: RunDiagnosticsDTO) {
    return this.request.post<RunDiagnosticsDTO, undefined>(
      `${serviceMenuBaseUrl}/bff/diagnostics/run`,
      runDiagnostics,
    );
  }

  /**
   * Перезапуск теста ячеек
   */
  rerunDiagnostics(rerunDiagnostics: RerunDiagnosticsDTO) {
    return this.request.post<RerunDiagnosticsDTO, undefined>(
      `${serviceMenuBaseUrl}/bff/diagnostics/rerun`,
      rerunDiagnostics,
    );
  }

  /**
   * Переход к сервисному меню
   */
  backToServiceMenu() {
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/back`);
  }

  /**
   * Повтор после ошибки
   */
  retry() {
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/retry`);
  }
}
