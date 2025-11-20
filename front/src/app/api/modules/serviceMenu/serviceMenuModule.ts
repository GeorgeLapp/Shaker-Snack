import { AbstractApiModule } from '../../abstractApiModule';
import { serviceMenuBaseUrl } from '../../../../consts/env';
import {
  CellsPricesRowDTO,
  Pin,
  ServiceMenuAuthorizationDTO,
  ServiceMenuPricesDTO,
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
   * Изменение цены ряда
   */
  changeCellsPricesRow(cellsPricesRow: CellsPricesRowDTO) {
    return this.request.post<CellsPricesRowDTO, undefined>(
      `${serviceMenuBaseUrl}/bff/cells/price/row`,
      cellsPricesRow,
    );
  }

  /**
   * Переход к сервисному меню
   */
  backToServiceMenu() {
    return this.request.post(`${serviceMenuBaseUrl}/bff/ui/back`);
  }
}
