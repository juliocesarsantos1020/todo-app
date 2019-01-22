import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../templates/iconButton'
import { markAsDone, markAsPending, remove } from '../actions/todoActions'

class TodoList extends Component {
    renderRows = () => {
        const list = this.props.list || []
        return list.map(todo => (
            <tr key={todo.idTodo}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" 
                            onClick={() => this.props.markAsDone(todo)} hide={todo.done} />
                    <IconButton style="warning" icon="undo"
                             onClick={() => this.props.markAsPending(todo)} hide={!todo.done} />
                    <IconButton style="danger" icon="trash-o" 
                             onClick={() => this.props.remove(todo)} hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispacth => bindActionCreators({ markAsDone, markAsPending, remove }, dispacth)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)