import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
const AcceptScreen = () =>
    <Box>
        <Typography variant="h2" component="h2">
            Confirm value and currency
        </Typography>
        <ButtonGroup variant="contained">
            <Button>Accept</Button>
            <Button>Decline</Button>
        </ButtonGroup>
    </Box>
export default AcceptScreen;