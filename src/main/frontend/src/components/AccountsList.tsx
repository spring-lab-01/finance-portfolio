import {useEffect, useState} from "react";
import {Account} from "./Account.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Alert, Button, Dialog, DialogActions, DialogTitle, useMediaQuery, useTheme} from "@mui/material";
import {styled } from '@mui/material/styles';
import {useNavigate, useSearchParams} from "react-router-dom";
import {getAccounts, deleteAccount} from "../service/AccountService.tsx"

export function AccountsList() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const alerts = searchParams.get("alerts");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [deleteBox, setDeleteBox] = useState(false);
    const [deleteId, setDeleteId] = useState<number>(0);

    useEffect(() => {
        getAccounts().then(data => setAccounts(data));
    }, []);


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const handleDelete = (id: number) => {
       setDeleteBox(true);
       setDeleteId(id);
    }

    const handleConfirm = () =>{
        deleteAccount(deleteId).then(() => setAccounts(accounts.filter(account=> account.id != deleteId)));
        setDeleteBox(false);
    }

    const handleCancel =() =>{
        setDeleteBox(false);
    }

    const handleCreateNew = () =>{
        navigate(`/accounts/create`);
    }

    const inrPortfolios = accounts.filter(p=> p.currency == 'INR');
    const usdPortfolios = accounts.filter(p=> p.currency == 'USD');

    const inrPortfolioValue = inrPortfolios.map(p => p.totalValue).reduce((a,b) => a+b, 0);
    const usdPortfolioValue = usdPortfolios.map(p => p.totalValue).reduce((a,b) => a+b, 0);

    return (
        <div>
            {alerts == "success" && <Alert severity="success">Account Saved Successfully</Alert>}
            {alerts == "success-create" && <Alert severity="success">Account Created Successfully</Alert>}
            {alerts == "success-delete" && <Alert severity="success">Account Deleted Successfully</Alert>}

            <Dialog
                fullScreen={fullScreen}
                aria-labelledby="responsive-dialog-title"
                open={deleteBox}>
                <DialogTitle id="responsive-dialog-title">{"Delete Account"}</DialogTitle>
                Are you sure you want to delete account?
                <DialogActions>
                    <Button onClick={handleConfirm}>OK</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>

            <h1>Portfolio Summary</h1>
            <h3>By Currency</h3>
            <h5>INR Value - {inrPortfolioValue} </h5>
            <h5>USD value - {usdPortfolioValue} </h5>
            <h1>Accounts <Button variant="contained" onClick={() => handleCreateNew()} sx={{ marginLeft: 100}}>+ Add New Account</Button></h1>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Total Value</StyledTableCell>
                            <StyledTableCell>Currency</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accounts.map((row) => (
                            <TableRow
                                key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.totalValue}</TableCell>
                                <TableCell> {row.currency}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>
                                    <Button variant="contained"
                                            onClick={() => navigate(`/accounts/${row.id}`)}>Edit</Button>
                                    <Button variant="outlined" onClick={() => handleDelete(row.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AccountsList;