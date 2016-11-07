import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="form-group">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="form-group">
          <input className="form-control" ref={node => {
            input = node
          }} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
