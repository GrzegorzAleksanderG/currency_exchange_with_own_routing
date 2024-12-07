import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
const EndingScreen = () => {
    return (
        <>
            <Box>
                <Typography variant="h3" component="h3">
                    <Trans>Thank you for using our services</Trans>
                </Typography>
                <Button>
                    <Trans>Back</Trans>
                </Button>
            </Box>
        </>
    );
}
export default EndingScreen;