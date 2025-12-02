import { errorHandler, NotificationType } from '../handlers';
import { createSlice, isRejected, PayloadAction } from '@reduxjs/toolkit';
import {
  getCellsConfigThunk,
  getCellsPricesThunk,
  getCellsProductsThunk,
  getCellsStocksThunk,
  getOpenProductsListThunk,
  getOpenSettingsThunk,
} from './thunk';
import {
  ChangeCellsProducts,
  OpenProductListDTO,
  ServiceMenuConfigDTO,
  ServiceMenuPricesDTO,
  ServiceMenuProductsDTO,
} from '../../types/serverInterface/serviceMenuDTO';

type StateItemType<T> = {
  state: T extends [] ? T : T | null;
  isLoading: boolean;
  isReject: boolean;
};

export type ServiceMenuState = {
  openSettings: StateItemType<any>;
  cellsStocks: StateItemType<any>;
  cellsPrices: StateItemType<ServiceMenuPricesDTO>;
  cellsProducts: StateItemType<ServiceMenuProductsDTO>;
  cellsConfig: StateItemType<ServiceMenuConfigDTO>;
  openProductsList: StateItemType<OpenProductListDTO>;
  changeCellsProducts: ChangeCellsProducts;
  notifications: NotificationType[];
};

const initialState: ServiceMenuState = {
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
    state: {
      meta: {},
      state: '',
      view: { cells: [], screen: '' },
    },
    isLoading: false,
    isReject: false,
  },
  cellsProducts: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsConfig: {
    state: {
      meta: {},
      state: '',
      view: { cells: [], screen: '' },
    },
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

export const { setChangeCellsProducts, resetChangeCellsProducts } = serviceMenuSlice.actions;

export const serviceMenuReducer = serviceMenuSlice.reducer;
