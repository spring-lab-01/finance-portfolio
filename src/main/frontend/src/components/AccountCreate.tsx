import {ChangeEvent, FormEvent, useState} from "react";
import {Account} from "./Account.tsx";
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function AccountCreate() {
    const [selectedAccount, setSelectedAccount] = useState<Account>(new Account());
    const navigate = useNavigate();

    //const handleClose = () => setOpen(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!selectedAccount.status || selectedAccount.status === '') selectedAccount.status ='Active';
        if(!selectedAccount.currency || selectedAccount.currency === '') selectedAccount.currency ='USD';
        fetch(`/api/accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedAccount)
        }).then(response => response.json());
        navigate(`/accounts?alerts=success-create`)
    }

    const handleCancel = () => {
        //setOpen(false);
        navigate(`/accounts`);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedAccount({...selectedAccount, [event.target.name]: event.target.value});
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedAccount({...selectedAccount, [event.target.name]: event.target.value});
    }

    //const [open, setOpen] = useState(true);

    const style = {
        width: 'auto',
        paddingLeft: '10px',
        paddingRight:'10px',
    };


    return (
                    <Box
                        component="form"
                        sx={style}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => handleSubmit(e)}>
                        <div className="div-margin">
                            <h4 className="align-center">Create Account</h4>
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
                                        <select onChange={handleSelectChange} name={"currency"} defaultValue={"USD"}>
                                            <option value={"USD"}>USD</option>
                                            <option value={"INR"}>INR</option>
                                        </select>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Status:&nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <select onChange={handleSelectChange} name={"status"} defaultValue={"Active"}>
                                            <option value={"Active"}>Active</option>
                                            <option value={"InActive"}>InActive</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Button type={"submit"} variant="contained"> Save </Button></td>
                                    <td><Button onClick={() => handleCancel()} variant="outlined"> Cancel </Button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Box>
    )
}

export default AccountCreate;