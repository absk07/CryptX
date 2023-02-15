import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import  { Card, Col, Row, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import LazyLoader from './LazyLoader';

function Cryptocurrencies({ simplified }) {
    const count = simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptosQuery(count);
    const cryptoList = data?.data?.coins;
    const [cryptos, setCryptos] = useState(cryptoList);
    const [searchTerm, setSearchTerm] = useState('');
    // console.log(cryptos);

    useEffect(() => {
        const filterData = cryptoList?.filter(coin => (
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        ));    
        setCryptos(filterData);
    }, [cryptoList, searchTerm]);
    
    if(isFetching) return <LazyLoader />;
    
    return (
        <>
            {
                !simplified &&
                (<div className="search-crypto">
                    <Input.Search
                        placeholder="Search Cryptos"
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>)
            }
            <Row className="crypto-card-container" gutter={[32, 32]}>
                {
                    cryptos?.map(currency => (
                        <Col className="crypto-card" xs={24} sm={12} lg={6} key={currency.uuid}>
                            <Link to={`/crypto/${currency.uuid}`}>
                                <Card
                                    title={`${currency.rank}. ${currency.name}`}
                                    extra={
                                        <img 
                                            className="crypto-icon" 
                                            src={currency.iconUrl} alt={currency.name}
                                            style={{maxWidth: '40px', maxHeight: '40px'}}
                                        />
                                    }
                                    hoverable
                                >
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {millify(currency.change)}%</p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default Cryptocurrencies;