import React from 'react';
import Fields from '../../fieldComponents/Fields';
import { CAR_COVERAGE, useStateValue } from '../../../state/stateInsurance';
import ButtonIns from '../../basicComponents/ButtonIns';

const StepCarCoverage = () => {

    const { state, dispatch } = useStateValue();

    const handleClickBack = () => {
        dispatch({
            type: "updateProperty",
            property: "activeStep",
            newValue: 2
        });
    }

    return ( 
        <>
        <Fields pageName={CAR_COVERAGE} />

        <ButtonIns label="Back" handleClick={handleClickBack} />

        <ButtonIns label="Finish"/>

        </>
     );
}
 
export default StepCarCoverage;