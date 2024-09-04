import Entries from "./Entries.tsx";
import {useEffect, useState} from "react";
import {Account, getAccounts} from "./AccountsService.tsx";
import {Link} from "react-router-dom";


function Accounts(){
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [totalValue, setTotalValue] =  useState<number>(0.0);

    useEffect(() => {
        return () =>{
            const set = async () => {
                setAccounts(await getAccounts())
            }
            set()
            if(accounts && accounts.length > 0)
                setTotalValue(accounts.map(p => p.totalValue).reduce((a,b) => a+b));
        }


    }, []);

    const listaccounts = accounts.map(portfolio =>
        <tr>
            <td>{portfolio.id}</td>
            <td>{portfolio.name}</td>
            <td>{portfolio.tag}</td>
            <td>{portfolio.createdOn}</td>
            <td>{portfolio.status}</td>
            <td>{portfolio.totalValue}</td>
            <td>{portfolio.currency}</td>
            <td>
               <Link to={"/account"} state={portfolio}>Edit</Link>
            </td>
        </tr>
    );


    return (
        <div>
            <h3>Accounts - Total Value {totalValue}</h3>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Tag</th>
                    <th>Last Updated On</th>
                    <th>Status</th>
                    <th>Total Value</th>
                    <th>Currency</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listaccounts}
                </tbody>
            </table>

            <Entries />
        </div>
    )
}

export default Accounts;