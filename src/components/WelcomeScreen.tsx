import { Box, Button, ButtonGroup, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { Trans, useTranslation } from 'react-i18next';
import { setLocation } from "../utils.ts";
import { LOCATION } from "../consts.ts";
import { useMachine } from '@xstate/react';
import { languageMachine } from "../xStateMachines/languageMachine";
const WelcomeScreen = () => {
    const handleAccept = () => {
        setLocation(LOCATION.SELECTION);
    }
    const [state, send] = useMachine(languageMachine);
    const { i18n } = useTranslation();
    const handleChangeLanguage = (evt) => {
        i18n.changeLanguage(evt.target.value);
        send({type: "CHANGE_LANGUAGE"}); //, {language: evt.target.value}
    }
    return (
    <Box className="box">
        <Typography variant="h5" component="h5" className="header5">
            <Trans>Accept terms of conditions</Trans>
        </Typography>
        <Typography variant="h5" component="h5">
            <Trans>Select your language</Trans>
        </Typography>
        <FormControl fullWidth>
            <Select onChange={handleChangeLanguage} value={"en"}>
                <MenuItem value={"en"}><Trans>English</Trans></MenuItem>
                <MenuItem value={"pl"}><Trans>Polski</Trans></MenuItem>
            </Select>
        </FormControl>
        <footer>
            <ButtonGroup variant="contained">
                <Button onClick={handleAccept}><Trans>Accept</Trans></Button>
            </ButtonGroup>
        </footer>
    </Box>
    );
}
export default WelcomeScreen;