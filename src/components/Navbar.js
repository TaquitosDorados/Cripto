import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to ="/">Bicoi</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

export default Navbar