import React, { useState } from 'react'
import { View, Panel, Cell, PanelHeader, Group, CardGrid, Card, Button, Div, Title, Headline, PanelHeaderContext, PanelHeaderContent, List } from '@vkontakte/vkui'
import { PHRASES } from './../PHRASES'

export default function Phrases(props) {
    const [phrase, setPhrase] = useState('Цитата - всего лишь слова, а не приказ к действию.')
    const [contextOpened, setContextOpened] = useState(false)
    let love = PHRASES.love[Math.floor(Math.random() * PHRASES.love.length)];
    let life = PHRASES.life[Math.floor(Math.random() * PHRASES.life.length)];
    let friendship = PHRASES.friendship[Math.floor(Math.random() * PHRASES.friendship.length)];
    return (
        <View>
            <Panel>
                <PanelHeader
                >
                    <PanelHeaderContent
                        onClick={() => setContextOpened(!contextOpened)}
                    >
                        Цитаты
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
                            onClick={() => setContextOpened(!contextOpened)}
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
                            <Div>
                                <Title level="2" style={{ marginBottom: 10 }}>Твоя цитата:</Title>
                                <Headline weight="regular" style={{ marginBottom: 0 }}>{phrase}</Headline>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
                <Group>
                    <Div className="home__button" style={{ bottom: 120 }}>
                        <Button stretched mode="primary" size="l" onClick={() => setPhrase(love)}>
                            Цитата о любви
                        </Button>
                    </Div>
                    <Div className="home__button" style={{ bottom: 70 }}>
                        <Button stretched mode="primary" size="l" onClick={() => setPhrase(life)}>
                            Цитата о жизни
                        </Button>
                    </Div>
                    <Div className="home__button">
                        <Button stretched mode="primary" size="l" onClick={() => setPhrase(friendship)}>
                            Цитата о дружбе
                        </Button>
                    </Div>
                </Group>
            </Panel>
        </View>
    )
}
