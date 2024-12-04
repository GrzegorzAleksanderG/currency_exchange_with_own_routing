import React from "react";
import AcceptScreen from "./AcceptScreen.tsx";
import EndingScreen from "./EndingScreen.tsx";
import ExchangeScreen from "./ExchangeScreen.tsx";
import PaymentsScreen from "./PaymentsScreen.tsx";
import SelectionScreen from "./SelectionScreen.tsx";
import WelcomeScreen from "./WelcomeScreen.tsx";
import { Container } from "@mui/material";
const MainScreen = () => {
    return (<>
        <Container maxWidth="sm">
            <AcceptScreen />
            <EndingScreen />
            <ExchangeScreen />
            <PaymentsScreen />
            <SelectionScreen />
            <WelcomeScreen />
        </Container>
    </>);
}
export default MainScreen;