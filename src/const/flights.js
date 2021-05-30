import {prepareBasicSelectOptions, withLeadingNull} from "../utilities";

export const flightStates = {
  certificate: 'certificate', // Non-activated, NO_DATE
  booking:     'booking',     // Activated and booked on some date
  executed:    'executed'     // When flight started, we mark it executed (pilot gets his money)
};

// Do not modify!
export const newEntityId = 'newEntityId';

// Time gap between flights (minutes)
export const gapBwFlights = 30;

export const flightBasicTimeOptions = prepareBasicSelectOptions(
  [0,30,60,90,120,150,180]);

export const flightDiscountOptions = prepareBasicSelectOptions(
  [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,99,100]);

// Later will depend on office
export const flightMinutePrice = 500;
export const defaultFlightLength = 60;

export const flightOptions = {
  taxi: {
    key: 'taxi',
    label: 'Taxi',
    flightLength: 0,
    price: 5000
  },
  extreme: {
    key: 'extreme',
    label: 'Extreme',
    flightLength: 0,
    price: 5000
  },
  coldAndDark: {
    key: 'coldAndDark',
    label: 'Cold & Dark',
    flightLength: 30,
    price: 15000
  },
};

export const editModes = {
  create: 'create',
  edit:   'edit'
};

const newTmpProps = (dateFrom) => {
  const hours = withLeadingNull(dateFrom ? dateFrom.getHours() : 0);
  const minutes = withLeadingNull(dateFrom ? dateFrom.getMinutes() : 0);
  return { hours, minutes, datePickerDate: dateFrom }
};

const defaultFlight = ({ partnerId }) => ({
  data: {
    client: {
      name:  '',
      phone: '',
    },
    partnerId, // as empty for select
    certificateId: 0,
    flightLength: {
      basic:   defaultFlightLength,
      options: 0,
      total:   0,
    },
    price: {
      basic:    defaultFlightLength * flightMinutePrice,
      options:  0,
      total:    0,
      discountPercent: 0, // percent to substract from price
      discount: 0, // percent to substract from price
      final:    0, // With discount
    },
    isPaid: false,
    isExecuted: false,
  },
  options: {
    coldAndDark: false,
    extreme:     false,
    taxi:        false,
  },
  from: null,
  to:   null,
  comment: '',
});

export const prepareFlight = ({ partnerId }, existingFlight) => {
  const prepared = {
  // export const prepareFlight = (existingFlight) => ({
    ...defaultFlight({partnerId}),
    ...existingFlight,
  };
  prepared.dateFrom = prepared.dateFrom ? new Date(Date.parse(prepared.dateFrom)) : new Date();
  prepared.dateTo = prepared.dateTo ? new Date(Date.parse(prepared.dateTo)) : new Date();
  prepared.tmp = newTmpProps(prepared.dateFrom);
  return prepared;
};

export const generateEditFlightUiState = (customProperties) => ({
  saved:   false,
  failed:  false,
  printed: false,
  loading: true,
  ...customProperties
});
