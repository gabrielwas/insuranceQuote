import React from "react";
import Fields from "../../fieldComponents/Fields";
import {
  CAR_COVERAGE,
  useStateValue,
  BASIC_INFO
} from "../../../state/stateInsurance";
import ButtonIns from "../../basicComponents/ButtonIns";
import {
  getDataRecordCollections,
  saveRecord,
  postDataRecordCollection
} from "../../client";
import { getSafe } from "../../util";
import SnackBarInsurance from "../../basicComponents/SnackBarInsurance";

const StepCarCoverage = () => {
  const { state, dispatch } = useStateValue();

  const [open, setOpen] = React.useState(false);

  const handleClickBack = () => {
    dispatch({
      type: "updateProperty",
      property: "activeStep",
      newValue: 2
    });
  };

  const getCollectionName = () => {
    return getSafe(() => state[BASIC_INFO].country, "DefaultCollection");
  };

  const saveDataCollectionAndRecord = () => {
    postDataRecordCollection(
      state.dataDefinition.id,
      getCollectionName()
    ).then(dataRecordCollection => saveRecord(state, dataRecordCollection.id));
  };

  const handleClickFinish = () => {
    getDataRecordCollections(
      state.dataDefinition.id,
      getCollectionName()
    ).then(page =>
      page.items
        ? saveRecord(state, page.items[0].id)
        : saveDataCollectionAndRecord()
    );

    setOpen(true);
  };

  return (
    <>
      <Fields pageName={CAR_COVERAGE} />

      <ButtonIns label="Back" handleClick={handleClickBack} />

      <ButtonIns label="Finish" handleClick={handleClickFinish} />

      <SnackBarInsurance open={open} setOpen={setOpen} />
    </>
  );
};

export default StepCarCoverage;
