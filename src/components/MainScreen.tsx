import React from "react";
import AcceptScreen from "./AcceptScreen.tsx";
import EndingScreen from "./EndingScreen.tsx";
import ExchangeScreen from "./ExchangeScreen.tsx";
import PaymentsScreen from "./PaymentsScreen.tsx";
import SelectionScreen from "./SelectionScreen.tsx";
import WelcomeScreen from "./WelcomeScreen.tsx";
import { Container, Typography } from "@mui/material";
import { LOCATION } from "../consts.ts";
import { Trans } from "react-i18next";

const {ACCEPT, ENDING, EXCHANGE, PAYMENTS, SELECTION, WELCOME} = LOCATION;

const renderContent = (path: string)=>{
    switch(path){
        case ACCEPT:
            return(<AcceptScreen/>);
        case ENDING:
            return(<EndingScreen/>);
        case EXCHANGE:
            return(<ExchangeScreen/>);
        case PAYMENTS:
            return(<PaymentsScreen/>);
        case SELECTION:
            return(<SelectionScreen/>);
        case WELCOME:
            return(<WelcomeScreen/>);
        }
    }

const MainScreen = () => {
    const view = window.location.pathname;
    
    return (
        <Container className="wrapper">
            <Typography variant="h2" component="h2" className="header2">
                <Trans>Currency exchange</Trans>
            </Typography>
            {renderContent(view)}
        </Container>
    );
}
export default MainScreen;