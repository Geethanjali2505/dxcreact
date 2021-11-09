import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

       return this.state.isLoggedIn && <div>welcome anjali</div>
       /*  return(
            this.state.isLoggedIn ?
            <div>welcome anjali</div> :
            <div>welcome guest</div>
        ) */

       /*  let message 
        if(this.state.isLoggedIn){
            message = <div>welcome anjali</div>
        }
        else{
            message = <div>welcome guest</div>
        }
        return <div>{message}</div> */
       /*  if(this.state.isLoggedIn){
            return <div>welcome anjali</div>
        }
        else{
            return <div>welcome guest</div>
        } */
       /*  return (
            <div>
                <div>welcome anjali</div>
                <div>welcome guest</div>

            </div>
        ) */
    }
}

export default UserGreeting