import { useState } from "react";
import "./AlpacaForm.css";

export function AlpacaForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    street: "",
    town: "",
    state: "Iowa",
    country: "",
    colors: [],
  };
  const states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming",
  ];
  const [formObject, setFormObject] = useState(initialFormData);
  const [errorObject, setErrorObject] = useState({
    firstName: "",
    lastName: "",
  });
  function validateAll() {
    validateFirstName();
    validateLastName();
  }
  function validateFirstName() {
    if (!formObject.firstName) {
      setErrorObject((prevErrorObject) => {
        return {
          ...prevErrorObject,
          firstName: "This field is required",
        };
      });
    } else {
      setErrorObject((prevErrorObject) => {
        return {
          ...prevErrorObject,
          firstName: "",
        };
      });
    }
  }
  function validateLastName() {
    if (!formObject.lastName) {
      // set error object
      setErrorObject((prevErrorObject) => {
        return {
          ...prevErrorObject,
          lastName: "This field cannot be empty",
        };
      });
    } else {
      //clear error object
      setErrorObject((prevErrorObject) => {
        return {
          ...prevErrorObject,
          lastName: "",
        };
      });
    }
  }

  function changeHandler(event) {
    console.log(event.target.value);
    if (event.target.name === "colors") {
      const colorName = event.target.id;
      if (formObject.colors.includes(colorName)) {
        setFormObject({
          ...formObject,
          colors: formObject.colors.filter((color) => color !== colorName),
        });
      } else {
        setFormObject({
          ...formObject,
          colors: [...formObject.colors, colorName],
        });
      }
    } else {
      setFormObject((previousForm) => {
        console.log(event.target.name);

        return {
          ...previousForm,
          [event.target.name]: event.target.value,
        };
      });
    }
  }
  function handleSubmit(event) {
    console.log("submit triggered");
    validateAll();
    if (!errorObject.firstName && !errorObject.lastName) {
      // submit form
    }
    event.preventDefault();
    console.log("the whole form object", formObject);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formgroup">
            <label className="required" htmlFor="firstname">
              First Name{" "}
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formObject.firstName}
              onChange={changeHandler}
              onBlur={() => {
                validateFirstName();
              }}
            />
            {errorObject.firstName && (
              <>
                <br />
                <span className="error">{errorObject.firstName}</span>
              </>
            )}
          </div>
          <div className="formgroup">
            <label className="required" htmlFor="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formObject.lastName}
              onChange={changeHandler}
              onBlur={validateLastName}
            />
            {errorObject.lastName && (
              <>
                <br />
                <span className="error">{errorObject.lastName}</span>
              </>
            )}
          </div>
          <div className="formgroup">
            <label htmlFor="street">Street Address </label>
            <input
              type="text"
              name="street"
              id="street"
              value={formObject.street}
              onChange={changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="town">Town </label>
            <input
              type="text"
              name="town"
              id="town"
              value={formObject.town}
              onChange={changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="state">State </label>
            <select
              name="state"
              id="state"
              value={formObject.state}
              onChange={changeHandler}
            >
              {states.map((singleState, index) => {
                return (
                  <option key={index} value={singleState}>
                    {singleState}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="formgroup">
            <label htmlFor="country">Country </label>
            <input
              type="text"
              name="country"
              id="country"
              value={formObject.country}
              onChange={changeHandler}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Favorite Alpaca Colors</legend>
          <div className="formgroup">
            <label htmlFor="brown">
              <input
                type="checkbox"
                name="colors"
                id="brown"
                checked={formObject.colors.includes("brown")}
                onChange={changeHandler}
              />
              Brown
            </label>
            <label htmlFor="black">
              <input
                type="checkbox"
                name="colors"
                id="black"
                checked={formObject.colors.includes("black")}
                onChange={changeHandler}
              />
              Black
            </label>
            <label htmlFor="beige">
              <input
                type="checkbox"
                name="colors"
                id="beige"
                checked={formObject.colors.includes("beige")}
                onChange={changeHandler}
              />
              Beige
            </label>
            <label htmlFor="pinto">
              <input
                type="checkbox"
                name="colors"
                id="pinto"
                checked={formObject.colors.includes("pinto")}
                onChange={changeHandler}
              />
              Pinto
            </label>
          </div>
        </fieldset>
        <button
          type="submit"
          disabled={errorObject.firstName || errorObject.passwrd}
        >
          Sign me up
        </button>
      </form>
    </>
  );
}
