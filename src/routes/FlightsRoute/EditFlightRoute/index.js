import React, {useState, useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {FlightForm, HorizontalSeparator} from "../../../styles/formStyles";
import { AppStateContextStore } from '../../../contexts/AppStateContext';
import {
  CommentControl,
  FlightDateControl,
  FlightLengthControl, LabelControl,
  PersonNameControl,
  SubmitControl
} from "../../../components/form/formParts";
import {mExceptions} from "../../../modules/Exceptions";
import {printContent} from "../../../utilities/printContent";
import {
  generateFlight,
  flightOptions,
  editModes,
  newEntityId,
  generateEditFlightUiState,
  flightStates, flightMinutePrice
} from "../../../const/flights";
import {updateNestedStateProperty} from "../../../utilities/updateNestedProperty";
import {CertificateFlightSubForm} from "./CertificateFlightState";

const preSetFlightHook = (flight) => {
  let optionsTime = 0;
  let optionsPrice = 0;
  Object.keys(flight.options)
    .forEach(optionKey => {
      if (flight.options[optionKey]) {
        optionsTime  += flightOptions[optionKey].time;
        optionsPrice += flightOptions[optionKey].price;
      }
    });

  flight.time.options   = optionsTime;
  flight.time.total     = flight.time.basic + flight.time.options;

  flight.price.options  = optionsPrice;
  flight.price.basic    = flight.time.basic * flightMinutePrice;
  flight.price.total    = flight.price.basic + flight.price.options;
  flight.price.discount = flight.price.total / 100 * flight.price.discountPercent;
  flight.price.final    = flight.price.total - flight.price.discount;
};



export const EditFlightRoute = () => {

  // Get certificate id = newEntityId / existing
  const { flightId } = useParams();
  const [ uiState, setUiState ] = useState(generateEditFlightUiState({ editMode: null }));
  const [ flight, setFlight   ] = useState({});
  const [ partnerOptions, setPartnerOptions   ] = useState([]);

  const updateFlightProperty = (path, newValue) =>
    updateNestedStateProperty(path, newValue, flight, setFlight, preSetFlightHook);

  const updateUiProperty = (path, newValue) =>
    updateNestedStateProperty(path, newValue, uiState, setUiState);

  const { api } = useContext(AppStateContextStore);

  useEffect(() => {
    (async () => {
      updateUiProperty('loading', true);
      const partnerOptionsResult = await api.listPartners();
      if (mExceptions.isAny(partnerOptionsResult)) {
        updateUiProperty('failed', partnerOptionsResult.key);
        return;
      }
      setPartnerOptions(partnerOptionsResult.data.partners);

      if (flightId === newEntityId) {
        const newFlight = generateFlight({  });
        preSetFlightHook(newFlight);
        setFlight(newFlight);
      } else {
          const existingFlight = await api.getFlight(flightId);
          if (mExceptions.isAny(existingFlight)) {
            updateUiProperty('failed', existingFlight.key);
            return;
          }
          setFlight(existingFlight.data);
      }
      updateUiProperty('loading', false);
    })();
  }, []);


  const onSubmit = async () => {
    updateUiProperty('loading', true);
    const result = await api.editFlight(flight);
    console.log('=>', result);
    updateUiProperty('loading', false);
    if (mExceptions.isAny(result)) {
      updateUiProperty('failed', result.key);
      return;
    }
    setFlight(result.data);
    updateUiProperty('saved', true);
    // print(result.data.certificateId);
  };

  // const print = (certificateId) => {
  //   // Set up custom markup here:
  //   printContent(certificateId);
  // };

  if (uiState.loading) {
    return <div>Загрузка</div>;
  }

  if (uiState.failed) {
    return <div>Ошибка: {uiState.failed}</div>;
  }

  return (
    <FlightForm>

      <CertificateFlightSubForm { ...{flight, updateFlightProperty, partnerOptions} } />

      <HorizontalSeparator />

      { !uiState.saved && <SubmitControl label='Сохранить' onSubmit={onSubmit} /> }
      { uiState.saved && (
        <>
          <LabelControl label='Идентификатор нового сертификата' value={flight.certificateId} />
          <SubmitControl label='Печатать' onSubmit={()=>{}} />
        </>
      ) }

    </FlightForm>
  );
};
