import { createSelector } from "reselect";

const selectMarketter = (state) => state.markettersReducer;

export const selectMarketters = createSelector(
  [selectMarketter],
  (maretter) => maretter.list
);
