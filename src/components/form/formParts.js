import {DateInput, TextInput} from "./Input";
import {FlightForm, FormButtonStyled} from "../../styles/formStyles";
import {FlightLength, SelectInput} from "./FlightLength";

export const PersonNameControl = ({ personName, setPersonName }) => (
  <div className='formRow'>
    <div className='formComment'>Имя</div>
    <div>
      <TextInput value={personName} setValue={setPersonName} />
    </div>
  </div>
);


export const FlightDateControl = ({ flightDate, setFlightDate }) => (
  <div className='formRow'>
    <div className='formComment'>Дата</div>
    <div>
      <DateInput value={flightDate} setValue={setFlightDate} />
    </div>
  </div>
);


export const FlightLengthControl = ({ flightLength, setFlightLength }) => (
  <div className='formRow'>
    <div className='formComment'>Длительность</div>
    <div>
      <SelectInput value={flightLength} setValue={setFlightLength} />
    </div>
  </div>
);


export const CommentControl = ({ comment, setComment }) => (
  <div className='formRow'>
    <div className='formComment'>Комментарий</div>
    <div>
      <TextInput value={comment} setValue={setComment} />
    </div>
  </div>
);


export const SubmitControl = ({label, onSubmit}) => (
  <div className='formRow'>
    <FormButtonStyled onClick={onSubmit}>{label}</FormButtonStyled>
  </div>
);




