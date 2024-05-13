import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function Chats() {

    const storedUser = JSON.parse(localStorage.getItem("user"));

	return (
		<ChatEngine
			projectID='82449a70-f6ff-48cd-8def-3643f4067354'
			userName={storedUser.username}
			userSecret={storedUser.password}
		/>
	);
}

export default Chats;
