import { errorHandler, NotificationType } from '../handlers';
import { createSlice, isRejected } from '@reduxjs/toolkit';

type StateItemType<T> = {
  state: T extends [] ? T : T | null;
  isLoading: boolean;
  isReject: boolean;
};

export type ClientState = {
  notifications: NotificationType[];
};

const initialState: ClientState = {
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
    builder.addMatcher(
      isRejected(),
      (state, action) => {
        errorHandler(action)(addNotification(state));
      },
    );
  },
});

export const clientReducer = clientSlice.reducer;
