// @flow

// import Router from 'next/router';

import type { ActionT, Dispatch, GetState } from "../types";

export const ADD_NEW_POLL_LOADING = "polls/ADD_NEW_POLL_LOADING";
export const ADD_NEW_POLL_SUCCESS = "polls/ADD_NEW_POLL_OPTION_SUCCESS";
export const ADD_NEW_POLL_FAILURE = "polls/ADD_NEW_POLL_OPTION_FAILURE";

export type ActionTypes =
  | typeof ADD_NEW_POLL_LOADING
  | typeof ADD_NEW_POLL_SUCCESS
  | typeof ADD_NEW_POLL_FAILURE;

export type Actions =
  // prettier-ignore
  ActionT<typeof ADD_NEW_POLL_LOADING, null> |
  ActionT<typeof ADD_NEW_POLL_SUCCESS, Polls> |
  ActionT<typeof ADD_NEW_POLL_FAILURE, {
    pollId: string,
    message: string
  }>;

// Actions creators
// const newPollLoading = (): Actions => ({
//   type: ADD_NEW_POLL_LOADING,
//   payload: null
// });

// export const newPollOptionSuccess = (poll: Polls): Actions => ({
//   type: ADD_NEW_POLL_SUCCESS,
//   payload: poll
// });

// const newPollFailure = (pollId: string, message: string): Actions => ({
//   type: ADD_NEW_POLL_FAILURE,
//   payload: {
//     pollId,
//     message
//   }
// });

// Actions
