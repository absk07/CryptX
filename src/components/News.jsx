import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import LazyLoader from './LazyLoader';

function News({ simplified }) {
    const count = simplified ? 8 : 50;
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(count);
    const [searchTerm, setSearchTerm] = useState('');
    const [news, setNews] = useState(cryptoNews);
    // console.log(cryptoNews);

    useEffect(() => {
        const filterData = cryptoNews?.filter(n => (
            n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.description.toLowerCase().includes(searchTerm.toLowerCase())
        ));    
        setNews(filterData);
    }, [cryptoNews, searchTerm]);

    if(isFetching) return <LazyLoader />;

    return (
        <>
            {
                !simplified &&
                (<div className="search-crypto">
                    <Input.Search
                        placeholder="Search Crypto News"
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>)
            }
            <Row gutter={[24, 24]}>
                {
                    news?.map((news, i) => (
                        <Col xs={24} sm={12} lg={6} key={i}>
                            <Card className="news-card"
                                hoverable
                                cover={
                                    <img
                                      alt="example"
                                      src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/cryptocurrency-bitcoin_2-sixteen_nine.jpg"
                                    />
                                }
                                actions={[moment(news.date).startOf('ss').fromNow()]}
                            >
                                <a href={news.url} target="_blank" rel="noreferrer">
                                    <Card.Meta
                                        title={news.title}
                                        description={news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                    />
                                </a>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default News;