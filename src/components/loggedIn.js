import React from 'react';

class loggedIn extends React.Component {
    state = {
        value: 15,
        salary: 100.00,
        next: false
    }
    displayExpense(){
        let monthlySal = this.state.salary/12
        let expense = monthlySal * (this.state.value / 100)
        return expense
    }
    displaySavings(){
        let monthlySal = this.state.salary / 12
        let savings = monthlySal * (1- (this.state.value / 100))
        return savings
    }
    displayMoney = (num)=>{
        return `$${parseFloat(num).toFixed(2)}`      
    }
    handleSlide = (e) =>{
        this.setState({value: e.target.value})
    }

    handleSalary = (e) => {
        const salary = e.target.value
        this.setState({ salary })
    }

    handleNext = () => {
        this.setState({next:!this.state.next})
    }

    dynamicSlider = () => {
        if (!this.state.next){
            return(
                <div>
                    <h3>{`Welcome to your monthly budget ${this.props.user.givenName}`}</h3>
                    <input type='range' min={1} max={30} value={this.state.value} onChange={(e) => this.handleSlide(e)}></input>
                    <h6>{`${this.state.value}%`}</h6>
                    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                        <h6>Your Salary</h6>
                        <input style={{ height: '1vh', width: 'auto', display: 'flex' }} type='text' value={this.state.salary} onChange={(e) => this.handleSalary(e)}></input>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <h3>{`Thank You ${this.props.user.givenName}`}</h3>
                    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                        <h6>Your Election</h6>
                        <h6>{`${this.state.value}%`}</h6>
                    </div>
                    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                        <h6>Your Salary</h6>
                        <h6>{this.displayMoney(this.state.salary)}</h6>
                    </div>
                </div>
            )
        }
    }

    render(){
        return (
            <div style={{outlineStyle:'solid', outlineColor:'rgb(17,17,17)', margin: '15%', padding: '5%'}}>
                {this.dynamicSlider()}
                <div style={{display:'flex', margin:'auto', justifyContent:'space-around'}}>
                    <h6>Your Expense</h6>
                    <h6>{this.displayMoney(this.displayExpense())}</h6>
                </div>
                <div style={{display:'flex', margin:'auto', justifyContent:'space-around'}}>
                    <h6>Your Saving</h6>
                    <h6>{this.displayMoney(this.displaySavings())}</h6>
                </div>
                {this.state.next? null: <input type='button' value='Next' onClick={()=> this.handleNext()}></input>}
            </div>
        )
    }
}
export default loggedIn