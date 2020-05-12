import React, { useContext } from 'react'
import LibraryContext from './../context/LibraryContext';
import { Group, Card, CardGrid, Header, Div, Title, Button } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

export default function BooksList() {
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <Div>
                    {
                        context.books.map(book => (
                            <Group separator="hide" key={book.id} header={<Header mode="secondary">{book.today}</Header>}>
                                <CardGrid>
                                    <Card size="l">
                                        <div>
                                            <Icon24Cancel  style={{position: 'absolute', right: 10, top: -5}} onClick={() => context.deleteBook(book.id)}/>
                                            <Title style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}><b>Навазние книги:</b> {book.name}</Title>
                                            <Title style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}><b>Автор книги: </b>{book.author}</Title>
                                            <Div>
                                                <Button stretched mode="secondary" size="l" onClick={() => context.deleteBook(book.id)}>
                                                    Прочитал книгу
                                                </Button>
                                            </Div>
                                        </div>
                                    </Card>
                                </CardGrid>
                            </Group>
                        ))
                    }
                </Div>
            )}
        </LibraryContext.Consumer>

    )
}