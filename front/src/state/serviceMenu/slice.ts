import { errorHandler, NotificationType } from '../handlers';
import { createSlice, isRejected, PayloadAction } from '@reduxjs/toolkit';
import {
  assignProductToCellThunk,
  assignProductToRowThunk,
  changeCellPriceThunk,
  changeCellsPricesRowThunk,
  changeCellsTypeThunk,
  getCellsConfigThunk,
  getCellsPricesThunk,
  getCellsProductsThunk,
  getCellsStocksThunk,
  getCellsTestThunk,
  getOpenProductsListThunk,
  getOpenSettingsThunk,
  mergeCellsThunk,
  turnOnOffCellsThunk,
} from './thunk';
import {
  ChangeCellsProducts,
  DiagnosticsTestDTO,
  OpenProductListDTO,
  ServiceMenuConfigDTO,
  ServiceMenuPricesDTO,
  ServiceMenuProductsDTO,
} from '../../types/serverInterface/serviceMenuDTO';
import { CellControlEnum } from '../../pages/Service/ServiceMenu/CellsControl/types';

type StateItemType<T> = {
  state: T extends [] ? T : T | null;
  isLoading: boolean;
  isReject: boolean;
};

export type ServiceMenuState = {
  selectedCellControlTab: CellControlEnum;
  openSettings: StateItemType<any>;
  cellsStocks: StateItemType<any>;
  cellsPrices: StateItemType<ServiceMenuPricesDTO>;
  cellsProducts: StateItemType<ServiceMenuProductsDTO>;
  cellsConfig: StateItemType<ServiceMenuConfigDTO>;
  cellsTest: StateItemType<DiagnosticsTestDTO>;
  openProductsList: StateItemType<OpenProductListDTO>;
  changeCellsProducts: ChangeCellsProducts;
  notifications: NotificationType[];
};

const initialState: ServiceMenuState = {
  selectedCellControlTab: CellControlEnum.PRICES,
  openSettings: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsStocks: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsPrices: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsProducts: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsTest: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsConfig: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  openProductsList: {
    state: {
      meta: {},
      state: '',
      view: { products: [], screen: '' },
    },
    isLoading: false,
    isReject: false,
  },
  changeCellsProducts: {
    mode: null,
    row: null,
    cell: null,
    productName: null,
  },
  notifications: [],
};

const addNotification = (state: ServiceMenuState) => (notification: NotificationType) => {
  const arr = [...state.notifications];
  arr.push(notification);

  state.notifications = arr;
};

