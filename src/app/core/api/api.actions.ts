import { ActionCreatorFactory } from 'ngrx-action-creator-factory';
import { ApiError } from './api.interfaces';

export const apiActionTypes = {
  API_ERROR: 'api/error',
  START_LOADING: 'api/start-loading',
  STOP_LOADING: 'api/stop-loading'
};

export const apiActionCreators = {
  apiError: ActionCreatorFactory.create<ApiError>(apiActionTypes.API_ERROR),
  startLoading: ActionCreatorFactory.create<void>(apiActionTypes.START_LOADING),
  stopLoading: ActionCreatorFactory.create<void>(apiActionTypes.STOP_LOADING)
};
