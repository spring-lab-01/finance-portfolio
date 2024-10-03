import {Account} from "../components/Account.tsx";

export const postAccount = async (selectedAccount: Account): Promise<Account> => {
    const response = await fetch(`/api/accounts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedAccount)
    });
    return response.json();
}

export const saveAccount = async (id: string|undefined, selectedAccount: Account): Promise<Account> => {
   const response = await fetch(`/api/accounts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedAccount)
    });
   return response.json();
}
export const getAccountById = async (id: string | undefined): Promise<Account> => {
    const response = await fetch(`/api/accounts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
}

export const getAccounts = async ():  Promise<Account[]> =>{
    const response = await fetch("/api/accounts", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
export const deleteAccount = async (id: number)=> {
    await fetch(`/api/accounts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


