import React from 'react'
import Todo from './Todo'

class ListTodos extends React.Component {
    componentDidMount() {
        this.props.getTodos()
    }
    render () {
        const { todos } = this.props
        return (
            <ul>
                { 
                    todos.map(todo => <Todo key={todo._id} todo={todo} />)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default ListTodos