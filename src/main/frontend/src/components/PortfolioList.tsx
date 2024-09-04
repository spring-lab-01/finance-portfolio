import EditButton from "./button/EditButton.tsx";


function PortfolioList() {

    //const [portfolios, setPortfolios] = useState([]);
    const portfolios = [
        {
            "id": 12,
            "name": "MutualFunds",
            "tag": "India MF Investments",
            "lastUpdatedOn": "2024-05-08",
            "status": "Active",
            "totalValue": 40000,
            "currency": "INR"
        },
        {
            "id": 13,
            "name": "80C",
            "tag": "all 80 C investments",
            "lastUpdatedOn": "2020-03-07",
            "status": "Active",
            "totalValue": 20000,
            "currency": "INR"
        }
    ]


    const listPortfolios = portfolios.map(portfolio =>
        <tr>
            <td>{portfolio.id}</td>
            <td>{portfolio.name}</td>
            <td>{portfolio.tag}</td>
            <td>{portfolio.lastUpdatedOn}</td>
            <td>{portfolio.status}</td>
            <td>{portfolio.totalValue}</td>
            <td>{portfolio.currency}</td>
            <td>
                <EditButton/>
            </td>
        </tr>
    );

    const totalValue = portfolios.map(p => p.totalValue).reduce((a,b) => a+b);
    return (
        <div className={"container"}>
            <h4>Portfolios</h4>
            <h4>Total Value {totalValue}</h4>
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
                {listPortfolios}
                </tbody>
            </table>
        </div>
    )
}

export default PortfolioList