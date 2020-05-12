import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, Header, Tabbar, Epic, TabbarItem, Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './screens/Home'
import About from './screens/About';
import Phrases from './screens/Phrases';
import Urban from './screens/Urban';
import LibraryContext from './context/LibraryContext';
import { v4 as uuidv4 } from 'uuid';
import { Icon28NewsfeedOutline } from '@vkontakte/icons/dist/28/newsfeed_outline'
import { Icon28SearchOutline } from '@vkontakte/icons/dist/28/search_outline'
import { Icon28MessageOutline } from '@vkontakte/icons/dist/28/message_outline'
import { Icon28Notifications } from '@vkontakte/icons/dist/28/notifications'
import { Icon28More } from '@vkontakte/icons/dist/28/more'

function App() {
	const [modalOpen, setModalOpen] = useState(true)
	const [activeView, setActiveView] = useState("main")
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