import React from 'react';
import DashboardButton from './DashboardButton'
import NewFeedButton from './NewFeedButton'
import PendUserButton from './PendUserButton'
import PendPostButton from './PendPostButton'
import appName from '../../assets/images/app-name.png';

class ToolBar extends React.Component {

    state = {
        toolBarButton: false
    }

    handleToolBarButton = (event) => {
        this.setState ({
            toolBarButton: !this.state.toolBarButton
        })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                gap: '10px',
                width: '198px',
                height: '670px',
                alignItems: 'center',
                // justifyContent: 'center',
                borderRight: '2px solid gray',
            }}>
                <img 
                            src={appName}  
                            alt="AppName image" 
                            style={{ 
                                width: '200px',
                                flexShrink: 0,
                                objectFit: 'cover', // giữ tỉ lệ hình ảnh
                                marginBottom: '-10px', // khoảng cách dưới hình ảnh
                                marginTop: '0px',
                                marginLeft: '0px', 
                            }}
                        />
                <DashboardButton/>
                <NewFeedButton/>
                <PendUserButton/>
                <PendPostButton/>
            </div>
        )
    }
}

export default ToolBar;
