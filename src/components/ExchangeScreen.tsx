import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
import { setLocation } from "../utils.ts";
import { LOCATION } from "../consts.ts";
const ExchangeScreen = () => {
    const handleNext = () => {
        setLocation(LOCATION.ACCEPT);
    }
    const handleBack = () => {
        setLocation(LOCATION.SELECTION);
    }
    return (
        <Box className="box">
            <Typography variant="h5" component="h5" className="header5">
                <Trans>Type here amount to exchange</Trans>
            </Typography>
            <TextField>here</TextField>
            <footer>
                <ButtonGroup variant="contained">
                    <Button onClick={handleBack}><Trans>Back</Trans></Button>
                    <Button onClick={handleNext}><Trans>Next</Trans></Button>
                </ButtonGroup>
            </footer>
        </Box>
    );
}
export default ExchangeScreen;