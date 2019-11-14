import { CAR_INFORMATION, CAR_COVERAGE } from "../state/stateInsurance";

export const calculateQuotation = state => {
  let quotation = {
    basicPrice: state.quotationInfo.basicPrice,
    extraPrice: 0
  };

  switch (state[CAR_INFORMATION].carModel) {
    case "Audi - A3":
      quotation.basicPrice = 800;

      break;

    case "Toyota - Hilux":
      quotation.basicPrice = 700;

      break;

    case "Mitsubishi - Lancer":
      quotation.basicPrice = 450;
      break;

    case "Chevrolet - Cruze":
      quotation.basicPrice = 350;
      break;

    case "Peugeot - 308":
      quotation.basicPrice = 300;
      break;

    default:
      break;
  }

  if (state[CAR_INFORMATION].transmission === "Automatic") {
    quotation.basicPrice += 300;
  }

  if (state[CAR_INFORMATION].carYear) {
    quotation.basicPrice +=
      quotation.basicPrice * 0.2 * (state[CAR_INFORMATION].carYear - 2014);
  }

  if (state[CAR_INFORMATION].dailyCommute) {
    quotation.basicPrice += state[CAR_INFORMATION].dailyCommute * 2;
  }

  if (state[CAR_INFORMATION].businessPurpose === "Yes") {
    quotation.basicPrice += quotation.basicPrice * 0.4;
  }

  if (
    state[CAR_COVERAGE].carCoverage &&
    state[CAR_COVERAGE].carCoverage.collisionCoverage === true
  ) {
    quotation.extraPrice += quotation.basicPrice * 0.35;
  }

  if (
    state[CAR_COVERAGE].carCoverage &&
    state[CAR_COVERAGE].carCoverage.comprehensive === true
  ) {
    quotation.extraPrice += quotation.basicPrice * 0.23;
  }

  if (
    state[CAR_COVERAGE].carCoverage &&
    state[CAR_COVERAGE].carCoverage.uninsurancedMotoristDamage === true
  ) {
    quotation.extraPrice += quotation.basicPrice * 0.25;
  }

  if (
    state[CAR_COVERAGE].carCoverage &&
    state[CAR_COVERAGE].carCoverage.medicalPayments === true
  ) {
    quotation.extraPrice += quotation.basicPrice * 0.48;
  }

  if (
    state[CAR_COVERAGE].carCoverage &&
    state[CAR_COVERAGE].carCoverage.personalInjuryProtection === true
  ) {
    quotation.extraPrice += quotation.basicPrice * 0.25;
  }

  if (state[CAR_COVERAGE].policyTime) {
    quotation.basicPrice *= state[CAR_COVERAGE].policyTime;
    quotation.extraPrice *= state[CAR_COVERAGE].policyTime;
  }

  return {
    ...quotation,
    basicPrice: Math.round(quotation.basicPrice),
    extraPrice: Math.round(quotation.extraPrice)
  };
};

export const getSafe = (fn, defaultVal) => {
  try {
    return fn() ? fn() : defaultVal
  } catch (e) {
    return defaultVal;
  }
};

export const isNotEmpty = column => {
  return Array.isArray(column.fieldNames) && column.fieldNames.length;
};

export const getField = (state, fieldName) => {
  return state.dataDefinition.dataDefinitionFields.find(
    field => field.name === fieldName
  );
};

export const getFieldType = (state, fieldName) => {
  return getField(state, fieldName).fieldType;
};

export const getFieldOptions = (state, fieldName) => {
  return getSafe(() =>
    getField(state, fieldName).customProperties.options.en_US.map(
      option => option
    )
  );
};

export const isFieldRequired = (state, fieldName) => {
  return getField(state, fieldName).required;
};

export const getLabel = (state, fieldName) => {
  let label = getField(state, fieldName).label.en_US;

  if (!label) {
    return "";
  } else {
    return label;
  }
};

export const layoutVisitor = (state, pageName, apply) => {
  return getSafe(() =>
    state.dataLayout.dataLayoutPages
      .find(page => page.title.en_US === pageName)
      .dataLayoutRows.map((row, i) =>
        row.dataLayoutColumns.map((column, j) => apply(row, i, column, j))
      )
  );
};

export const verifyRequired = (state, pageName) => {
  let newEmptyFields = [...state.emptyFields];

  layoutVisitor(state, pageName, (row, i, column, j) => {
    isFieldRequired(column.fieldNames[0]) &&
    !state[pageName][column.fieldNames[0]]
      ? (newEmptyFields = newEmptyFields.concat(column.fieldNames[0]))
      : (newEmptyFields = newEmptyFields.filter(
          item => item !== column.fieldNames[0]
        ));
  });

  return newEmptyFields;
};
