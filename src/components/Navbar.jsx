import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../assets/images/cryptocurrency.png';

const items = [
    {
        label: (<Link to="/">Home</Link>),
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: (<Link to="/cryptocurrencies">Cryptocurrencies</Link>),
        key: 'crypto',
        icon: <FundOutlined />
    },
    {
        label: (<Link to="/exchanges">Exchanges</Link>),
        key: 'exchanges',
        icon: <MoneyCollectOutlined />
    },
    {
        label: (<Link to="/news">News</Link>),
        key: 'news',
        icon: <BulbOutlined />
    }
]

function Navbar() {
    const [current, setCurrent] = useState();
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        screenSize <= 999 ? setActiveMenu(false) : setActiveMenu(true);
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title className="logo" level={2}>
                    <Link to="/">CryptX</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={e => setActiveMenu(!activeMenu)}>
                    <MenuOutlined theme="dark" />
                </Button>
            </div>
            {
                activeMenu && 
                <Menu
                    onClick={e => setCurrent(e.key)} 
                    selectedKeys={[current]}
                    theme="dark" 
                    items={items} 
                />
            }
        </div>
    );
}

export default Navbar;