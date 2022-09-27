import React, {useState} from 'react';

import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css"

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    
    /* let title = props.title;  we romove this variable due to useState()*/
    const clickHandler = () => {
       /*  title = "updated"  this also belongs to title variable*/

       setTitle("updated!!"); /* setTitle()=> this is updating function which updates, and it belongs to useState */
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
             <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
             </div>
             {/* <button onClick={()=> {console.log("clicked")}}>Change Title</button> */} 
             {/* this is anonymous arrow function */}
             <button onClick={clickHandler}>change Title</button>
        </Card>
    );
};

export default ExpenseItem;