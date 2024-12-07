import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
const AcceptScreen = () =>
    <Box>
        <Typography variant="h2" component="h2">
            <Trans>Confirm value and currency</Trans>
        </Typography>
        <ButtonGroup variant="contained">
            <Button><Trans>Accept</Trans></Button>
            <Button><Trans>Decline</Trans></Button>
        </ButtonGroup>
    </Box>
export default AcceptScreen;