import React from "react";
import AcceptScreen from "./AcceptScreen.tsx";
import EndingScreen from "./EndingScreen.tsx";
import ExchangeScreen from "./ExchangeScreen.tsx";
import PaymentsScreen from "./PaymentsScreen.tsx";
import SelectionScreen from "./SelectionScreen.tsx";
import WelcomeScreen from "./WelcomeScreen.tsx";
import { Container } from "@mui/material";
import { LOCATION } from "../consts.js";

const {ACCEPT, ENDING, EXCHANGE, PAYMENTS, SELECTION, WELCOME} = LOCATION;

const renderContent = (path)=>{
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
        <Container maxWidth="sm">
            {renderContent(view)}
        </Container>
    );
}
export default MainScreen;