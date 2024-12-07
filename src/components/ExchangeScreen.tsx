import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
const ExchangeScreen = () =>
    <Box>
        <Typography variant="h3" component="h3">
            <Trans>Type here value to exchange</Trans>
        </Typography>
        <TextField>here</TextField>
        <Button><Trans>Back</Trans></Button>
        <Button><Trans>Next</Trans></Button>
    </Box>
export default ExchangeScreen;