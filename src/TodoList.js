import React, {
  Component
} from 'react';
import TodoItem from './TodoItem';



class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });

  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>ok</button>
        </div>
        <ul>
          {this.state.list.map((item, index)=>{
            // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            return <TodoItem content={item} key={index} index={index}/>  
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;