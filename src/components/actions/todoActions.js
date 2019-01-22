import axios from 'axios'

const URL = 'http://localhost:9090/tarefas'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    newValue: event.target.value
})

export const search = (description) => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `?description=${description}` : ''
        const request = axios.get(`${URL}/${search}`)
                .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))

    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo.idTodo}`, { ...todo, done: true })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo.idTodo}`, { ...todo, done: false })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo.idTodo}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}