import {useEffect, useState} from "react";
import {Account} from "./Account.tsx";


export function AccountsList(){
    const [accounts, setAccounts] = useState<Account[]>([]);
    //const [totalValue, setTotalValue] =  useState<number>(0.0);

    useEffect(() => {
        fetch("/api/accounts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) .then(response => response.json())
            .then(data => setAccounts(data));
    }, []);

    // const listaccounts = accounts.map(portfolio =>
    //     <tr>
    //         <td>{portfolio.id}</td>
    //         <td>{portfolio.name}</td>
    //         {/*<td>{portfolio.tag}</td>*/}
    //         <td>{portfolio.createdOn}</td>
    //         <td>{portfolio.status}</td>
    //         <td>{portfolio.totalValue}</td>
    //         <td>{portfolio.currency}</td>
    //         <td>
    //            <Link to={"/account"} state={portfolio}>Edit</Link>
    //         </td>
    //     </tr>
    // );


    return (
        <div>
            <h1>Accounts</h1>
            <main>
                <div>
                    <label>Name</label>
                    <label>Value</label>
                    <label>Currency</label>
                    <label>Status</label>
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