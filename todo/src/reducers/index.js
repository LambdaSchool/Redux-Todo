import { combineReducers } from "redux";
import todos from "./todos";
// import visibilityFilter from "./visibilityfilter";

export default combineReducers({
  todos: todos
});
