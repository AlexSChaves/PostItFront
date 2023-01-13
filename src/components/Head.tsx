import { Link } from 'react-router-dom';
import './styles.css';

const Head = () => {
	return (
		<header className='header'>
			<ul className='links'>
				<Link to='/posts'>Posts</Link>
				<Link to='/create'>Criar</Link>
			</ul>
		</header>
	);
};

export default Head;
