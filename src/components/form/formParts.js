import {DateInput, InputCheckbox, TextInput} from "./Input";
import {BoldLabel, FormButtonStyled} from "../../styles/formStyles";
import {SelectInput} from "./SelectInput";
import {flightBasicTimeOptions, flightOptions} from "../../const/flights";

export const PersonNameControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('personName', newValue);
  return (<div className='formRow'>
      <div className='formComment'>Имя клиента</div>
      <div>
        <TextInput value={flight.personName} setValue={setValue} />
      </div>
    </div>
  )
};

export const FlightDateControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('flightDate', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Дата полета</div>
      <div>
        <DateInput value={flight.flightDate} setValue={setValue} />
      </div>
    </div>
  );
}

export const FlightLengthControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('time.basic', parseInt(newValue));
  return (
    <div className='formRow'>
      <div className='formComment'>Продолжительность полета</div>
      <div>
        <SelectInput
          value={flight.time.basic}
          setValue={setValue}
          options={flightBasicTimeOptions}
          valueLabel={[ 'value', 'label' ]}
        />
      </div>
    </div>
  );
};

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

export const PartnerControl = ({ flight, updateFlightProperty, partnerOptions }) => {

  const setValue = newValue => updateFlightProperty('partnerId', newValue);

  return (
    <div className='formRow'>
      <div className='formComment'>Клиент от партнера</div>
      <div>
        <SelectInput
          value={flight.partnerId}
          setValue={setValue}
          options={partnerOptions}
          valueLabel={['_id', 'name']}
        />
      </div>
    </div>
  );
};

export const FlightOptionsControl = ({ flight, updateFlightProperty }) => {

  const toggleProperty = (optionsProperty) =>
    updateFlightProperty(`options.${optionsProperty}`, !flight.options[optionsProperty]);

  return (
    <div className='formRow'>
      <div className='formComment'>Доп. опции</div>
      <div>
        {Object.values(flightOptions).map(option => (
          <div key={option.key} style={{marginBottom: '5px'}}>
            <InputCheckbox
              value={flight.options[option.key]}
              setValue={(newValue) => updateFlightProperty(`options.${option.key}`, newValue)}
              label={option.label}
            />
            {/*{ option.label }*/}
          </div>
        ))}
      </div>
    </div>
  );
};

