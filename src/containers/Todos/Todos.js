import React, {useState, useMemo} from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/commons/Input/Input';
import List from 'src/components/commons/List/List';
import './Todos.scss';

const Todos = () => {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleInputChange = (e) => {
		setTask(e.target.value)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			setTasks([...tasks, task]);
			setTask('')
		}
	}
	
	const renderTaskList = useMemo(() => {
		return <List data={tasks} />
	}, [tasks])

	return (
		<>
		<h1>Todos</h1>
		<Input value={task} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
		{renderTaskList}
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
