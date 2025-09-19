import { errorHandler, NotificationType } from '../handlers';
import { createSlice, isRejected } from '@reduxjs/toolkit';
import { getProductMatrixThunk } from './thunk';
import { ProductMatrixUi } from '../../types/serverInterface/ProductMatrixDTO';
import { toProductMatrixUi } from './helpers';

type StateItemType<T> = {
  state: T extends [] ? T : T | null;
  isLoading: boolean;
  isReject: boolean;
};

export type ClientState = {
  productMatrix: StateItemType<ProductMatrixUi>;
  notifications: NotificationType[];
};

const initialState: ClientState = {
  productMatrix: {
    state: [],
    isLoading: false,
    isReject: false,
  },
  notifications: [],
};

/**
 * Добавление уведомления
 *
 * @param state состояние
 * @param notification новое уведомление
 */
const addNotification = (state: ClientState) => (notification: NotificationType) => {
  const arr = [...state.notifications];
  arr.push(notification);

  state.notifications = arr;
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getProductMatrixThunk
    builder.addCase(getProductMatrixThunk.pending, (state, action) => {
      state.productMatrix.isLoading = true;
      state.productMatrix.isReject = false;
    });

    builder.addCase(getProductMatrixThunk.rejected, (state, action) => {
      state.productMatrix.isLoading = false;
      state.productMatrix.isReject = true;
    });

    builder.addCase(getProductMatrixThunk.fulfilled, (state, action) => {
      state.productMatrix.isLoading = false;
      state.productMatrix.state = toProductMatrixUi(action.payload);
    });

    builder.addMatcher(isRejected(), (state, action) => {
      errorHandler(action)(addNotification(state));
    });
  },
});

export const clientReducer = clientSlice.reducer;
