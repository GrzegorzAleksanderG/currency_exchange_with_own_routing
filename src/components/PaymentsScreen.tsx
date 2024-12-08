import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
import { LOCATION } from "../consts.ts";
import { setLocation } from "../utils.ts";
const PaymentsScreen = () => {
    const handleNext = () => {
        setLocation(LOCATION.ENDING);
    }
    const handleBack = () => {
        setLocation(LOCATION.ACCEPT);
    }
    return (
        <Box className="box">
            <Typography variant="h5" component="h5" className="header5">
                <Trans>Select method of payment</Trans>
            </Typography>
            <footer>
                <ButtonGroup variant="contained">
                    <Button onClick={handleBack}><Trans>Back</Trans></Button>
                    <Button onClick={handleNext}><Trans>Next</Trans></Button>
                </ButtonGroup>
            </footer>
        </Box>       
    );
}
export default PaymentsScreen;