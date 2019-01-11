import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from './pageHeader'
import TodoForm from '../telas/todoForm'
import TodoList from '../telas/todoList'

const URL = "http://localhost:9090/tarefas"

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `?description=${description}` : ''
        axios.get(`${URL}/${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo.idTodo}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo.idTodo}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo.idTodo}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}