import React, { Component } from 'react'
import IconButton from '../templates/iconButton';

export default class TodoList extends Component {
    renderRows = () => {
        const list = this.props.list || []
        return list.map(todo => (
            <tr key={todo.idTodo}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" 
                            onClick={() => this.props.handleMarkAsDone(todo)} hide={todo.done} />
                    <IconButton style="warning" icon="undo"
                             onClick={() => this.props.handleMarkAsPending(todo)} hide={!todo.done} />
                    <IconButton style="danger" icon="trash-o" 
                             onClick={() => this.props.handleRemove(todo)} hide={!todo.done} />
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