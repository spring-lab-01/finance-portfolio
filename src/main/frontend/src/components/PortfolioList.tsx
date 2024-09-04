
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {Account} from "./Account.tsx";

export function PortfolioList() {
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

    //const [portfolios, setPortfolios] = useState([]);
    // const portfolios = [
    //     {
    //         "id": 12,
    //         "name": "MutualFunds",
    //         "tag": "India MF Investments",
    //         "lastUpdatedOn": "2024-05-08",
    //         "status": "Active",
    //         "totalValue": 40000,
    //         "currency": "INR"
    //     },
    //     {
    //         "id": 13,
    //         "name": "80C",
    //         "tag": "all 80 C investments",
    //         "lastUpdatedOn": "2020-03-07",
    //         "status": "Active",
    //         "totalValue": 20000,
    //         "currency": "INR"
    //     },
    //     {
    //         "id": 10,
    //         "name": "Checking Account",
    //         "tag": "USA Checkin Account",
    //         "lastUpdatedOn": "2024-05-08",
    //         "status": "Active",
    //         "totalValue": 2000,
    //         "currency": "USD"
    //     },
    //     {
    //         "id": 11,
    //         "name": "Savings Account",
    //         "tag": "USA Savings Account",
    //         "lastUpdatedOn": "2020-03-07",
    //         "status": "Active",
    //         "totalValue": 5000,
    //         "currency": "USD"
    //     }
    // ]




    const inrPortfolios = accounts.filter(p=> p.currency == 'INR');
    const usdPortfolios = accounts.filter(p=> p.currency == 'USD');

    const inrPortfolioValue = inrPortfolios.map(p => p.totalValue).reduce((a,b) => a+b, 0);
    const usdPortfolioValue = usdPortfolios.map(p => p.totalValue).reduce((a,b) => a+b, 0);


    const inrPortfolio = inrPortfolios.map(portfolio =>
        <tr>
            <td>{portfolio.id}</td>
            <td>{portfolio.name}</td>
            <td>{portfolio.status}</td>
            <td>{portfolio.totalValue}</td>
            <td>{portfolio.currency}</td>
            <td>

            </td>
        </tr>
    );

    const usdPortfolio = usdPortfolios.map(portfolio =>
        <tr>
            <td>{portfolio.id}</td>
            <td>{portfolio.name}</td>
            <td>{portfolio.status}</td>
            <td>{portfolio.totalValue}</td>
            <td>{portfolio.currency}</td>
            <td>

            </td>
        </tr>
    );

    return (
        <div className={"container"}>
            <h4>Portfolios</h4>
            <br/>
            <br/>
            <h4>Total Value - {inrPortfolioValue} INR</h4>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Total Value</th>
                    <th>Currency</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {inrPortfolio}
                </tbody>
            </table>
            <br/>
            <br/>
            <h4>Total value - {usdPortfolioValue} USD</h4>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Total Value</th>
                    <th>Currency</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {usdPortfolio}
                </tbody>
            </table>
        </div>
    )
}

export default PortfolioList;

