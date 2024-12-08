import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
import { setLocation } from "../utils.ts";
import { LOCATION } from "../consts.ts";
const EndingScreen = () => {
    const handleBack = () => {
        setLocation(LOCATION.WELCOME);
    }
    return (
            <Box className="box">
                <Typography variant="h5" component="h5" className="header5">
                    <Trans>Thank you for using our services</Trans>
                </Typography>
                <footer>
                    <ButtonGroup variant="contained">
                        <Button onClick={handleBack}>
                            <Trans>Back to start page</Trans>
                        </Button>
                    </ButtonGroup>
                </footer>
            </Box>
    );
}
export default EndingScreen;