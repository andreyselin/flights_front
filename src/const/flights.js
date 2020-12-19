export const flightStates = {
  certificate: 'certificate', // Non-activated, NO_DATE
  booking:     'booking',     // Activated and booked on some date
  executed:    'executed'     // When flight started, we mark it executed (pilot gets his money)
};

// Do not modify!
export const newEntityId = 'newEntityId';

// Time gap between flights (minutes)
export const gapBwFlights = 30;

export const flightBasicTimeOptions = [
  { value: 30  , label: 30  },
  { value: 60  , label: 60  },
  { value: 90  , label: 90  },
  { value: 120 , label: 120 },
  { value: 150 , label: 150 },
  { value: 180 , label: 180 }
];

// Later will depend on office
export const flightMinutePrice = 100;
export const defaultFlightLength = 60;

export const flightOptions = {
  taxi: {
    key: 'taxi',
    label: 'Taxi',
    time: 0,
    price: 5000
  },
  extreme: {
    key: 'extreme',
    label: 'Extreme',
    time: 0,
    price: 5000
  },
  coldAndDark: {
    key: 'coldAndDark',
    label: 'Cold & Dark',
    time: 30,
    price: 15000
  },
};

export const editModes = {
  create: 'create',
  edit:   'edit'
};

export const generateFlight = ({ state }) => ({
  partnerId:     0,
  certificateId: 0,
  state,
  time: {
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
  options: {
    coldAndDark: false,
    extreme:     false,
    taxi:        false,
  },
  personName:    '',
  flightDate:    '',
  phone:         '',
  comment:       '',
});

export const generateEditFlightUiState = (customProperties) => ({
  saved:   false,
  failed:  false,
  printed: false,
  loading: true,
  ...customProperties
});
