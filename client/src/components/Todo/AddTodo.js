import React from 'react'

class AddTodo extends React.Component {
    constructor (props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value)
            e.target.value = ''
        }
    }

    render () {
        return (
            <input 
                onKeyPress={this.handleSubmit}
            />
        )
    }
}


export default AddTodo