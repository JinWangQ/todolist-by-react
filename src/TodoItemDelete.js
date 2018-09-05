import React, {
	Component
} from 'react';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleFinished = this.handleFinished.bind(this);

	}

	handleFinished() {
		const {
			deleteItem,
			index
		} = this.props;
		deleteItem(index);
	}

	render() {
		const {
			content
		} = this.props;
		return (<div onClick={this.handleFinished}>{"✐ " + content}</div>)
	}
}

export default TodoItem;