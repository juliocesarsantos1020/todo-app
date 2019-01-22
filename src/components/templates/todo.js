import React, { Component } from 'react'

import PageHeader from './pageHeader'
import TodoForm from '../telas/todoForm'
import TodoList from '../telas/todoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}