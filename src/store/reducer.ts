import actions from './actions';
import { ActionType, Payload, State } from './types';

const reducer = <T extends State, K extends { type: ActionType; payload: Payload }>(
  state: T,
  { type, payload }: K
) => {
  return actions[type]<T>(state, payload);
};

export default reducer;
