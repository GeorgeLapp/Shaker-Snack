import { AbstractApiModule } from '../../abstractApiModule';
import { serviceMenuBaseUrl } from '../../../../consts/env';
import {
  CellPriceDTO,
  CellsPricesRowDTO,
  OpenProductListDTO,
  Pin,
  ProductToCellDTO,
  ProductToRowDTO,
  ServiceMenuAuthorizationDTO,
  ServiceMenuPricesDTO,
  ServiceMenuProductsDTO,
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
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/nav/cells-config`);
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
  }

  /**
   * Получение товаров
   */
  getCellsProducts() {
    return this.request.post<undefined, ServiceMenuProductsDTO>(
      `${serviceMenuBaseUrl}/bff/ui/nav/cells-products`,
    );
  }

  /**
   * Изменение цены во всем ряду
   */
  changeCellsPricesRow(cellsPricesRow: CellsPricesRowDTO) {
    return this.request.post<CellsPricesRowDTO, undefined>(
      `${serviceMenuBaseUrl}/bff/cells/price/row`,
      cellsPricesRow,
    );
  }

  /**
   * Изменение цены в ячейке
   */
  changeCellPrice(cellPrice: CellPriceDTO) {
    return this.request.post<CellPriceDTO, undefined>(
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
    return this.request.post<ProductToCellDTO, undefined>(
      `${serviceMenuBaseUrl}/bff/products/assign`,
      productToCell,
    );
  }

  /**
   *  Присвоение товара ряду
   */
  assignProductToRow(productToRow: ProductToRowDTO) {
    return this.request.post<ProductToRowDTO, undefined>(
      `${serviceMenuBaseUrl}/bff/products/assign-row`,
      productToRow,
    );
  }

  /**
   * Переход к сервисному меню
   */
  backToServiceMenu() {
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/back`);
  }
}
