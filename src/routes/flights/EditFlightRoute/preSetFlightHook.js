import {flightMinutePrice, flightOptions} from "../../../const/flights";

export const preSetFlightHook = (flight) => {
    let optionsTime = 0;
    let optionsPrice = 0;
    Object.keys(flight.options)
        .forEach(optionKey => {
            if (flight.options[optionKey]) {
                optionsTime  += flightOptions[optionKey].flightLength;
                optionsPrice += flightOptions[optionKey].price;
            }
        });

    // Flight length
    flight.data.flightLength.options   = optionsTime;
    flight.data.flightLength.total     = flight.data.flightLength.basic + flight.data.flightLength.options;

    // dateFrom
    const from = new Date(flight.tmp.datePickerDate.getTime());
    from.setHours(parseInt(flight.tmp.hours));
    from.setMinutes(parseInt(flight.tmp.minutes));

    // dateTo
    const to = new Date(from.getTime());
    to.setMinutes(from.getMinutes() + flight.data.flightLength.total);

    flight.from = from;
    flight.to = to;

    // Price
    flight.data.price.options  = optionsPrice;
    flight.data.price.basic    = flight.data.flightLength.basic * flightMinutePrice;
    flight.data.price.total    = flight.data.price.basic + flight.data.price.options;
    flight.data.price.discount = flight.data.price.total / 100 * flight.data.price.discountPercent;
    flight.data.price.final    = flight.data.price.total - flight.data.price.discount;
};
