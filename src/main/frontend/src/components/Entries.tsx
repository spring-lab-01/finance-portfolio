import EditButton from "./button/EditButton.tsx";
import DeleteButton from "./button/DeleteButton.tsx";

function AccountEntry(){
    const entries = [
        {
            "id": 12,
            "month": "04",
            "year": "2024",
            "value": 40000
        },
        {
            "id": 12,
            "month": "04",
            "year": "2024",
            "value": 40000
        }
    ]


    const listaccounts = entries.map(entry =>
        <tr>
            <td>{entry.id}</td>
            <td>{entry.month}-{entry.year}</td>
            <td>{entry.value}</td>
            <td>
                <EditButton/>
                <DeleteButton/>
            </td>
        </tr>
    );


    function addAction() {

    }

    return (
        <div className={"container"}>
            <h3>Entries</h3>
            <button onClick={addAction}> Add New Entry </button>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Month-Year</th>
                    <th>Value</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listaccounts}
                </tbody>
            </table>
        </div>
    )
}

export default AccountEntry