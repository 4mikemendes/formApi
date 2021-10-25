import React, {Component} from "react"

class Form extends Component {
constructor() {
    super()
    this.state = {
        firstName: " ",
        lastName: " "
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(e) {
this.setState({
        [e.target.name]: e.target.value
})
}

render() {
    return(
       <form>
           <input type="text" placeholder={"first Name"} 
           name="firstName"
           onChange={this.handleChange}/>
           <input type="text" placeholder={"last Name"} 
           name="lastName"
           onChange={this.handleChange}/>
           <h1>{this.state.firstName} {this.state.lastName}</h1>
       </form>
    ) 
}
}

export default Form