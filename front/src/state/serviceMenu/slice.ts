import { errorHandler, NotificationType } from '../handlers';
import { createSlice, isRejected } from '@reduxjs/toolkit';
import {
  getCellsConfigThunk,
  getCellsPricesThunk,
  getCellsStocksThunk,
  getOpenSettingsThunk,
} from './thunk';
import { ServiceMenuPricesDTO } from '../../types/serverInterface/serviceMenuDTO';

type StateItemType<T> = {
  state: T extends [] ? T : T | null;
  isLoading: boolean;
  isReject: boolean;
};

export type ServiceMenuState = {
  openSettings: StateItemType<any>;
  cellsConfig: StateItemType<any>;
  cellsStocks: StateItemType<any>;
  cellsPrices: StateItemType<ServiceMenuPricesDTO>;
  notifications: NotificationType[];
};

const initialState: ServiceMenuState = {
  openSettings: {
    state: null,
    isLoading: false,
    isReject: false,
  },
  cellsConfig: {
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
  reducers: {},
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
      state.cellsConfig.isReject = false;
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

    builder.addMatcher(isRejected(), (state, action) => {
      errorHandler(action)(addNotification(state));
    });
  },
});

export const serviceMenuReducer = serviceMenuSlice.reducer;
