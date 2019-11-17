import React, { useState, useEffect } from "react";
import QuotesTable from "./QuotesTable";
import { useStateValue } from "../../../state/stateInsurance";
import {
  getDataRecordCollectionDataRecordsPage,
  getDataRecordCollections
} from "../../client";

const Quotes = () => {
  const { state } = useStateValue();

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const recordsByCollection = collection => {
      getDataRecordCollectionDataRecordsPage(collection.id).then(items => {
        if (items) {
          collection.records = items;
          setCollections(prevCollections => prevCollections.concat(collection));
        }
      });
    };

    getDataRecordCollections(state.dataDefinition.id, "").then(page => {
      if (page.items) {
        page.items.forEach(collection => recordsByCollection(collection));
      }
    });
  }, [state.dataDefinition.id]);

  return (
    <>
      {collections.map(collection => (
        <QuotesTable
          dataRecords={collection.records}
          collectionName={collection.name.en_US}
          key={collection.name.en_US}
        />
      ))}
    </>
  );
};

export default Quotes;
