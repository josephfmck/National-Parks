import React, { useReducer } from "react";
import axios from "axios";
import NpsContext from "./npsContext";
import NpsReducer from "./npsReducer";
import {
  SET_ALL_50_STATES,
  SET_ALL_PARKS_DATA,
  SET_STATE_CHOSEN_ABREV,
  SET_ALL_PARKS_WITHIN_STATE,
  SET_PARK_CHOSEN_PARK_CODE,
  SET_PARK_OPTION_INDEX_SELECTED,
  SET_PARK_CHOSEN_DATA,
} from "../types";

let npsClientKey;

const NpsState = (props) => {
  //*Initial State
  const initialState = {
    all50StatesArr: [],
    all467ParksData: [],
    stateChosenAbrev: "AL",
    allParksWithinState: [],
    parkChosenParkCode: "",
    parkChosenData: {},
    parkOptionIndexSelected: 0,
  };

  const [state, dispatch] = useReducer(NpsReducer, initialState);

  const setAll50States = () => {
    const all50States = [
      { state: "Alabama", abrev: "AL" },
      { state: "Alaska", abrev: "AK" },
      { state: "Arizona", abrev: "AZ" },
      { state: "Arkansas", abrev: "AR" },
      { state: "California", abrev: "CA" },
      { state: "Colorado", abrev: "CO" },
      { state: "Connecticut", abrev: "CT" },
      { state: "Delaware", abrev: "DE" },
      { state: "Florida", abrev: "FL" },
      { state: "Georgia", abrev: "GA" },
      { state: "Hawaii", abrev: "HI" },
      { state: "Idaho", abrev: "ID" },
      { state: "Illinois", abrev: "IL" },
      { state: "Indiana", abrev: "IN" },
      { state: "Iowa", abrev: "IA" },
      { state: "Kansas", abrev: "KS" },
      { state: "Kentucky", abrev: "KY" },
      { state: "Louisiana", abrev: "LA" },
      { state: "Maine", abrev: "ME" },
      { state: "Maryland", abrev: "MD" },
      { state: "Massachusetts", abrev: "MA" },
      { state: "Michigan", abrev: "MI" },
      { state: "Minnesota", abrev: "MN" },
      { state: "Mississippi", abrev: "MS" },
      { state: "Missouri", abrev: "MO" },
      { state: "Montana", abrev: "MT" },
      { state: "Nebraska", abrev: "NE" },
      { state: "Nevada", abrev: "NV" },
      { state: "New Hampshire", abrev: "NH" },
      { state: "New Jersey", abrev: "NJ" },
      { state: "New Mexico", abrev: "NM" },
      { state: "New York", abrev: "NY" },
      { state: "North Carolina", abrev: "NC" },
      { state: "North Dakota", abrev: "ND" },
      { state: "Ohio", abrev: "OH" },
      { state: "Oklahoma", abrev: "OK" },
      { state: "Oregon", abrev: "OR" },
      { state: "Pennsylvania", abrev: "PA" },
      { state: "Rhode Island", abrv: "RI" },
      { state: "South Carolina", abrev: "SC" },
      { state: "South Dakota", abrev: "SD" },
      { state: "Tennessee", abrev: "TN" },
      { state: "Texas", abrev: "TX" },
      { state: "Utah", abrev: "UT" },
      { state: "Vermont", abrev: "VT" },
      { state: "Virginia", abrev: "VA" },
      { state: "Washington", abrev: "WA" },
      { state: "West Virginia", abrev: "WV" },
      { state: "Wisconsin", abrev: "WI" },
      { state: "Wyoming", abrev: "WY" },
    ];

    dispatch({
      type: SET_ALL_50_STATES,
      payload: all50States,
    });
  };

  const setStateChosen = (eValue) => {
    //take event value set stateChosenAbrev
    dispatch({
      type: SET_STATE_CHOSEN_ABREV,
      payload: eValue,
    });
  };

  //*set api 467 parks data with one request
  const setApi467Parks = async () => {
    //* Check if environment is in production
    if (process.env.NODE_ENV !== "production") {
      //* Set to personal key
      npsClientKey = process.env.REACT_APP_NPS_CLIENT_KEY;
    } else {
      //* In production
      //* Exposed key current solution found for netlify deployment
      npsClientKey = "HblXmfpFfyaKJxOGDSqUxOOuhs2EjqgGVdBPTQEH";
    }

    const res = await axios({
      method: "GET",
      url: `https://developer.nps.gov/api/v1/parks?limit=467&api_key=${npsClientKey}`,
      // headers: {
      //   "Content-Type": "application/json; charset=UTF-8",
      // },
    });

    // const res = await axios({
    //   method: "get",
    //   url: `https://developer.nps.gov/api/v1/parks?limit=467`,
    //   headers: {
    //     Authorization: `Bearer ${npsClientKey}`,
    //     "User-Agent": `${navigator.userAgent}`,
    //   },
    // });

    const apiData = res.data;
    const allParks = apiData.data;

    //* Set all parks data state
    dispatch({
      type: SET_ALL_PARKS_DATA,
      payload: allParks,
    });
  };

  //* finds all parks within chosen State
  const setAllParksWithinState = () => {
    const parksWithAbrev = [];

    //* filter data with stateAbrev
    state.all467ParksData.forEach((park) => {
      let parkStatesStr = park.states;

      //convert str "MA,TX,LA" into [MA, TX, LA];
      let parkStatesArr = parkStatesStr.split(",");

      //if ["CO", "KS", "MO", "NM", "OK"]  includes "CO"
      if (parkStatesArr.includes(state.stateChosenAbrev)) {
        parksWithAbrev.push(park);
      }
    });

    //* update state parksWithAbrev
    dispatch({
      type: SET_ALL_PARKS_WITHIN_STATE,
      payload: parksWithAbrev,
    });
  };

  //* <ParkSelect/> methods //
  //* set parkChosen park code
  const setParkChosenParkCode = (eValue) => {
    dispatch({
      type: SET_PARK_CHOSEN_PARK_CODE,
      payload: eValue,
    });
  };

  //* when onChange parkSelect set parkOption state to that option's index
  const setParkOptionIndexSelected = (parkOptionKey) => {
    dispatch({
      type: SET_PARK_OPTION_INDEX_SELECTED,
      payload: parkOptionKey,
    });
  };

  //* PARK PAGE
  //* Using parkCodeChosen, loop allParksWithinState and find and return that unique park obj;
  const setParkChosenData = (parkCode) => {
    const parkChosenDataArr = state.allParksWithinState.filter((parkObj) => {
      if (parkObj.parkCode === parkCode) {
        return parkObj;
      }
    });

    const parkChosenData = parkChosenDataArr[0];

    dispatch({
      type: SET_PARK_CHOSEN_DATA,
      payload: parkChosenData,
    });
  };

  return (
    <NpsContext.Provider
      value={{
        all50StatesArr: state.all50StatesArr,
        all467ParksData: state.all467ParksData,
        stateChosenAbrev: state.stateChosenAbrev,
        allParksWithinState: state.allParksWithinState,
        parkChosenParkCode: state.parkChosenParkCode,
        parkOptionIndexSelected: state.parkOptionIndexSelected,
        parkChosenData: state.parkChosenData,
        setAll50States,
        setStateChosen,
        setApi467Parks,
        setAllParksWithinState,
        setParkChosenParkCode,
        setParkOptionIndexSelected,
        setParkChosenData,
      }}
    >
      {props.children}
    </NpsContext.Provider>
  );
};

export default NpsState;
