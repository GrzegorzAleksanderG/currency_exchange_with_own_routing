import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
const SelectionScreen = () => {
    return (
        <>
            <Box>
                <Typography variant="h5" component="h5">
                    Select currency to exchange
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
                <Button>Back</Button>
                <Button>Next</Button>
            </Box>
        </>
    );
}
export default SelectionScreen;