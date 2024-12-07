import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
const SelectionScreen = () => {
    return (
        <>
            <Box>
                <Typography variant="h5" component="h5">
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
                <Button><Trans>Back</Trans></Button>
                <Button><Trans>Next</Trans></Button>
            </Box>
        </>
    );
}
export default SelectionScreen;