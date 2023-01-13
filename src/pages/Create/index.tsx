import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import './styles.css';

const Create = () => {
	const [addBodyText, setAddBodyText] = useState('');

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setAddBodyText(e.target.value);
	};

	let navigate = useNavigate();
	const handleClick = async (content: string) => {
		if (addBodyText) {
			let json = await api.addNewPost(content);
			console.log(json);
			navigate('/posts');
		} else {
			alert('Conteudo vazio');
		}
	};

	return (
		<div className='create-post-area'>
			<div className='create-post'>
				<h1>Criar nova postagem</h1>
				<textarea
					onChange={handleChange}
					value={addBodyText}
					placeholder='Digite sua nota'
				></textarea>
				<button onClick={() => handleClick(addBodyText)}>Enviar Post</button>
			</div>
		</div>
	);
};

export default Create;
