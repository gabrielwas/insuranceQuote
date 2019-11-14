import { createContext, useContext } from "react";

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
  switch (action.type) {
    case "nextStep":
      return {
        ...state,
        activeStep: state.activeStep + 1
      };

    case "updateBasicInfo":
      return {
        ...state,
        [BASIC_INFO]: { ...state[BASIC_INFO], [action.fieldName]: action.info }
      };

    case "updateProperty":
      return {
        ...state,
        [action.property]: action.newValue
      };

    default:
      break;
  }
};
