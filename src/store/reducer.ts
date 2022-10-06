import actions from './actions';

import { ActionType, BaseState, Payload } from './types';

const reducer = <T extends BaseState, K extends { type: ActionType; payload?: Payload}>(state: T, { type, payload }: K) => {
  return actions[type]<T>(state, payload) ?? state;
};

export default reducer;
