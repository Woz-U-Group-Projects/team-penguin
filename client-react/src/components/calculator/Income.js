import React from 'react';
import axios from 'axios';
import '../../transaction.min.css';
import CurrencyFormat from 'react-currency-format';
import MayIncome from './MayIncome';
// npm install react-currency-format --save

class Income extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            transactions: []
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        this.setState({
            isHover: true
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            isHover: false
        });
    }

    componentDidMount() {
        this.getIncome();
    };

    getIncome = () => {
        let url = "http://localhost:3001/transactions/income";
        axios.get(url)
            .then(response =>
                this.setState({
                    transactions: response.data
                })
            );
    };

    render() {
        const amounts = this.state.transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0)
        return (
            <div>
                <h1 className="total" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    {
                        this.state.isHover
                            ? <div><h6>Last Month: </h6><MayIncome thousandSeparator={true} prefix={'$'} /></div>
                            : <div><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
                    }
                </h1>
            </div>
        )
    }
}

export default Income; 