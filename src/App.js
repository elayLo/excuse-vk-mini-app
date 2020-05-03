import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, Header, PanelHeaderClose, Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './screens/Home'
import About from './screens/About';

function App() {
	const [activeView, setActiveView] = useState("main")
	return (
		<Root activeView={activeView}>
			<View id="main">
				<Home changeScreen={setActiveView} />
			</View>
			<View id="about">
				<About changeScreen={setActiveView} />
			</View>
		</Root>
	)
}

export default App;