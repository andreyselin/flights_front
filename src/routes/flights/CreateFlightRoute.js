import React, {useState, useContext, useEffect} from "react";
import {FlightForm} from "../../styles/formStyles";

import { AppStateContextStore } from '../../contexts/AppStateContext';
import {
  CommentControl,
  FlightDateControl,
  FlightLengthControl, LabelControl,
  PersonNameControl,
  SubmitControl
} from "../../components/form/formParts";
import {mExceptions} from "../../modules/Exceptions";
import {printContent} from "../../utilities/printContent";

const routeModes = {
  createCertificate: 'createCertificate',
  createImmediate:   'createImmediate',
  editCertificate:   'createImmediate',

};

// Used to:
// - create certificate
// - create immediate flight
//
export const CreateFlightRoute = () => {
  // Get certificate id = newEntityId / existing

  const { api } = useContext(AppStateContextStore);
  const [ saved   , setSaved    ] = useState(false);
  const [ failed  , setFailed   ] = useState(false);
  const [ printed , setPrinted  ] = useState(false);
  const [ loading , setLoading  ] = useState(false);

  // Logical part
  const [ flightLength , setFlightLength ] = useState(30);
  const [ personName   , setPersonName   ] = useState('');
  const [ flightDate   , setFlightDate   ] = useState('');
  const [ comment      , setComment      ] = useState('');

  // After saving:
  const [ certificateId, setCertificateId ] = useState(null);

  const onSubmit = async () => {
    setLoading(true);
    const params = { flightLength, personName, flightDate, comment };
    const result = await api.createCertificate(params);
    console.log('=>', result);
    setLoading(false);
    if (mExceptions.isAny(result)) {
      setFailed(result);
      return;
    }
    setCertificateId(result.data.certificateId);
    setSaved(true);
    print(result.data.certificateId);
  };

  const print = (certificateId) => {
    // Set up custom markup here:
    printContent(certificateId);
  };

  if (loading) {
    return <div>Загрузка</div>;
  }

  return (
    <FlightForm>
      <PersonNameControl   { ...{ personName,   setPersonName   } } />
      <FlightDateControl   { ...{ flightDate,   setFlightDate   } } />
      <FlightLengthControl { ...{ flightLength, setFlightLength } } />
      <CommentControl      { ...{ comment,      setComment      } } />

      { !saved && <SubmitControl label='Сохранить' onSubmit={onSubmit} /> }
      { saved && (
        <>
          <LabelControl label='Идентификатор нового сертификата' value={certificateId} />
          <SubmitControl label='Печатать' onSubmit={print} />
        </>
      ) }

    </FlightForm>
  );
};
