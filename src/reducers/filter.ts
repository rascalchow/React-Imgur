import { AnyAction } from "redux";

export default function galleriesFilter(
  state = {
    page: "0",
    section: "hot",
    sort: "viral",
    window: "day",
    viral: 'true'
  },
  action: AnyAction
) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return Object.assign({}, state, action.payload);
  }
  return state;
}
