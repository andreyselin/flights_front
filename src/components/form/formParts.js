import {DateInput, InputCheckbox, TextInput} from "./Input";
import {BoldLabel, FormButtonStyled} from "../../styles/formStyles";
import {SelectInput} from "./SelectInput";
import {flightBasicTimeOptions, flightDiscountOptions, flightOptions} from "../../const/flights";
import {DataPickerControl} from "../formControls/DataPickerControl";
import {hourOptions, minuteOptions} from "../../const";

export const PersonNameControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('client.name', newValue);
  return (<div className='formRow'>
      <div className='formComment'>Имя клиента</div>
      <div>
        <TextInput value={flight.client.name} setValue={setValue} />
      </div>
    </div>
  )
};

// export const FlightDateControl = ({ flight, updateFlightProperty }) => {
//   const setValue = newValue => updateFlightProperty('dateFrom', newValue);
//   return (
//     <div className='formRow'>
//       <div className='formComment'>Дата полета</div>
//       <div>
//         <DateInput value={flight.dateFrom} setValue={setValue} />
//       </div>
//     </div>
//   );
// }

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
}

export const FlightLengthControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('flightLength.basic', parseInt(newValue));
  return (
    <div className='formRow'>
      <div className='formComment'>Продолжительность полета</div>
      <div>
        <SelectInput
          value={flight.flightLength.basic}
          setValue={setValue}
          options={flightBasicTimeOptions}
          valueLabel={[ 'value', 'label' ]}
        />
      </div>
    </div>
  );
};

export const FlightDiscountControl = ({ flight, updateFlightProperty }) => {
  const setValue = newValue => updateFlightProperty('price.discountPercent', parseInt(newValue));
  return (
    <div className='formRow'>
      <div className='formComment'>Скидка</div>
      <div>
        <SelectInput
          value={flight.price.discountPercent}
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
  const setValue = newValue => updateFlightProperty('client.phone', newValue);
  return (
    <div className='formRow'>
      <div className='formComment'>Телефон клиента</div>
      <div>
        <TextInput value={flight.client.phone} setValue={setValue} />
      </div>
    </div>
  );
}


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
      <div className='formComment'>Партнер</div>
      <div>
        <SelectInput
          value={flight.partnerId}
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
            {/*{ option.label }*/}
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
          value={flight.isPaid}
          setValue={(newValue) => updateFlightProperty('isPaid', newValue)}
          label='Оплачен'
        />
      </div>
      <div style={{marginBottom: '5px'}}>
        <InputCheckbox
          value={flight.isExecuted}
          setValue={(newValue) => updateFlightProperty('isExecuted', newValue)}
          label='Выполнен'
        />
      </div>
    </div>
  );
};

