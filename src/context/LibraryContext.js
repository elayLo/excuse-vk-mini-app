import React from 'react'

const LibraryContext = React.createContext({
    books: [
        {
            id: 0,
            name: 'Harry Potter and methods of rationality',
            author: 'Elieser Yudkovski',
        },
        {
            id: 1,
            name: 'Harry Potter and the philosopher stone',
            author: 'Joan Roaling'
        }
    ],
    addBook: ({name, author}) => {},
    deleteBook: (bookId) => {},
})

export default LibraryContext