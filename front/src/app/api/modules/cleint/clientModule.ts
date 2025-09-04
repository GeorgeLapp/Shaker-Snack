import { AbstractApiModule } from '../../abstractApiModule';
import { ProductMatrixDTO } from '../../../../types/serverInterface/ProductMatrixDTO';
import { getDataFromServer } from '../../../../helpers/getDataFromServer';
import { productMatrix } from './mockData';
import { StartSaleDTO, StartSaleRes } from '../../../../types/serverInterface/StartSaleDTO';
import { IssueProductDTO, IssueProductRes } from '../../../../types/serverInterface/IssueProductDTO';

/**
 * api клиентской части приложения
 */
export class ClientModule extends AbstractApiModule {
  getProductMatrix(): Promise<ProductMatrixDTO> {
    return getDataFromServer(productMatrix);
  }

  startSale(data: StartSaleDTO): Promise<StartSaleRes> {
    return getDataFromServer({ success: true });
  }

  issueProduct(data: IssueProductDTO): Promise<IssueProductRes> {
    return getDataFromServer({ success: true });
  }
}
