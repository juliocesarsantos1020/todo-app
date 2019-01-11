import React, { Component } from 'react'
import Grid from '../templates/grid'
import IconButton from '../templates/iconButton'

export default class TodoForm extends Component {
    keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        }else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" 
                            placeholder="Adicione uma tarefa"
                            onChange={this.props.handleChange} 
                            onKeyUp={this.keyHandler}
                            value={this.props.description}></input>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd}></IconButton>
                    <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
                    <IconButton style="default" icon="close" onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }
}