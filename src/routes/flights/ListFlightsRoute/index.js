import styled from 'styled-components';
import React, {useContext, useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
// import {preparePagination, routes, styles} from "../const";
import {AppStateContextStore} from "../../../contexts/AppStateContext";
import {FlightForm, HorizontalSeparator} from "../../../styles/formStyles";
import {PageHeader} from "../../../styles/pageStyles";
import {newEntityId} from "../../../const/flights";
import {InlineButtonControl} from "../../../components/formControls/ButtonControl";
import {ShortDateTime} from "../../../components/date/DrawDateTime";

const TableStyled = styled.table`
    width: 100%;
`;
const TrStyled = styled.tr`
  cursor: pointer;
  border-bottom: 1px solid lightgray;
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;
const TdStyled = styled.td`
    padding: 3px 7px;
    text-align: left;
`;
const ThStyled = styled.th`
    padding: 3px 7px;
    text-align: left;
`;

export const ListFlightsRoute = () => {

    const history = useHistory();

    const { api } = useContext(AppStateContextStore);

    const { page } = useParams();

    const [items, setItems] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // const [pagination, setPagination] = useState(preparePagination({ page }));

    const gotoEdit = (flightId) => {
        history.push(`/flights/edit/${flightId}`);
    };

    useEffect(() => {
        api.listFlights({
            // pagination: preparePagination({ page })
        })
            .then(result => {
              console.log('result?.data.items', result?.data.items)
                if (result.status === 0) {
                    setItems(Object.keys(result?.data.items)
                        .map(key => result?.data?.items[key]));
                    // setPagination(result?.data.pagination);
                    // console.log(result?.data);
                } else {
                    setIsError(true);
                }
                setIsLoading(false);
            });
    }, [ page ]);

    if (isError) {
        return 'Error!';
    }
    if (isLoading) {
        return 'Loading...';
    }


    return <FlightForm>
        <PageHeader>Полеты</PageHeader>
        <HorizontalSeparator />
        <div>
            <InlineButtonControl onClick={()=>gotoEdit(newEntityId)} buttonLabel={'Создать'}></InlineButtonControl>
        </div>
        <HorizontalSeparator />
        { items &&
        <TableStyled style={{ marginBottom: '20px' }}>
            <thead>
            <TrStyled>
                <ThStyled style={{}}>ID</ThStyled>
                <ThStyled style={{}}>Сертификат</ThStyled>
                <ThStyled style={{}}>Имя клиента</ThStyled>
                <ThStyled style={{}}>Дата полета</ThStyled>
                {/*<ThStyled style={{}}>...</ThStyled>*/}
            </TrStyled>
            </thead>
            <tbody>
            { items
                .map((flight, trIndex) =>(
                    <TrStyled
                      onClick={()=>gotoEdit(flight._id)}
                      key={trIndex}
                    >
                        <TdStyled>{flight._id}</TdStyled>
                        <TdStyled>{flight.data.certificateId}</TdStyled>
                        <TdStyled>{flight.data.client?.name}</TdStyled>
                        <TdStyled><ShortDateTime date={flight.from} /></TdStyled>
                        {/*<TdStyled><InlineButtonControl onClick={()=>gotoEdit(flight._id)} buttonLabel={'->'}></InlineButtonControl></TdStyled>*/}
                    </TrStyled>
                )) }
            </tbody>
        </TableStyled>
        }
        {/*<Pagination pagination={ pagination } baseRoute={ routes.listPayments } />*/}
    </FlightForm>;

};
