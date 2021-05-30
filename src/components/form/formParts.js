import {DateInput, InputCheckbox, TextInput} from "./Input";
import {BoldLabel, FormButtonStyled} from "../../styles/formStyles";
import {SelectInput} from "./SelectInput";
import {flightBasicTimeOptions, flightDiscountOptions, flightOptions} from "../../const/flights";
import {DataPickerControl} from "../formControls/DataPickerControl";
import {hourOptions, minuteOptions} from "../../const";

export const PersonNameControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('data.client.name', newValue);
  return (<div className='formRow'>
      <div className='formComment'>Имя клиента</div>
      <div>
        <TextInput value={flight.data.client.name} setValue={setValue} />
      </div>
    </div>
  )
};

export const FlightDateControl = ({ flight, updateFlightProperty }) => {
  const setHoursValue = newValue => updateFlightProperty('tmp.hours', newValue);
  const setMinutesValue = newValue => updateFlightProperty('tmp.minutes', newValue);
  return (
      <div className='formRow'>
       <div className='formComment'>Дата полета</div>
       <div style={{width: '210px'}}>
          <DataPickerControl formState={flight} updateFunction={updateFlightProperty} propertyPath={'tmp.datePickerDate'} />
       </div>
        <div style={{ marginTop: '15px' }} className='formComment'>Время полета</div>
       <div style={{ width: '210px' }}>
           <SelectInput valueLabel={[ 'key', 'value' ]} value={flight.tmp.hours} options={hourOptions} setValue={setHoursValue} /> ч.,&nbsp;
           <SelectInput valueLabel={[ 'key', 'value' ]} value={flight.tmp.minutes} options={minuteOptions} setValue={setMinutesValue} /> мин.
       </div>
     </div>

  );
};

export const FlightLengthControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('data.flightLength.basic', parseInt(newValue));
  return (
    <div className='formRow'>
      <div className='formComment'>Продолжительность полета</div>
      <div>
        <SelectInput
          value={flight.data.flightLength.basic}
          setValue={setValue}
          options={flightBasicTimeOptions}
          valueLabel={[ 'value', 'label' ]}
        />
      </div>
    </div>
  );
};

export const FlightDiscountControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('data.price.discountPercent', parseInt(newValue));
  return (
    <div className='formRow'>
      <div className='formComment'>Скидка</div>
      <div>
        <SelectInput
          value={flight.data.price.discountPercent}
          setValue={setValue}
          options={flightDiscountOptions}
          valueLabel={[ 'value', 'label' ]}
        />
      </div>
    </div>
  );
};

export const CommentControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('comment', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Комментарий</div>
      <div>
        <TextInput value={flight.comment} setValue={setValue} />
      </div>
    </div>
  );
};

export const PersonPhoneControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('data.client.phone', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Телефон клиента</div>
      <div>
        <TextInput value={flight.data.client.phone} setValue={setValue} />
      </div>
    </div>
  );
};


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


export const CertificateIdControl = ({ flight, updateFlightProperty}) => {
  const setValue = newValue => updateFlightProperty('data.certificateId', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Номер сертификата</div>
      <div>
        <TextInput value={flight.data.certificateId} setValue={setValue} />
      </div>
    </div>
  );
}

export const PartnerControl = ({ flight, updateFlightProperty, partnerOptions }) => {
  const setValue = newValue => updateFlightProperty('data.partnerId', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Партнер</div>
      <div>
        <SelectInput
          value={flight.data.partnerId}
          setValue={setValue}
          options={partnerOptions}
          valueLabel={['_id', 'title']}
        />
      </div>
    </div>
  );
};

export const FlightOptionsControl = ({ flight, updateFlightProperty }) => {

  return (
    <div className='formRow'>
      <div className='formComment'>Доп. опции</div>
      <div style={{ display: 'flex' }}>
        {Object.values(flightOptions).map(option => (
          <div key={option.key} style={{marginRight: '15px'}}>
            <InputCheckbox
              value={flight.options[option.key]}
              setValue={(newValue) => updateFlightProperty(`options.${option.key}`, newValue)}
              label={option.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const FlightStatusControl = ({ flight, updateFlightProperty }) => {

  return (
    <div className='formRow'>
      <div className='formComment'>Статус полета</div>
      <div style={{marginBottom: '5px'}}>
        <InputCheckbox
          value={flight.data.isPaid}
          setValue={(newValue) => updateFlightProperty('data.isPaid', newValue)}
          label='Оплачен'
        />
      </div>
      <div style={{marginBottom: '5px'}}>
        <InputCheckbox
          value={flight.data.isExecuted}
          setValue={(newValue) => updateFlightProperty('data.isExecuted', newValue)}
          label='Выполнен'
        />
      </div>
    </div>
  );
};

