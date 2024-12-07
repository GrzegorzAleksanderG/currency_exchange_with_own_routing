import { Box, Button, ButtonGroup, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { Trans } from 'react-i18next';
import { setLocation } from "../utils";
import { LOCATION } from "../consts";
const WelcomeScreen = () => {
    const handleAccept = () => {
        setLocation(LOCATION.EXCHANGE);
    }
    return (
    <Box>
        <Typography variant="h2" component="h2">
            <Trans>Accept terms of conditions</Trans>
        </Typography>
        <Typography variant="h5" component="h5">
            <Trans>Select your language</Trans>
        </Typography>
        <FormControl fullWidth>
            <Select>
                <MenuItem value={1}><Trans>English</Trans></MenuItem>
                <MenuItem value={2}><Trans>Polski</Trans></MenuItem>
            </Select>
        </FormControl>
        <ButtonGroup variant="contained">
            <Button onClick={handleAccept}><Trans>Accept</Trans></Button>
            <Button><Trans>Decline</Trans></Button>
        </ButtonGroup>
    </Box>
    );
}
export default WelcomeScreen;