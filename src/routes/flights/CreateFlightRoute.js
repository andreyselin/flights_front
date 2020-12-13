import {useState} from "react";
import {FlightForm} from "../../styles/formStyles";
import {
  CommentControl,
  FlightDateControl,
  FlightLengthControl,
  PersonNameControl,
  SubmitControl
} from "../../components/form/formParts";

export const CreateFlightRoute = () => {

  const [ flightLength, setFlightLength ] = useState(30);
  const [ personName, setPersonName ] = useState('');
  const [ flightDate, setFlightDate ] = useState('');
  const [ comment, setComment ] = useState('');

  const onSubmit = () => {

  };

  return (
    <FlightForm>
      <PersonNameControl   { ...{ personName,   setPersonName   } } />
      <FlightDateControl   { ...{ flightDate,   setFlightDate   } } />
      <FlightLengthControl { ...{ flightLength, setFlightLength } } />
      <CommentControl      { ...{ comment,      setComment } } />
      <SubmitControl label='Сохранить' onSubmit={onSubmit} />

    </FlightForm>
  );
};
