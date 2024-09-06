import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Account} from "./Account.tsx";
import {Box, Button, Modal, TextField} from "@mui/material";


export function AccountsList() {
    const [accounts, setAccounts] = useState<Account[]>([]);

    const [open, setOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<Account>(new Account());
    const handelEdit = async (account: Account) => {
        setOpen(true);
        setSelectedAccount(account)
    }
    const handleClose = () => setOpen(false);

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         fetch("/api/accounts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedAccount)
        }).then(response => response.json())
            .then(() => setOpen(false));
    }

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSelectedAccount({...selectedAccount,[event.target.name] : event.target.value});
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        height: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24
    };

    useEffect(() => {
        fetch("/api/accounts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => setAccounts(data));
    }, []);

    return (
        <div>
            <h1>Accounts</h1>
            <main>
                <div>
                    <label>Name</label>
                    <label>Value</label>
                    <label>Currency</label>
                    <label>Status</label>
                    <label>Action</label>
                </div>
                {accounts.map((entry) => {
                    return (
                        <div key={entry.id}>
                            <label> {entry.name} </label>
                            <label> {entry.totalValue} </label>
                            <label> {entry.currency} </label>
                            <label> {entry.status} </label>
                            <Button onClick={() => handelEdit(entry)} variant="contained">Edit</Button>
                        </div>
                    )
                })}


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        component="form"
                        sx={style}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div>
                                <h4>Editing Account #{selectedAccount.id} </h4>
                                <br/>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Name:&nbsp;&nbsp;
                                        </td>
                                        <td>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Required"
                                                name={"name"}
                                                defaultValue={selectedAccount.name}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Total Value:&nbsp;&nbsp;
                                        </td>
                                        <td>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Required"
                                                type="number"
                                                name={"totalValue"}
                                                defaultValue={selectedAccount.totalValue}
                                                onChange={handleChange}
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                    },
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Currency:&nbsp;&nbsp;
                                        </td>
                                        <td>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Required"
                                                name={"currency"}
                                                defaultValue={selectedAccount.currency}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Status:&nbsp;&nbsp;
                                        </td>
                                        <td>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Required"
                                                name={"status"}
                                                defaultValue={selectedAccount.status}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><Button type={"submit"} variant="contained"> Save </Button></td>
                                    </tr>
                                    </tbody>
                                </table>
                        </div>

                    </Box>
                </Modal>

            </main>
        </div>
    )
}

export default AccountsList;