// @flow

import type { Actions } from "./actions";

import {
  ADD_NEW_POLL_LOADING,
  ADD_NEW_POLL_SUCCESS,
  ADD_NEW_POLL_FAILURE
} from "./actions";

export type State = {
  active: string | null,
  editing: Poll | null,
  loading: {
    add: boolean,
    remove: boolean,
    update: boolean
  },
  all: Polls
};

const INITIAL_STATE = {
  active: null,
  editing: null,
  loading: {
    add: false,
    remove: false,
    update: false
  },
  all: {}
};

export default (state: State = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case ADD_NEW_POLL_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          add: true
        }
      };

    case ADD_NEW_POLL_SUCCESS:
      return {
        ...state,
        all: {
          ...state.all,
          ...action.payload
        },
        loading: {
          ...state.loading,
          add: false
        }
      };

    case ADD_NEW_POLL_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          add: false
        },
        active: "",
        all: {
          ...state.all,
          [action.payload.pollId]: {
            ...state.all[action.payload.pollId],
            error: {
              ...state.all[action.payload.pollId].error,
              message: action.payload.message
            }
          }
        }
      };

    default:
      return state;
  }
};
