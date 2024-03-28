import "./NewCardForm.css";
import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";

export function NewCardForm({ addDeckFn }) {
  const initialDeckSetting = {
    name: "",
    manufacturer: "",
    released: "",
    description: "",
    image: "",
    ownIt: false,
    dontHave: false,
  };
  const [newDeck, setNewDeck] = useState(initialDeckSetting);
  const [errorObj, setErrorObj] = useState({
    name: "",
    released: "",
    image: "",
    manufacturer: "",
    description: "",
  });
  function validateForm(newDeck) {
    console.log("triggering validation");
    let valid = true;
    if (!newDeck.name) {
      //set error obj deck prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          name: "The deck name is required",
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
    if (!newDeck.description) {
      //set description prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          description: "The description field is required",
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
        <div className={{ "form-group": true, error: errorObj.name }}>
          <label className="required" htmlFor="name">
            Deck Name{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newDeck.name}
            onChange={changeHandler}
            // onBlur sets error message - see button at bottom
            onBlur={() => {
              if (newDeck.name) {
                setErrorObj((prevErrorObj) => {
                  return {
                    ...prevErrorObj,
                    name: "",
                  };
                });
              }
            }}
          />
          {errorObj.name && (
            <>
              <br />
              {/* links to CSS for error message */}
              <small className="errorFeedback">{errorObj.name}</small>
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
        <div className={{ "form-group": true, error: errorObj.description }}>
          <label className="required" htmlFor="description">
            Description{" "}
          </label>
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
              <small className="errorFeedback">{errorObj.description}</small>
            </>
          )}
          <p className="tip">
            <b>TIP:</b>{" "}
            <i>Select and copy the text from the deck you want to duplicate.</i>
          </p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Do you "have it", or do you "need it"?</legend>
        <div className="form-group">
          <label htmlFor="ownIt">I own this one! </label>
          <input
            type="checkbox"
            name="ownIt"
            id="ownIt"
            onChange={changeHandler}
            value={newDeck.ownIt}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dontHave">I need this one! </label>
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
        // Prevents submit if fields are left empty
        disabled={
          errorObj.name ||
          errorObj.manufacturer ||
          errorObj.released ||
          errorObj.image ||
          errorObj.description
        }
      >
        Add Deck
      </button>
    </form>
  );
}
// links back to App.jsx file
NewCardForm.PropTypes = {
  addDeckFn: PropTypes.func.isRequired,
};
