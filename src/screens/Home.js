import React, { useState } from 'react';
import { Panel, View, PanelHeader, Button, Div, Group, Headline, Title, Card, CardGrid, Text, PanelHeaderContent, Cell, List, PanelHeaderContext } from '@vkontakte/vkui';
import { Excuses } from './../Data'
import './Home.sass'

export default function Home(props) {
    const [phrase, setPhrase] = useState('Корм кончился. У меня всего лишь лапки, сделаю завтра')
    const [contextOpened, setContextOpened] = useState(false)
    let fail = Excuses.fail[Math.floor(Math.random() * Excuses.fail.length)];
    let action = Excuses.action[Math.floor(Math.random() * Excuses.action.length)];
    let date = Excuses.date[Math.floor(Math.random() * Excuses.date.length)];
    let general = Excuses.general[Math.floor(Math.random() * Excuses.general.length)];
    var item = general + '. ' + fail + '. ' + action + ' ' + date + '. ';
    localStorage.setItem('seen', false)
    const [modalOpen, setModalOpen] = useState(props.modalOpen)
    const seenButton = () => {
        props.closeModal(false)
        props.changeScreen("phrases")
    }
    return (
        <View>
            <Panel>
                <PanelHeader
                >
                    <PanelHeaderContent
                        onClick={() => setContextOpened(!contextOpened)}
                    >
                        Главная
                        <img src={require('./../img/multimedia-option.svg')} alt="" className="home__arrow-down" onClick={() => setContextOpened(!contextOpened)} />
                    </PanelHeaderContent>
                </PanelHeader>
                <PanelHeaderContext opened={contextOpened} onClose={() => setContextOpened(!contextOpened)}>
                    <List>
                        <Cell
                            data-mode="all"
                            onClick={() => setContextOpened(!contextOpened)}
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
                            onClick={() => props.changeScreen("about")}
                        >
                            О приложении
                        </Cell>

                    </List>
                </PanelHeaderContext>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            {
                                modalOpen ? <Div>
                                <Title level="2" style={{ marginBottom: 10, color: '#ff7000' }}>Новая версия приложения!</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>В новой версии приложения была добавлена вкладка "Цитата". Данная страница предназначена для людей, любящих использовать цитаты в своей повседневной жизни или для тех, кому они просто нравяться.</Headline>
                                <Button stretched mode="secondary" size="l" onClick={seenButton} style={{marginTop: 10}}>
                                    Попробовать
                            </Button>
                            </Div> : ""
                            }

                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow" style={modalOpen ? {marginTop: 10} : {marginTop: -10}}>
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Зачем тебе это?</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>У каждого бывало, что нужно придумать правдоподобную отмазку для заказчика/директора/тимлида, не так ли? Так вот, данное приложение поможет вам с этим!</Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Твоя отмазка:</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>{phrase}</Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group>
                    <Div className="home__button">
                        <Button stretched mode="primary" size="l" onClick={() => setPhrase(item)}>
                            Придумать отмазку
                        </Button>
                    </Div>
                </Group>

            </Panel>
        </View>
    )
}