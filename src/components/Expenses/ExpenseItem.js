import './ExpenseItem.css';
import Card from '../UI/card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem=(props)=>{

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date}></ExpenseDate>
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;