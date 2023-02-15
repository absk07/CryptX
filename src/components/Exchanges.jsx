import React, { useState } from 'react';
import millify from 'millify';
import { Row, Typography, Avatar, Select, Table } from 'antd';
import { useGetCryptosQuery, useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Exchanges = ({ simplified }) => {
    const limit = simplified ? 10 : 100;
    const [searchTerm, setSearchTerm] = useState({coinId: 'Qwsogvtv82FCd', name: 'Bitcoin'});
    const { data: cryptos } = useGetCryptosQuery(limit);
    const { data, isFetching } = useGetExchangesQuery({ coinId: searchTerm['coinId'], limit });
    const exchangesList = data?.data?.exchanges;
    // console.log(exchangesList)
    // console.log(searchTerm);

    if(isFetching) return <Loader />;

    const columns = [
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank'
        },
        {
            title: 'Exchanges',
            dataIndex: 'exchanges',
            key: 'exchanges'
        },
        {
            title: '24h Trade Volume',
            dataIndex: '_24hTradeVolume',
            key: '_24hTradeVolume'
        },
        {
            title: 'Markets',
            dataIndex: 'markets',
            key: 'markets'
        },
        {
            title: `${searchTerm.name} Price`,
            dataIndex: 'price',
            key: 'price'
        }
    ];

    const tableData = exchangesList.map(exchange => (
        {
            key: exchange.uuid,
            rank: exchange.rank,
            exchanges: (
                <Row>
                    <Avatar className="exchange-image" src={exchange.iconUrl} />
                    <Typography.Title level={5}>{exchange.name}</Typography.Title>
                </Row>
            ),
            _24hTradeVolume: millify(exchange['24hVolume']),
            markets: millify(exchange.numberOfMarkets),
            price: millify(exchange.price)
        }
    ));
    
    return (
        <>
            {
                !simplified && (
                <div className="search-crypto">
                    <Select
                        defaultValue={searchTerm.coinId}
                        className="select-exchange"
                        placeholder="Select Crypto"
                        style={{width: 200}}
                        onChange={(label, value) => setSearchTerm({ coinId: value.key, name: value.children })}
                    >
                        {
                            cryptos?.data?.coins?.map(coin => <Select.Option key={coin.uuid}>{coin.name}</Select.Option>)
                        }
                    </Select>
                </div>)
            }
            <Table columns={columns} dataSource={tableData} />
        </>
    );
};

export default Exchanges;