const serviceMenuSlice = createSlice({
  name: 'serviceMenu',
  initialState,
  reducers: {
    setSelectedCellControlTab(state, action: PayloadAction<CellControlEnum>) {
      state.selectedCellControlTab = action.payload;
    },

    setChangeCellsProducts(state, action: PayloadAction<ChangeCellsProducts>) {
      state.changeCellsProducts = action.payload;
    },

    resetChangeCellsProducts(state) {
      state.changeCellsProducts = {
        mode: null,
        row: null,
        cell: null,
        productName: null,
      };
    },
  },
  extraReducers: (builder) => {
    // getOpenSettingsThunk
    builder.addCase(getOpenSettingsThunk.pending, (state) => {
      state.openSettings.isLoading = true;
      state.openSettings.isReject = false;
    });

    builder.addCase(getOpenSettingsThunk.fulfilled, (state, action) => {
      state.openSettings.isLoading = false;
      state.openSettings.state = action.payload;
      state.openSettings.isReject = false;
    });

    builder.addCase(getOpenSettingsThunk.rejected, (state) => {
      state.openSettings.isLoading = false;
      state.openSettings.isReject = true;
    });

    // getCellsConfigThunk
    builder.addCase(getCellsConfigThunk.pending, (state) => {
      state.cellsConfig.isLoading = true;
      state.cellsConfig.isReject = false;
    });

    builder.addCase(getCellsConfigThunk.fulfilled, (state, action) => {
      state.cellsConfig.isLoading = false;
      state.cellsConfig.state = action.payload;
      state.cellsConfig.isReject = Boolean(action.payload.meta?.warn);
    });

    builder.addCase(getCellsConfigThunk.rejected, (state) => {
      state.cellsConfig.isLoading = false;
      state.cellsConfig.isReject = true;
    });

    // turnOnOffCellsThunk
    builder.addCase(turnOnOffCellsThunk.fulfilled, (state, action) => {
      state.cellsConfig.state = action.payload;
    });

    // mergeCellsThunk
    builder.addCase(mergeCellsThunk.fulfilled, (state, action) => {
      state.cellsConfig.state = action.payload;
    });

    // changeCellsTypeThunk
    builder.addCase(changeCellsTypeThunk.fulfilled, (state, action) => {
      state.cellsConfig.state = action.payload;
    });

    // getCellsStocksThunk
    builder.addCase(getCellsStocksThunk.pending, (state) => {
      state.cellsStocks.isLoading = true;
      state.cellsStocks.isReject = false;
    });

    builder.addCase(getCellsStocksThunk.fulfilled, (state, action) => {
      state.cellsStocks.isLoading = false;
      state.cellsStocks.state = action.payload;
      state.cellsStocks.isReject = false;
    });

    builder.addCase(getCellsStocksThunk.rejected, (state) => {
      state.cellsStocks.isLoading = false;
      state.cellsStocks.isReject = true;
    });

    // getCellsPricesThunk
    builder.addCase(getCellsPricesThunk.pending, (state) => {
      state.cellsPrices.isLoading = true;
      state.cellsPrices.isReject = false;
    });

    builder.addCase(getCellsPricesThunk.fulfilled, (state, action) => {
      state.cellsPrices.isLoading = false;
      state.cellsPrices.state = action.payload;
      state.cellsPrices.isReject = Boolean(action.payload.meta?.warn);
    });

    builder.addCase(getCellsPricesThunk.rejected, (state) => {
      state.cellsPrices.isLoading = false;
      state.cellsPrices.isReject = true;
      state.cellsPrices.isReject = false;
    });

    // changeCellsPricesRowThunk
    builder.addCase(changeCellsPricesRowThunk.fulfilled, (state, action) => {
      state.cellsPrices.state = action.payload;
    });

    // changeCellPriceThunk
    builder.addCase(changeCellPriceThunk.fulfilled, (state, action) => {
      state.cellsPrices.state = action.payload;
    });

    // getCellsProductsThunk
    builder.addCase(getCellsProductsThunk.pending, (state) => {
      state.cellsProducts.isLoading = true;
      state.cellsProducts.isReject = false;
    });

    builder.addCase(getCellsProductsThunk.fulfilled, (state, action) => {
      state.cellsProducts.isLoading = false;
      state.cellsProducts.state = action.payload;
      state.cellsProducts.isReject = Boolean(action.payload.meta?.warn);
    });

    builder.addCase(getCellsProductsThunk.rejected, (state) => {
      state.cellsProducts.isLoading = false;
      state.cellsProducts.isReject = true;
    });

    // assignProductToCellThunk
    builder.addCase(assignProductToCellThunk.fulfilled, (state, action) => {
      state.cellsProducts.state = action.payload;
    });

    // assignProductToRowThunk
    builder.addCase(assignProductToRowThunk.fulfilled, (state, action) => {
      state.cellsProducts.state = action.payload;
    });

    builder.addCase(getCellsTestThunk.pending, (state) => {
      state.cellsTest.isLoading = true;
      state.cellsTest.isReject = false;
    });

    // getCellsTestThunk
    builder.addCase(getCellsTestThunk.fulfilled, (state, action) => {
      state.cellsTest.isLoading = false;
      state.cellsTest.state = action.payload;
      state.cellsTest.isReject = Boolean(action.payload.meta?.warn);
    });

    builder.addCase(getCellsTestThunk.rejected, (state) => {
      state.cellsTest.isLoading = false;
      state.cellsTest.isReject = true;
    });

    // getOpenProductsListThunk
    builder.addCase(getOpenProductsListThunk.pending, (state) => {
      state.openProductsList.isLoading = true;
      state.openProductsList.isReject = false;
    });

    builder.addCase(getOpenProductsListThunk.fulfilled, (state, action) => {
      state.openProductsList.isLoading = false;
      state.openProductsList.state = action.payload;
      state.openProductsList.isReject = Boolean(action.payload.meta?.warn);
    });

    builder.addCase(getOpenProductsListThunk.rejected, (state) => {
      state.openProductsList.isLoading = false;
      state.openProductsList.isReject = true;
    });

    builder.addMatcher(isRejected(), (state, action) => {
      errorHandler(action)(addNotification(state));
    });
  },
});

export const { setSelectedCellControlTab, setChangeCellsProducts, resetChangeCellsProducts } =
  serviceMenuSlice.actions;

export const serviceMenuReducer = serviceMenuSlice.reducer;
