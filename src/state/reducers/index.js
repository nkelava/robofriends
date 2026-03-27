import { combineReducers } from "redux";
import { searchRobots, requestRobots } from "./robotsReducer";

const rootReducers = combineReducers({ requestRobots, searchRobots });

export default rootReducers;
