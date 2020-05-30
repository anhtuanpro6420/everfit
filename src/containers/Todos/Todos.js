import React, {useState, useMemo, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Input from 'src/components/commons/Input/Input';
import List from 'src/components/commons/List/List';
import './Todos.scss';

const Todos = () => {
	const initialState = [
		{
			id: uuid(),
			name: 'task1',
			isCompleted: false
		},
		{
			id: uuid(),
			name: 'task2',
			isCompleted: true
		}
	]
	const [taskName, setTaskName] = useState('');
	const [taskStatus, setTaskStatus] = useState(false);
	const [tasks, setTasks] = useState(initialState);

	const handleInputChange = (e) => {
		setTaskName(e.target.value)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			const newTask = {
				id: uuid(),
				name: taskName,
				isCompleted: taskStatus
			}
			setTasks([...tasks, newTask]);
			setTaskName('');
		}
	}

	const handleSelectItem = (e) => {
		console.log(e.target.checked)
	}

	const handleInputItemChange = (e, item) => {
		if (tasks && tasks.length) {
			const indexItem = tasks.findIndex(el => el.id === item.id);
			if (indexItem > -1) {
				tasks[indexItem].name = e.target.value;
			}
		}
		setTasks(tasks);
	}

	return (
		<>
		<h1>Todos</h1>
		<Input value={taskName} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
		<List data={tasks} onSelectItem={handleSelectItem} onInputItemChange={handleInputItemChange}/>
		<Link to="/new-feeds">New feeds</Link>
		</>	
	);
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
	return {
		// getPosts: () => dispatch(getPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
