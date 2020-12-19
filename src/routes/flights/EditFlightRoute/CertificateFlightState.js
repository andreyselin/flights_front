import {
  CommentControl,
  FlightDateControl,
  FlightLengthControl,
  PartnerControl,
  LabelControl,
  PersonNameControl, FlightOptionsControl
} from "../../../components/form/formParts";
import React from "react";

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
      <PartnerControl       { ...controlProps } partnerOptions={partnerOptions} />
      <PersonNameControl    { ...controlProps } />
      <FlightDateControl    { ...controlProps } />
      <FlightLengthControl  { ...controlProps } />
      <FlightOptionsControl { ...controlProps } />
      {/*
      <CommentControl       { ...controlProps } />
      */}
      <LabelControl label='Итоговая цена'  value={`${flight.price.final} тг.`} />
      <LabelControl label='Итоговое время' value={`${flight.time.total} мин.`} />
    </>
  );
};
