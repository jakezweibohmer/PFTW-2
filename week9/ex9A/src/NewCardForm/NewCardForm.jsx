import "./NewCardForm.css";
import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";

export function NewCardForm({ addDeckFn }) {
  const initialDeckSetting = {
    deck: "",
    manufacturer: "",
    released: "",
    description: "",
    image: "",
    ownIt: false,
    dontHave: false,
  };
  const [newDeck, setNewDeck] = useState(initialDeckSetting);
  const [errorObj, setErrorObj] = useState({
    deck: "",
    image: "",
    manufacturer: "",
  });
  function validateForm(newDeck) {
    console.log("triggering validation");
    let valid = true;
    if (!newDeck.deck) {
      //set error obj deck prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          deck: "The deck name is required",
        };
      });
      valid = false;
    }
    if (!newDeck.manufacturer) {
      //set manufacturer prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          manufacturer: "The manufacturer name is required",
        };
      });
      valid = false;
    }
    if (!newDeck.released) {
      //set released prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          released: "The release year is required",
        };
      });
      valid = false;
    }
    if (!newDeck.image) {
      //set image prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          image: "The image field is required",
        };
      });
      valid = false;
    }
    console.log(valid);
    return valid;
  }

  function changeHandler(event) {
    if (event.target.name === "colors") {
      // figure
    } else {
      const needsBoolean = ["ownIt", "dontHave"];
      const updatedTarget = needsBoolean.includes(event.target.id)
        ? !!event.target.value
        : event.target.value;
      setNewDeck((prevDeck) => {
        return {
          ...prevDeck,
          [event.target.name]: updatedTarget,
        };
      });
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log({ newDeck });
    if (validateForm(newDeck)) {
      //send deck to App
      addDeckFn(newDeck);
      //reset values
      setNewDeck(initialDeckSetting);
    }
  }
  return (
    <form className="new-card-form-wrapper" onSubmit={submitHandler}>
      <fieldset>
        <legend>Card Details</legend>
        <div className={{ "form-group": true, error: errorObj.deck }}>
          <label className="required" htmlFor="deck">
            Deck Name{" "}
          </label>
          <input
            type="text"
            name="deck"
            id="deck"
            value={newDeck.deck}
            onChange={changeHandler}
            onBlur={() => {
              if (newDeck.deck) {
                setErrorObj((prevErrorObj) => {
                  return {
                    ...prevErrorObj,
                    deck: "",
                  };
                });
              }
            }}
          />
          {errorObj.deck && (
            <>
              <br />
              <small className="errorFeedback">{errorObj.deck}</small>
            </>
          )}
        </div>
        <div className={{ "form-group": true, error: errorObj.manufacturer }}>
          <label className="required" htmlFor="manufacturer">
            Manufacturer{" "}
          </label>
          <input
            type="text"
            name="manufacturer"
            id="manufacturer"
            onChange={changeHandler}
            value={newDeck.manufacturer}
            onBlur={() => {
              if (newDeck.manufacturer) {
                setErrorObj((prevErrorObj) => {
                  return {
                    ...prevErrorObj,
                    manufacturer: "",
                  };
                });
              }
            }}
          />
          {errorObj.manufacturer && (
            <>
              <br />
              <small className="errorFeedback">{errorObj.manufacturer}</small>
            </>
          )}
        </div>
        <div className={{ "form-group": true, error: errorObj.released }}>
          <label className="required" htmlFor="released">
            Year Released{" "}
          </label>
          <input
            type="text"
            name="released"
            id="released"
            onChange={changeHandler}
            value={newDeck.released}
            onBlur={() => {
              if (newDeck.released) {
                setErrorObj((prevErrorObj) => {
                  return {
                    ...prevErrorObj,
                    released: "",
                  };
                });
              }
            }}
          />
          {errorObj.released && (
            <>
              <br />
              <small className="errorFeedback">{errorObj.released}</small>
            </>
          )}
        </div>
        <div className={{ "form-group": true, error: errorObj.image }}>
          <label className="required" htmlFor="image">
            Image URL{" "}
          </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={changeHandler}
            value={newDeck.image}
            onBlur={() => {
              if (newDeck.image) {
                setErrorObj((prevErrorObj) => {
                  return {
                    ...prevErrorObj,
                    image: "",
                  };
                });
              }
            }}
          />
          {errorObj.image && (
            <>
              <br />
              <small className="errorFeedback">{errorObj.image}</small>
            </>
          )}
        </div>
        <div className="formgroup">
          <label htmlFor="description">Description </label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={changeHandler}
            value={newDeck.description}
            onBlur={() => {
              if (newDeck.description) {
                setErrorObj((prevErrorObj) => {
                  return {
                    ...prevErrorObj,
                    description: "",
                  };
                });
              }
            }}
          />
          {errorObj.description && (
            <>
              <br />
              <small>{errorObj.description}</small>
            </>
          )}
        </div>
      </fieldset>
      <fieldset>
        <legend>Collection Details</legend>
        <div className="form-group">
          <label htmlFor="ownIt">I own this one </label>
          <input
            type="checkbox"
            name="ownIt"
            id="ownIt"
            onChange={changeHandler}
            value={newDeck.ownIt}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dontHave">I need this one </label>
          <input
            type="checkbox"
            name="dontHave"
            id="dontHave"
            onChange={changeHandler}
            value={newDeck.dontHave}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={
          errorObj.deck ||
          errorObj.manufacturer ||
          errorObj.released ||
          errorObj.image
        }
      >
        Add Deck
      </button>
    </form>
  );
}

NewCardForm.PropTypes = {
  addDeckFn: PropTypes.func.isRequired,
};
