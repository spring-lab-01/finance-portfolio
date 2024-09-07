import {useEffect, useState} from "react";
import {Account} from "./Account.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Alert, Button} from "@mui/material";
import {styled } from '@mui/material/styles';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import AccountCreate from "./AccountCreate.tsx";

export function AccountsList() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [createNew, setCreateNew] = useState(false);

    const alerts = searchParams.get("alerts");
    console.log(useParams());
    useEffect(() => {
        loadAccounts()
    }, []);

    const loadAccounts = () =>{
        fetch("/api/accounts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => setAccounts(data));
    }
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
        fetch(`/api/accounts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //navigate(`/accounts?alerts=success-delete`)
    }

    const handleCreateNew = () =>{
        setCreateNew(true);
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
            {createNew && <AccountCreate/> }
            <h1>Portfolio Summary By Currency</h1>
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