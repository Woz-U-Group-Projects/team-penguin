import React from 'react';
import axios from "axios";
import '../transaction.min.css';
import DecStatementIncome from '../components/transactionHistory/DecStatementIncome';
import DecStatementSavings from '../components/transactionHistory/DecStatementSavings';
import DecStatementExpense from '../components/transactionHistory/DecStatementExpense';
import DecIncome from '../components/calculator/DecIncome';
import DecExpense from '../components/calculator/DecExpense';
import DecSavings from '../components/calculator/DecSavings';
import DecStatementBalance from '../components/calculator/DecStatementBalance';



class DecStatements extends React.Component {
    constructor(props) {
        super(props);
        this.state = { transactions: [] };
    }
    componentDidMount() {
        this.getData();
        this.getIncome();
        this.getExpense();
        this.getSavings();
    };

    getIncome = () => {
        let url = "http://localhost:3001/transactions/income";
        axios.get(url)
            .then(response => this.setState({ transactionsIncome: response.data }))

    };

    getExpense = () => {
        let url = "http://localhost:3001/transactions/expense";
        axios.get(url)
            .then(response => this.setState({ transactionsExpense: response.data }));
    }; d

    getSavings = () => {
        let url = "http://localhost:3001/transactions/savings";
        axios.get(url)
            .then(response => this.setState({ transactionsSavings: response.data }));
    }
    getData = () => {
        let url = "http://localhost:3001/transactions/statements";
        axios.get(url)
            .then(response => this.setState({ transactions: response.data }));
    };

    render() {
        return (
            <div className="form">
                <p className="transactions">December 2020</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Income</th>
                            <th>Expense</th>
                            <th>Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><DecStatementIncome /></td>
                            <td><DecStatementExpense /></td>
                            <td><DecStatementSavings /></td>
                        </tr>
                        <tr>
                            <td>Total Income: <DecIncome /></td>
                            <td>Total Expense: <DecExpense /></td>
                            <td>Total Savings: <DecSavings /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><DecStatementBalance /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DecStatements; 