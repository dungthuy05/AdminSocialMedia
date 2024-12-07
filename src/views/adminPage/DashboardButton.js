import React from 'react';
import image2 from '../../assets/images/2.png';

class DashboardButton extends React.Component {

    state = {
        dashboardButton: false
    }

    handleDashboardButton = (event) => {
        this.setState ({
            dashboardButton: !this.state.dashboardButton
        })
    }

    render() {
        let {dashboardButton} = this.state;
        let checkDashboardButton = dashboardButton === true? 'dashboardButton = true' : 'dashboardButton = false';
        return (
            <>
                {dashboardButton === false ?
                    <div>
                        <button 
                            style={{
                                flexShrink: 1,
                                display: 'inline-flex',
                                cursor: 'pointer',
                                padding: '10px',
                                alignItems: 'center',
                                width: '180px',
                                height: '50px',
                                gap: '10px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.00)',
                                background: 'rgba(255, 255, 255, 0.20)',
                                color: '#FFF',
                                fontFamily: 'Akshar',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                                }} 
                            onClick={() => this.handleDashboardButton()}>
                            <img 
                                src={image2} 
                                alt="Home icon" 
                                style={{ width: '20px', height: '20px'}}
                            />
                                Dashboard
                        </button>
                    </div>
                    :
                    <>
                        <div>
                            <DashboardButton/>                    
                        </div>
                    </>   
                }
            </>
        )
    }
}
export default DashboardButton;