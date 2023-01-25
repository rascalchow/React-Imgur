import { combineReducers } from "redux";

import galleriesList from "./gallerieslist";
import galleriesFilter from "./filter";

export default combineReducers({
  galleriesList,
  galleriesFilter
});
