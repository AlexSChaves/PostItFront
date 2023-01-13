import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';

import Create from './pages/Create';
import Head from './components/Head';

const App = () => {
	return (
		<BrowserRouter>
			<Head />
			<Routes>
				<Route path='posts' element={<Posts />} />
				<Route path='create' element={<Create />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
