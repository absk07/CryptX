import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import  { Col, Row, Typography, Statistic } from 'antd';
import { Cryptocurrencies, News, Exchanges } from '../components/index';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

function Homepage() {
    const { data, isFetching } = useGetCryptosQuery(10);
    
    const globalStats = data?.data?.stats;
    // console.log(globalStats);

    if(isFetching) return <Loader />;

    return (
        <>
            <Typography.Title level={2} className="heading">
                Global Crypto Stats
            </Typography.Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic>
                </Col>
            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">
                    Top 10 Cryptocurrencies in the world
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Typography.Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">
                    Top Ranked Exchanges
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/exchanges">Show More</Link>
                </Typography.Title>
            </div>
            <Exchanges simplified />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">
                    Latest Crypto News
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/news">Show More</Link>
                </Typography.Title>
            </div>
            <News simplified />
        </>
    );
}

export default Homepage;