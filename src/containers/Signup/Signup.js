import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register } from '../../store/actions/registerAction';
import { openNotification } from '../../components/Notification/notification';
import CommonForm from '../../components/Form/Form';

class Signup extends React.Component {
	handleSubmit = values => {
		this.props.register(values);
	};

	componentDidUpdate(prevProps) {
		if (this.props.success) {
			this.props.history.push('/auth');
		}
		if (this.props.errors && this.props.errors !== prevProps.errors) {
			openNotification('error', this.props.errors.message);
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<CommonForm
				{...this.props}
				onSubmit={this.handleSubmit}
				className="signup-form"
			>
				<Form.Item>
					{getFieldDecorator('email', {
						rules: [
							{
								required: true,
								message: 'Please input your Email!'
							}
						]
					})(
						<Input
							type="email"
							prefix={
								<Icon
									type="user"
									style={{ color: 'rgba(0,0,0,.25)' }}
								/>
							}
							placeholder="Email"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: 'Please input your Password!'
							}
						]
					})(
						<Input
							prefix={
								<Icon
									type="lock"
									style={{ color: 'rgba(0,0,0,.25)' }}
								/>
							}
							type="password"
							placeholder="Password"
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="signup-form-button"
					>
						Register
					</Button>
				</Form.Item>
			</CommonForm>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_signup' })(Signup);

const mapStateToProps = state => ({
	success: state.register.success,
	errors: state.errors,
	isLoading: state.register.isLoading,
	data: state.register.data
});

const mapDispatchToProps = dispatch => {
	return {
		register: userData => dispatch(register(userData))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(WrappedNormalLoginForm));
