import {DateInput, InputCheckbox, TextInput} from "./Input";
import {BoldLabel, FormButtonStyled} from "../../styles/formStyles";
import {SelectInput} from "./SelectInput";
import {flightOptions} from "../../const/flights";

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


export const FlightLengthControl = ({ flight, updateFlightProperty }) => {
  const setFlightLength = newValue => updateFlightProperty('time.flight', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Длительность</div>
      <div>
        <SelectInput value={flight.time.basic} setValue={setFlightLength} />
      </div>
    </div>
  );
}


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

export const PartnerControl = ({ flight, updateFlightProperty, options }) => {

  const setValue = newValue => updateFlightProperty('partnerId', newValue);

  return (
    <div className='formRow'>
      <div className='formComment'>Клиент от партнера</div>
      <div>
        <SelectInput value={flight.partnerId} setValue={setValue} options={options} />
      </div>
    </div>
  );
};

export const FlightOptionsControl = ({ flight, updateFlightProperty }) => {

  const toggleProperty = (optionsProperty) =>
    updateFlightProperty(`options.${optionsProperty}`, !flight.options[optionsProperty]);

  return (
    <div className='formRow'>
      <div className='formComment'>Клиент от партнера</div>
      <div>
        {Object.values(flightOptions).map(option => (
          <div>
            <InputCheckbox
              value={flight.options[option.key]}
              setValue={(newValue) => updateFlightProperty(`options.${option.key}`, newValue)}
            />
            { option.label }
          </div>
        ))}
      </div>
    </div>
  );
};

