import { createStore } from 'redux';

import { getUserReducer } from './reducer';

export const store = createStore(getUserReducer);