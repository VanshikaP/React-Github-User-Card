import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class UserForm extends Component {

    state={
        username: ''
    }

    handleChange = e => {
        this.setState({
            username: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.updateUsername(this.state.username)
    }
    render() {
        return (
            <form className='user-form'>
                <p>Want to see your info?</p>
                <TextField className='user-input' label='Your GitHub Username' variant='outlined' value={this.username} onChange={this.handleChange}required />
                <Button color='primary' type='submit' variant='contained' onClick={this.handleSubmit}>Show</Button>
            </form>
        )
    }
}

export default UserForm
