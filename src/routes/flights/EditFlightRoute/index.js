import React, {useState, useContext, useEffect} from "react";
import {useParams, useHistory } from "react-router-dom";
import {FlightForm, HorizontalSeparator} from "../../../styles/formStyles";
import { AppStateContextStore } from '../../../contexts/AppStateContext';
import {
  CommentControl,
  FlightDateControl, FlightDiscountControl,
  FlightLengthControl, FlightOptionsControl, FlightStatusControl, LabelControl, PartnerControl,
  PersonNameControl, PersonPhoneControl,
  SubmitControl
} from "../../../components/form/formParts";
import {mExceptions} from "../../../modules/Exceptions";
// import {printContent} from "../../../utilities/printContent";
import {
  prepareFlight, flightOptions, newEntityId,
  generateEditFlightUiState, flightMinutePrice
} from "../../../const/flights";
import {updateNestedStateProperty} from "../../../utilities/updateNestedProperty";
import {PageHeader} from "../../../styles/pageStyles";
import {withLeadingNull} from "../../../utilities";
import {toast} from "react-toastify";

const preSetFlightHook = (flight) => {
  let optionsTime = 0;
  let optionsPrice = 0;
  Object.keys(flight.options)
    .forEach(optionKey => {
      if (flight.options[optionKey]) {
        optionsTime  += flightOptions[optionKey].flightLength;
        optionsPrice += flightOptions[optionKey].price;
      }
    });

  // Flight length
  flight.flightLength.options   = optionsTime;
  flight.flightLength.total     = flight.flightLength.basic + flight.flightLength.options;

  // dateFrom
  const dateFrom = new Date(flight.tmp.datePickerDate.getTime());
  dateFrom.setHours(parseInt(flight.tmp.hours));
  dateFrom.setMinutes(parseInt(flight.tmp.minutes));

  // dateTo
  const dateTo = new Date(dateFrom.getTime());
  dateTo.setMinutes(dateFrom.getMinutes() + flight.flightLength.total);

  flight.dateFrom = dateFrom;
  flight.dateTo = dateTo;

  // Price
  flight.price.options  = optionsPrice;
  flight.price.basic    = flight.flightLength.basic * flightMinutePrice;
  flight.price.total    = flight.price.basic + flight.price.options;
  flight.price.discount = flight.price.total / 100 * flight.price.discountPercent;
  flight.price.final    = flight.price.total - flight.price.discount;
};



export const EditFlightRoute = () => {

  const history = useHistory();

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
      const thePartnerOptions = partnerOptionsResult.data.items;
      setPartnerOptions(thePartnerOptions);

      if (flightId === newEntityId) {
        const newFlight = prepareFlight(
            { partnerId: thePartnerOptions[0]._id },
            {});
        preSetFlightHook(newFlight);
        setFlight(newFlight);
      } else {
        const existingFlightResult = await api.getFlight({_id: flightId});
        if (mExceptions.isAny(existingFlightResult)) {
          updateUiProperty('failed', existingFlightResult.key);
          return;
        }
        const existingFlight = prepareFlight(
          { partnerId: thePartnerOptions[0]._id },
          existingFlightResult.data.flight);

        console.log('===>', existingFlight);

        preSetFlightHook(existingFlight);
        setFlight(existingFlight);
      }
      updateUiProperty('loading', false);
    })();
  }, [ ]);

  const gotoList = () => history.push('/flights/list');
  const gotoCreate = () => history.push(`/flights/edit/${newEntityId}`);

  const onSubmit = async () => {
    updateUiProperty('loading', true);
    const result = flightId === newEntityId
      ? await api.createFlight({ flight })
      : await api.editFlight({ flight });

    history.push(`/flights/edit/${result.data.flight._id}`);
    updateUiProperty('loading', false);
    if (mExceptions.isAny(result)) {
      toast.error("Ошибка. Информация не сохранена");
      updateUiProperty('failed', result.key);
      return;
    }
    toast.success("Сохранение выполнено");





    // setFlight(result.data.flight);
    updateUiProperty('saved', true);
  };

  // const print = (certificateId) => {
  //   // Set up custom markup here:
  //   printContent(certificateId);
  // };

  const controlProps = { flight, updateFlightProperty };


  if (uiState.loading) {
    return <div>Загрузка</div>;
  }

  if (uiState.failed) {
    return <div>Ошибка: {uiState.failed}</div>;
  }

  return (
    <FlightForm>


      <>
        <PageHeader>Создать сертификат</PageHeader>
        <HorizontalSeparator />
        <div>
          <button onClick={()=>gotoList()}>К списку</button>
          &nbsp;
          <button onClick={()=>gotoCreate()}>Создать</button>
        </div>
        <HorizontalSeparator />
        <div className={'formSection'}>
          <div className={'formBlock'}>
            <PartnerControl       { ...controlProps } partnerOptions={partnerOptions} />
            <PersonNameControl    { ...controlProps } />
            <PersonPhoneControl   { ...controlProps } />
            <CommentControl       { ...controlProps } />
          </div>
          <div className='formBlock'>
            <FlightDateControl    { ...controlProps } />
            <FlightLengthControl  { ...controlProps } />
            <FlightOptionsControl { ...controlProps } />
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '15px' }}>
                <LabelControl label='Итоговое время' value={`${flight.flightLength.total} мин.`} />
              </div>

              <LabelControl label='Заканчивается в'
                          value={`${withLeadingNull(flight.dateTo.getHours())}:${withLeadingNull(flight.dateTo.getMinutes())}`} />
            </div>
          </div>
        </div>
        <HorizontalSeparator />
        <div className={'formSection'}>
          <div className={'formBlock'}>
            <FlightDiscountControl  { ...controlProps } />
            <LabelControl label='Итоговая цена'  value={`${flight.price.final} тг.`} />
          </div>
          <div className={'formBlock'}>
            <FlightStatusControl  { ...controlProps } />
          </div>
        </div>
        <HorizontalSeparator />
        <div className={'formSection'}>
          <div className={'formBlock'}>
          </div>
          <div className={'formBlock'}>
            {/* */}
          </div>
        </div>
      </>

      <HorizontalSeparator />

{/*
      { !uiState.saved && <SubmitControl label='Сохранить' onSubmit={onSubmit} /> }
      { uiState.saved && (
        <>
          <LabelControl label='Идентификатор нового сертификата' value={flight.certificateId} />
          <SubmitControl label='Печатать' onSubmit={()=>{}} />
        </>
      ) }
      <SubmitControl label='TMP:show object' onSubmit={()=>console.log('flight', flight)} />
*/}

      <SubmitControl label='Сохранить' onSubmit={onSubmit} />
    </FlightForm>
  );
};
