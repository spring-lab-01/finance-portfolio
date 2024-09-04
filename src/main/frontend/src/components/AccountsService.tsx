import accounts from "../data/accounts.json";
import {useState} from "react";

export async function getAccounts() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    await fetch("/api/accounts", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => setAccounts(data))
        .catch(error => console.error(error))
    return accounts;
}

export class Account {
    "id": number;
    "name": string;
    "tag": string;
    "createdOn": string;
    "status": string;
    "totalValue": number;
    "currency": string;
}

export function editAccount(a: Account) {
    accounts.push(a);
}