import {DateInput, TextInput} from "./Input";
import {BoldLabel, FormButtonStyled} from "../../styles/formStyles";
import {SelectInput} from "./SelectInput";

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


export const LabelControl = ({label, value}) => (
  <div className='formRow'>
    <div className='formComment'>{label}</div>
    <BoldLabel>{value}</BoldLabel>
  </div>
);


export const CertificateIdControl = ({certificateId, setCertificateId}) => (
  <div className='formRow'>
    <div className='formComment'>Номер сертификата</div>
    <div>
      <TextInput value={certificateId} setValue={setCertificateId} />
    </div>
  </div>
);




