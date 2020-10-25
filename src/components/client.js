import {
  BASIC_INFO,
  CAR_INFORMATION,
  CAR_COVERAGE,
} from "../state/stateInsurance";

const host = "http://localhost:8080";
const endpoint = `${host}/o/data-engine/v2.0`;
const username = "test@liferay.com";
const password = "test";
const siteId = 20123;

const base64 = require("base-64");

export const getDataDefinitionsBySiteId = () => {
  return fetch(
    `${endpoint}/sites/${siteId}/data-definitions/by-content-type/app-builder?page=&pageSize=`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((body) => body.items);
};

export const getDataDefinitionByKey = (dataDefinitionKey) => {
  return fetch(
    `${endpoint}/sites/${siteId}/data-definitions/${dataDefinitionKey}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

export const postDataDefinition = (dataDefinition) => {
  return fetch(`${endpoint}/sites/${siteId}/data-definitions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Basic " + base64.encode(username + ":" + password),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataDefinition),
  }).then((res) => res.json());
};

export const postDataLayout = (dataDefinitionId, dataLayout) => {
  return fetch(
    `${endpoint}/data-definitions/${dataDefinitionId}/data-layouts`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataLayout),
    }
  ).then((res) => res.json());
};

export const getDataLayoutByKey = (dataLayoutKey) => {
  return fetch(`${endpoint}/sites/${siteId}/data-layouts/${dataLayoutKey}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Basic " + base64.encode(username + ":" + password),
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getDataRecordCollections = (dataDefinitionId, collectionName) => {
  return fetch(
    `${endpoint}/data-definitions/${dataDefinitionId}/data-record-collections?keywords=${collectionName}&page=&pageSize=`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

export const getDataRecordCollectionDataRecordsPage = (
  dataRecordCollectionId
) => {
  return fetch(
    `${endpoint}/data-record-collections/${dataRecordCollectionId}/data-records?page=1&pageSize=100`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((body) => body.items);
};

export const postDataRecord = (dataRecordCollectionId, dataRecord) => {
  return fetch(
    `${endpoint}/data-record-collections/${dataRecordCollectionId}/data-records`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRecord),
    }
  ).then((res) => res.json());
};

export const postDataRecordCollection = (dataDefinitionId, collectionName) => {
  const dataRecordCollection = {
    dataDefinitionId: dataDefinitionId,
    name: {
      value: collectionName,
    },
  };

  return fetch(
    `${endpoint}/data-definitions/${dataDefinitionId}/data-record-collections`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + base64.encode(username + ":" + password),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRecordCollection),
    }
  ).then((res) => res.json());
};

export const saveRecord = (state, dataRecordCollectionId) => {
  let dataRecord = {
    dataRecordValues: {},
  };

  const getFieldType = (fieldName) => {
    return state.dataDefinition.dataDefinitionFields.find(
      (field) => field.name === fieldName
    ).fieldType;
  };

  const putOption = (option, field) => {
    if (!dataRecord.dataRecordValues[field[0]]) {
      dataRecord.dataRecordValues[field[0]] = [];
    }
    dataRecord.dataRecordValues[field[0]].push(option[0]);
  };

  const putProperty = (field) => {
    Object.entries(field[1]).forEach((option) => {
      if (option[1] === true) putOption(option, field);
    });
  };

  let fields = Object.entries(state[BASIC_INFO]);
  fields.push(...Object.entries(state[CAR_INFORMATION]));
  fields.push(...Object.entries(state[CAR_COVERAGE]));

  fields.push([
    "finalQuotation",
    state.quotationInfo.basicPrice + state.quotationInfo.extraPrice,
  ]);

  fields.forEach((field) => {
    getFieldType(field[0]) === "checkbox_multiple"
      ? putProperty(field)
      : (dataRecord.dataRecordValues[field[0]] = field[1]);
  });

  postDataRecord(dataRecordCollectionId, dataRecord);
};
