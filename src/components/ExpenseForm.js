import React,{Fragment} from 'react'
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
                return {
                    amount
                   
                }
                
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
                        error:'Enter Description*'
                    }
                })
            }
            else {
                this.setState(() => {
                    return {
                        error:'Enter Amount*'
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
        return (<div >
            
                <form onSubmit={this.formSubmit} className="form" >
                <input className="text-input input-group" type="text"  placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange}></input>
                {this.state.error && <p className="error">{ this.state.error  }</p>}
            <input className="text-input input-group" type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}></input>
            <textarea className="textarea-input input-group" placeholder="Note Optional" value={this.state.note} onChange={this.onNoteChange}></textarea>
            <SingleDatePicker
                date={this.state.createdAt}
                    onDateChange={() => { this.onDateChange(date) }}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>{false}}
            />
            </form>
                <button className="button "  onClick={this.formSubmit} > Save</button>
            
        </div>
        )
    }
}

export default ExpenseForm