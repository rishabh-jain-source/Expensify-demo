import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense?props.expense.description: '',
            amount: props.expense?props.expense.amount:'',
            note: props.expense?props.expense.note:'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error:''
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value
        
        this.setState(() => {
            return {
                description
            }
        })
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        
            this.setState(() => {
                return { amount }
            })
        
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => {
            return {
                note
            }
        })
    }
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState( () => ({ createdAt }) );
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calenderFocused:focused
            }
        })
    }
    formSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            if (!this.state.description) {
                this.setState(() => {
                    return {
                        error:'enter description'
                    }
                })
            }
            else {
                this.setState(() => {
                    return {
                        error:'enter amount'
                    }
                })
            }
        }
        else {
            this.setState(() => {
                return {
                    error:''
                }
            })
            console.log("submitted")
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                createdAt: `${this.state.createdAt}`,
                amount:parseFloat(this.state.amount,10)
            })
        }
    }
    render() {
        return (<div>
            
            <form onSubmit={this.formSubmit}>
                <input type="text" placeholder="description" value={this.state.description} onChange={this.onDescriptionChange}></input>
                {this.state.error && <p>{ this.state.error  }</p>}
            <input type="number" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange}></input>
            <textarea placeholder="Note Optional" value={this.state.note} onChange={this.onNoteChange}></textarea>
            <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>{false}}
            />
                <button>Save</button>
                </form>
        </div>
        )
    }
}

export default ExpenseForm