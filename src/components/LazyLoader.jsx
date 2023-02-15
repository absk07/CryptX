import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Skeleton } from 'antd';
const { Meta } = Card;

const LazyLoader = () => {
    return (
        <>
            <Row className="crypto-card-container" gutter={[32, 32]}>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<LoadingOutlined />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col className="crypto-card" xs={24} sm={12} lg={6}>
                    <Card 
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={true}
                    >
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default LazyLoader;