import {useEffect, useState} from "react";
import {Account} from "./Account.tsx";


export function AccountsList(){
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        fetch("/api/accounts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) .then(response => response.json())
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
                        </div>
                    )
                })}

            </main>
        </div>
    )
}

export default AccountsList;