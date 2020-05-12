import React, { useState } from 'react';
import { Panel, View, PanelHeader, Button, Div, Group, Headline, Title, PanelHeaderClose, CardGrid, Card, Header, PanelHeaderContent, Cell, List, PanelHeaderContext } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'

export default function About(props) {
    const [contextOpened, setContextOpened] = useState(false)
    return (
        <View>
            <Panel>
                <PanelHeader
                >
                    <PanelHeaderContent
                        onClick={() => setContextOpened(!contextOpened)}
                    >
                        О приложении
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
                            onClick={() => props.changeScreen("library")}
                        >
                            Библиотека 
                        </Cell>
                        <Cell
                            data-mode="managed"
                            onClick={() => setContextOpened(!contextOpened)}
                        >
                            О приложении
                        </Cell>
                    </List>
                </PanelHeaderContext>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l" mode="shadow">
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
                                <Title level="2" style={{ marginBottom: 10 }}>Кем сделано?</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>Сделанно <a href="https://vk.com/s.sergeenkov">Александром Сергеенковым</a></Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group>
                <Div className="home__button" style={{bottom: 70}}>
                        <Button stretched mode="primary" size="l" onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 195028399})}>
                            Сообщество с приложениями
                        </Button>
                    </Div>
                    <Div className="home__button">
                        <Button stretched mode="secondary" size="l" onClick={() => bridge.send("VKWebAppAllowNotifications", {})}>
                            Узнавать о приложениях
                        </Button>
                    </Div>
                </Group>
            </Panel>
        </View>
    )
}