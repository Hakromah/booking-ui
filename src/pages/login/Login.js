import { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	//navigate to homepage if LOGIN successfull
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axios.post('/auth/login', credentials);
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
			navigate('/');
		} catch (error) {
			dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
		}
	};

	return (
		<div className="login">
			<h1>Enter your username and password</h1>
			<div className="lContainer">
				<input
					type="text"
					placeholder="username"
					id="username"
					onChange={handleChange}
					className="lInput"
				/>
				<input
					type="password"
					placeholder="password"
					id="password"
					onChange={handleChange}
					className="lInput"
				/>
				<button
					disabled={loading}
					onClick={handleLogin}
					className="lButton"
				>
					Login
				</button>
				{error && <span>{error.message}</span>}
			</div>
		</div>
	);
};

export default Login;
