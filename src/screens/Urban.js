import React, { useState, useContext } from 'react'
import { View, Panel, FormLayout, FormLayoutGroup, Card, CardGrid, Input, List, Div, Button, Cell, PanelHeader, PanelHeaderContent, PanelHeaderContext, Group } from '@vkontakte/vkui'
import LibraryContext from '../context/LibraryContext'
import BooksList from '../components/BookList'

export default function Urban(props) {
    const [contextOpened, setContextOpened] = useState(false)
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const context = useContext(LibraryContext)
    const onSubmit = () => {
        if (name && author) {
            context.addBook({ name, author })
        } else {
            return null
        }
        setName('')
        setAuthor('')
    }
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <View>
                    <Panel>
                        <PanelHeader
                        >
                            <PanelHeaderContent
                                onClick={() => setContextOpened(!contextOpened)}
                            >
                                Библиотека
                        <img src={require('./../img/multimedia-option.svg')} alt="" className="home__arrow-down" onClick={() => setContextOpened(!contextOpened)} />
                            </PanelHeaderContent>
                        </PanelHeader>
                        <PanelHeaderContext opened={contextOpened} onClose={() => setContextOpened(!contextOpened)}>
                            <List>
                                <Cell
                                    data-mode="all"
                                    onClick={() => props.changeScreen("main")}
                                >
                                    Главная
                        </Cell>
                                <Cell
                                    data-mode="managed"
                                    onClick={() => props.changeScreen("phrases")}
                                >
                                    Цитаты
                        </Cell>
                                <Cell
                                    data-mode="managed"
                                    onClick={() => setContextOpened(!contextOpened)}
                                >
                                    Библиотека
                        </Cell>
                                <Cell
                                    data-mode="managed"
                                    onClick={() => props.changeScreen("about")}
                                >
                                    О приложении
                        </Cell>

                            </List>
                        </PanelHeaderContext>
                        <FormLayout>
                            <FormLayoutGroup top="Введите название книги">
                                <Input type="text" placeholder="Введите название" value={name} onChange={(e) => setName(e.target.value)} />
                            </FormLayoutGroup>
                        </FormLayout>
                        <FormLayout style={{marginTop: -10}}>
                            <FormLayoutGroup top="Введите автора книги">
                                <Input type="text" placeholder="Введите автора" value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </FormLayoutGroup>
                        </FormLayout>
                        <Div>
                            <Button stretched mode="primary" size="l" onClick={() => onSubmit()}>
                                Добавить книгу
                        </Button>
                        </Div>
                        <BooksList />

                    </Panel>
                </View>
            )}

        </LibraryContext.Consumer>
    )
}
