// @flow

import type { State as PollsState } from "./polls/reducer";

import type {
  ActionTypes as PollsActionTypes,
  Actions as PollsActions
} from "./polls/actions";

type ActionTypes = PollsActionTypes;
// | PollsActionTypes

export type Actions = PollsActions;
// | PollsActions

export type ActionT<A: ActionTypes, P> = {|
  type: A,
  payload: P
|};

export type State = {
  polls: PollsState
};

// eslint-disable-next-line no-use-before-define
export type Dispatch = (action: Actions | ThunkAction | PromiseAction) => any;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type GetState = () => State;
export type PromiseAction = Promise<Actions>;
