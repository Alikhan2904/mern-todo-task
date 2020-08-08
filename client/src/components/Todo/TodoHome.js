import React, { useState, useEffect } from 'react';

function TodoHome() {
  return (
    <div>
      <List />
    </div>
  );
}

const List = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch('todos/getAll');
    setTodos(await res.json());
  };

  const addTodo = async () => {
    await fetch('todos/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text, isCompleted: false }),
    });

    fetchTodos();
    setText('');
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const items = todos.map((todo) => (
    <Item todo={todo} key={todo._id} fetchTodos={fetchTodos} />
  ));

  return (
    <div className='container'>
      <div className='jumbotron mt-5'>
        <div className='col-sm-8 mx-auto'>
          <h1 className='text-center'>ADD A TODO</h1>
        </div>
        <div className='ui centered card' style={{ width: '500px' }}>
          <div className='content'>
            <div className='header' style={{ textAlign: 'center' }}>
              Todo List
            </div>
          </div>
          <div className='content'>
            <div className='ui relaxed divided list'>{items}</div>
          </div>
          <div className='extra content'>
            <div className='fluid ui action input'>
              <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
              <button
                className='ui teal right labeled icon button'
                onClick={addTodo}
              >
                <i className='plus icon'></i>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = (props) => {
  const { isCompleted, text, _id } = props.todo;

  const deleteTodo = async () => {
    await fetch(`todos/delete/${_id}`, {
      method: 'POST',
    });
    props.fetchTodos();
  };

  const toggleDone = async () => {
    await fetch(`todos/complete/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted: !isCompleted, text }),
    });

    props.fetchTodos();
  };

  return (
    <div className='item'>
      {isCompleted ? (
        <i
          className='left floated green check square outline icon'
          onClick={toggleDone}
        ></i>
      ) : (
        <i
          className='left floated square outline icon'
          onClick={toggleDone}
        ></i>
      )}
      {text}
      <i className='right floated red trash icon' onClick={deleteTodo}></i>
    </div>
  );
};

export default TodoHome;
