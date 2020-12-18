export const flightStates = {
  certificate: 'certificate', // Non-activated, NO_DATE
  booking:     'booking',     // Activated and booked on some date
  executed:    'executed'     // When flight started, we mark it executed (pilot gets his money)
};

// Do not modify!
export const newEntityId = 'newEntityId';

// Time gap between flights (minutes)
export const gapBwFlights = 30;

export const flightBasicTimeOptions = [ 30, 60, 90, 120, 150, 180 ];

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
    basic:   60,
    options: 0,
    total:   0,
  },
  price: {
    basic:    0,
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
