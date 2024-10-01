import {ChangeEvent, FormEvent, useState} from "react";
import {Account} from "./Account.tsx";
import {Box, Button, Container, Modal, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function AccountCreate() {
    const [selectedAccount, setSelectedAccount] = useState<Account>(new Account());
    const navigate = useNavigate();

    const handleClose = () => setOpen(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`/api/accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedAccount)
        }).then(response => response.json())
            .then(() => setOpen(false));
        navigate(`/accounts?alerts=success-create`)
    }

    const handleCancel = () => {
        setOpen(false);
        navigate(`/accounts`);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedAccount({...selectedAccount, [event.target.name]: event.target.value});
    }

    const [open, setOpen] = useState(true);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        height: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        my: 4
    };


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Container maxWidth="lg">
                    <Box
                        component="form"
                        sx={style}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div>
                            <h4>Create Account</h4>
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
                                            // label="Required"
                                            name={"name"}
                                            defaultValue={selectedAccount.name}
                                            value={selectedAccount.name}
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
                                            // label="Required"
                                            type="number"
                                            name={"totalValue"}
                                            defaultValue={selectedAccount.totalValue}
                                            value={selectedAccount.totalValue}
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
                                            // label="Required"
                                            name={"currency"}
                                            defaultValue={selectedAccount.currency}
                                            value={selectedAccount.currency}
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
                                            // label="Required"
                                            name={"status"}
                                            defaultValue={selectedAccount.status}
                                            value={selectedAccount.status}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><Button type={"submit"} variant="contained"> Save </Button>
                                        <Button onClick={() => handleCancel()} variant="outlined"> Cancel </Button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Box>
            </Container>


        </Modal>
    )
}

export default AccountCreate;