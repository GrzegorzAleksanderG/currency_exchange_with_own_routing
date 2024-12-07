import { Box, Button, ButtonGroup, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
const WelcomeScreen = () => {
    return (
    <Box>
        <Typography variant="h2" component="h2">
            Accept terms of conditions
        </Typography>
        <Typography variant="h5" component="h5">
            Select your language
        </Typography>
        <FormControl fullWidth>
            <Select>
                <MenuItem value={1}>English</MenuItem>
                <MenuItem value={2}>Polski</MenuItem>
            </Select>
        </FormControl>
        <ButtonGroup variant="contained">
            <Button>Accept</Button>
            <Button>Decline</Button>
        </ButtonGroup>
    </Box>
    );
}
export default WelcomeScreen;