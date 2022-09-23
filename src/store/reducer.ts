import actions from "./actions";

import { Actions, BaseState } from "./types";

const reducer = <T extends BaseState, K extends { type: Actions; payload?: any}>(state: T, { type, payload }: K) => {
  return actions[type]<T>(state, payload) ?? state;
};

export default reducer;
