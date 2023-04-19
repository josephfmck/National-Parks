/* eslint-disable import/no-anonymous-default-export */
import {
  SET_ALL_50_STATES,
  SET_STATE_CHOSEN_ABREV,
  SET_ALL_PARKS_DATA,
  SET_ALL_PARKS_WITHIN_STATE,
  SET_PARK_CHOSEN_PARK_CODE,
  SET_PARK_OPTION_INDEX_SELECTED,
  SET_PARK_CHOSEN_DATA,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALL_50_STATES:
      return {
        //fill state with hardcoded 50 states
        ...state,
        all50StatesArr: action.payload,
      };
    case SET_STATE_CHOSEN_ABREV:
      return {
        ...state,
        stateChosenAbrev: action.payload,
      };
    case SET_ALL_PARKS_DATA:
      return {
        ...state,
        all467ParksData: action.payload,
      };
    case SET_ALL_PARKS_WITHIN_STATE:
      return {
        ...state,
        allParksWithinState: action.payload,
      };
    case SET_PARK_CHOSEN_PARK_CODE:
      return {
        ...state,
        parkChosenParkCode: action.payload,
      };
    case SET_PARK_OPTION_INDEX_SELECTED:
      return {
        ...state,
        parkOptionIndexSelected: action.payload,
      };
    case SET_PARK_CHOSEN_DATA:
      return {
        ...state,
        parkChosenData: action.payload,
      };
    //return initialState
    default:
      return state;
  }
};
