import { createContext, useContext } from "react";
import { calculateQuotation, layoutVisitor } from "../components/util";

export const BASIC_INFO = "basicInfo";
export const CAR_INFORMATION = "carInformation";
export const CAR_COVERAGE = "carCoverage";

export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

export const initialState = {
  dataDefinitionKey: "InsuranceForm",
  dataLayoutKey: "InsuranceForm",

  activeStep: 1,

  [BASIC_INFO]: {},
  [CAR_INFORMATION]: {},
  [CAR_COVERAGE]: {},

  quotationInfo: {
    basicPrice: 0,
    extraPrice: 0
  },

  emptyFields: []
};

export const reducer = (state, action) => {
  let newState;

  const isRequired = fieldName => {
    return state.dataDefinition.dataDefinitionFields.find(
      field => field.name === fieldName
    ).required;
  };

  const verifyRequired = pageName => {
    let newEmptyFields = [...state.emptyFields];

    layoutVisitor(state, pageName, (row, i, column, j) => {
      isRequired(column.fieldNames[0]) && !state[pageName][column.fieldNames[0]]
        ? (newEmptyFields = newEmptyFields.concat(column.fieldNames[0]))
        : (newEmptyFields = newEmptyFields.filter(
            item => item !== column.fieldNames[0]
          ));
    });

    return newEmptyFields;
  };

  switch (action.type) {
    case "nextStep":
      let newEmptyFields = verifyRequired(BASIC_INFO);

      return newEmptyFields.length === 0
        ? {
            ...state,
            activeStep: state.activeStep + 1
          }
        : {
            ...state,
            emptyFields: newEmptyFields
          };

    case "updateBasicInfo":
      return {
        ...state,
        [BASIC_INFO]: { ...state[BASIC_INFO], [action.fieldName]: action.info }
      };

    case "updateCarInformation":
      newState = {
        ...state,
        [CAR_INFORMATION]: {
          ...state[CAR_INFORMATION],
          [action.fieldName]: action.info
        }
      };

      newState = {
        ...newState,
        quotationInfo: calculateQuotation(newState)
      };

      return newState;

    case "updateCarCoverage":
      newState = action.parentFieldName
        ? {
            ...state,
            [CAR_COVERAGE]: {
              ...state[CAR_COVERAGE],
              [action.parentFieldName]: {
                ...state[CAR_COVERAGE][action.parentFieldName],
                [action.childFieldName]: action.info
              }
            }
          }
        : {
            ...state,
            [CAR_COVERAGE]: {
              ...state[CAR_COVERAGE],
              [action.fieldName]: action.info
            }
          };

      newState = {
        ...newState,
        quotationInfo: calculateQuotation(newState)
      };

      return newState;

    case "updateProperty":
      return {
        ...state,
        [action.property]: action.newValue
      };

    default:
      break;
  }
};
