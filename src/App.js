import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, Header, PanelHeaderClose, Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './screens/Home'
import About from './screens/About';
import Phrases from './screens/Phrases';
import Urban from './screens/Urban';
import LibraryContext from './context/LibraryContext';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [modalOpen, setModalOpen] = useState(true)
	const [activeView, setActiveView] = useState("library")
	const [books, setBooks] = useState(
		() => {
			const localData = localStorage.getItem('books')
			return localData ? JSON.parse(localData) : []
		}
	)
	const addBook = ({ name, author }) => {
		const id = uuidv4();
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;
		const book = { id, name, author, today }
		setBooks(old => [book, ...old])
	}
	const deleteBook = (bookId) => {
		setBooks(books.filter(book => book.id !== bookId))
	}

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books))
	}, [books])
	return (
		<LibraryContext.Provider value={{
			books: books,
			addBook: addBook,
			deleteBook: deleteBook
		}}>
			<Root activeView={activeView}>
				<View id="main">
					<Home changeScreen={setActiveView} closeModal={setModalOpen} modalOpen={modalOpen} />
				</View>
				<View id="phrases">
					<Phrases changeScreen={setActiveView} />
				</View>
				<View id="about">
					<About changeScreen={setActiveView} />
				</View>
				<View id="library">
					<Urban changeScreen={setActiveView} />
				</View>
			</Root>
		</LibraryContext.Provider>
	)
}

export default App;