import EditButton from "./button/EditButton.tsx";
import DeleteButton from "./button/DeleteButton.tsx";
import Entries from "./Entries.tsx";

function Accounts(){
    const accounts = [
        {
            "id": 12,
            "name": "MutualFunds",
            "tag": "India MF Investments",
            "createdOn": "2024-05-08",
            "status": "Active",
            "totalValue": 40000,
            "currency": "INR"
        },
        {
            "id": 13,
            "name": "80C",
            "tag": "all 80 C investments",
            "createdOn": "2020-03-07",
            "status": "Active",
            "totalValue": 20000,
            "currency": "INR"
        }
    ]
    const totalValue = accounts.map(p => p.totalValue).reduce((a,b) => a+b);


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
                <EditButton/>
                <DeleteButton/>
            </td>
        </tr>
    );


    return (
        <div className={"container"}>
            <h3>Accounts - Total Value {totalValue}</h3>
            <table>
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