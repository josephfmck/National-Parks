import React, { useRef, useEffect, useContext } from "react";
import NpsContext from "../../context/nps/npsContext";
import { Link } from "react-router-dom";

const Search = () => {
  //*Init context
  const npsContext = useContext(NpsContext);

  //* init useRef, for focus on first option everytime
  const parkSelectRef = useRef(null);

  //* EXEC WHEN COMPONENT LOADED
  useEffect(() => {
    console.log("rendering StateSelect");

    //* Set 50 states State
    npsContext.setAll50States();

    //sets parks data state
    npsContext.setApi467Parks();

    console.log(npsContext.all467ParksData);

    //*PARK
    if (npsContext.allParksWithinState.length > 0) {
      console.log(parkSelectRef);
      console.log(parkSelectRef.current.children[0]);

      //*reset select to 1st option
      parkSelectRef.current.selectedIndex = 0;

      //*set parkCode state to 1st park
      npsContext.setParkChosenParkCode(
        npsContext.allParksWithinState[0].parkCode
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [npsContext.allParksWithinState]);

  //* EVENTS
  const onChangeStateSelect = (e) => {
    npsContext.setStateChosen(e.target.value);
  };

  const handleStateBtnClick = async (e) => {
    e.preventDefault();

    //* set parks within state State
    npsContext.setAllParksWithinState();

    //? use later reset parkOptionIndexSelected
    npsContext.setParkOptionIndexSelected(0);

    //TODO make it select first option everytime
    //? ONCE CLICK THIS, reset <ParkSelect/>'s e.target.selectedIndex to 0
  };

  //* PARK
  const onChangeParkSelect = (e) => {
    e.preventDefault();

    //*set parkOptionSelectedIndex state to selected park option
    //* index of select option
    console.log(e.target);
    console.log(e.target.selectedIndex);

    //?use later
    npsContext.setParkOptionIndexSelected(e.target.selectedIndex);

    //*set parkCode state to chosen park option
    npsContext.setParkChosenParkCode(
      npsContext.allParksWithinState[e.target.selectedIndex].parkCode
    );
  };

  const onClickParkBtn = () => {
    npsContext.setParkChosenData(npsContext.parkChosenParkCode);
  };

  return (
    <section id='search-section'>
      <div className='container'>
        <div className='row'>
          <form id='search-form'>
            <label id='search-label' className='form-label mx-auto'>
              Find a National Park
            </label>

            <select
              id='search-selectTag'
              className='form-select my-5'
              onChange={onChangeStateSelect}
            >
              {/* <!--50 states options--> */}
              {npsContext.all50StatesArr.map(({ state, abrev }, index) => (
                <option key={index} value={abrev}>
                  {state}
                </option>
              ))}
            </select>
            <button
              className='btn btn-dark btn-lg search-btn'
              id='select-state-btn'
              onClick={handleStateBtnClick}
            >
              SELECT STATE
            </button>

            {/* PARK */}
            <select
              id='search-parks-selectTag'
              className='form-select my-5'
              onChange={onChangeParkSelect}
              ref={parkSelectRef}
            >
              {/* <!--Parks within state--> JSX*/}
              {npsContext.allParksWithinState.map(
                ({ name, parkCode }, index) => (
                  <option key={index} value={parkCode}>
                    {name}
                  </option>
                )
              )}
            </select>

            {/* remove underline from Link */}
            <Link
              to={`/park/${npsContext.parkChosenParkCode}`}
              style={{ textDecoration: "none" }}
            >
              <button
                className='btn btn-dark btn-lg search-btn'
                id='select-park-btn'
                onClick={onClickParkBtn}
              >
                FIND PARK
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
