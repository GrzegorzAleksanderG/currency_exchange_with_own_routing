import { Box, Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
import { LOCATION } from "../consts.ts";
import { setLocation } from "../utils.ts";
const SelectionScreen = () => {
    const handleNext = () => {
        setLocation(LOCATION.EXCHANGE);
    }
    const handleBack = () => {
        setLocation(LOCATION.WELCOME);
    }
    return (
            <Box className="box">
                <Typography variant="h5" component="h5" className="header5">
                    <Trans>Select currency to exchange</Trans>
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow><TableCell></TableCell></TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow><TableCell></TableCell></TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <footer>
                    <ButtonGroup variant="contained">
                        <Button onClick={handleBack}><Trans>Back</Trans></Button>
                        <Button onClick={handleNext}><Trans>Next</Trans></Button>
                    </ButtonGroup>
                </footer>
            </Box>
    );
}
export default SelectionScreen;