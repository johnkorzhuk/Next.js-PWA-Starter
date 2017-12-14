// @flow

import { createSelector } from "reselect";

import type { State } from "../types";

export const selectAllPolls = (state: State): Polls => state.polls.all;
export const selectPollById = (pollId: string) => (state: State): Poll =>
  selectAllPolls(state)[pollId];
const selectActive = (state: State) => state.polls.active;

export const selectActivePoll = createSelector(
  [selectActive, selectAllPolls],
  (active: string, polls: Polls) => polls[active]
);

export const selectActivePollOptionById = (optionId: string) =>
  createSelector([selectActivePoll], (poll: Poll) => poll.options[optionId]);
