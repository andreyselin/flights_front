import {
  CommentControl,
  FlightDateControl,
  FlightLengthControl,
  PartnerControl,
  LabelControl,
  PersonNameControl,
  FlightOptionsControl,
  FlightDiscountControl,
  PersonPhoneControl, FlightStatusControl
} from "../../../components/form/formParts";
import React from "react";
import {HorizontalSeparator} from "../../../styles/formStyles";
import {PageHeader} from "../../../styles/pageStyles";

//  Create internal certificate
//  Edit flight as full

export const CertificateFlightSubForm = ({
  flight,
  updateFlightProperty,
  partnerOptions
}) => {
  const controlProps = { flight, updateFlightProperty };

  console.log('flight', flight);

  return (
    <>
      <PageHeader>Создать сертификат</PageHeader>
      <HorizontalSeparator />
      <div className={'formSection'}>
        <div className={'formBlock'}>
          <PartnerControl       { ...controlProps } partnerOptions={partnerOptions} />
          <PersonNameControl    { ...controlProps } />
          <PersonPhoneControl   { ...controlProps } />
          <FlightDateControl    { ...controlProps } />
          <CommentControl       { ...controlProps } />
        </div>
        <div className='formBlock'>
          <FlightLengthControl  { ...controlProps } />
          <FlightOptionsControl { ...controlProps } />
          <LabelControl label='Итоговое время' value={`${flight.time.total} мин.`} />
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
  );
};
