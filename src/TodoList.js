import React, {
  Component,
  Fragment
} from 'react';
import TodoItem from './TodoItem';
import TodoItemDelete from './TodoItemDelete';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
      deleteList: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getDeleteTodoItem = this.getDeleteTodoItem.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTodoItem() {
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.addTodoItem();
    }
  }

  handleBtnClick() {
    this.addTodoItem();
  }

  handleDelete(index) {
    const list = [...this.state.list];
    const deleteItem = list[index];
    list.splice(index, 1);
    this.setState({
      list,
      deleteList: [...this.state.deleteList, deleteItem]
    });
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            deleteItem={this.handleDelete} 
            content={item} 
            key={index} 
            index={index}
          />
        )
      })
    )
  }

  handleFinished(index) {
    const deleteList = [...this.state.deleteList];
    deleteList.splice(index, 1);
    this.setState({
      deleteList: deleteList
    });
  }

  getDeleteTodoItem() {
    return (
      this.state.deleteList.map((item, index) => {
        return (
          <TodoItemDelete deleteItem={this.handleFinished} 
            content={item} 
            key={index} 
            index={index}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* Header */} 
          <div className="header inrow">
            <img src={require('./image/logo.png')} alt="logo.png" width="32" className="-col-auto logo"/>
            <h1 className="hcaption">Todo List by React</h1>
          </div>   

          {/* input area */} 
          <div className="input-area">
            <div className="input-group mb-3">
              <input type="text" className="form-control input-bar" placeholder="To do ..."   value={this.state.inputValue} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress}/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary add-button" type="button" onClick={this.handleBtnClick}>Add</button>
              </div>
            </div> 
          </div>
        </div>

        <div className="listArea">
          <span>To do:(click task to mark as Complete)</span>
          <ul>{this.getTodoItem()}</ul>
        </div>

        <div className="deleteArea">
          <span>Done:(click to delete task)</span>
          <ul>{this.getDeleteTodoItem()}</ul>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;