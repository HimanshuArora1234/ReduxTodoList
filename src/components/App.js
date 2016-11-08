import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import VisibleUserList from '../containers/VisibleUserList';

const App = ( {params} ) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all'}
    />
    <Footer />
    <VisibleUserList />
  </div>
);

export default App;
