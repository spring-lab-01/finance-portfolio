import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Account} from "./Account.tsx";
import {Box, Button, InputLabel, NativeSelect, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


export function AccountEdit() {
    const { id } = useParams();
    const [selectedAccount, setSelectedAccount] = useState<Account>(new Account());
    const navigate = useNavigate();
    useEffect(() => {
         fetch(`/api/accounts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => setSelectedAccount(data));
    },[]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`/api/accounts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedAccount)
        }).then(response => response.json());
        navigate(`/accounts?alerts=success`)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedAccount({...selectedAccount, [event.target.name]: event.target.value});
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedAccount({...selectedAccount, [event.target.name]: event.target.value});
    }

    const handleCancel = () => {
        //setOpen(false);
        navigate(`/accounts`);
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}>
            <div className="div-margin">
                <h4 className="align-center">Create Account</h4>

                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    name={"name"}
                    defaultValue={selectedAccount.name}
                    value={selectedAccount.name}
                    onChange={handleChange}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
                <br/>
                <br/>
                <TextField
                    required
                    id="outlined-required"
                    label="Total Value"
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
                <br/>
                <br/>
                <InputLabel variant="standard" htmlFor="currency-native">
                    Currency
                </InputLabel>
                <NativeSelect
                    name={"currency"}
                    defaultValue={selectedAccount.currency}
                    value={selectedAccount.currency}
                    onChange={handleSelectChange}
                >
                    <option value={"USD"}>USD</option>
                    <option value={"INR"}>INR</option>
                </NativeSelect>
                <br/>
                <br/>
                <InputLabel variant="standard" htmlFor="status-native">
                    Status
                </InputLabel>
                <NativeSelect
                    defaultValue={"Active"}
                    name={"status"}
                    value={selectedAccount.status}
                    onChange={handleSelectChange}
                >
                    <option value={"Active"}>Active</option>
                    <option value={"InActive"}>InActive</option>
                </NativeSelect>
                <br/>
                <br/>
                <Button type={"submit"} variant="contained"> Save </Button> &nbsp;
                <Button onClick={() => handleCancel()} variant="outlined"> Cancel </Button>

            </div>
        </Box>
    )
}

export default AccountEdit;