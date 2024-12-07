import React from 'react';
import image2 from '../../assets/images/2.png';

class PendUserButton extends React.Component {

    state = {
        pendUserButton: false
    }

    handlePendUserButton = (event) => {
        this.setState ({
            pendUserButton: !this.state.pendUserButton
        })
    }

    render() {
        let {pendUserButton} = this.state;
        let checkPendUserButton = pendUserButton === true? 'pendUserButton = true' : 'pendUserButton = false';
        return (
            <>
                {pendUserButton === false ?
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
                            onClick={() => this.handlePendUserButton()}>
                            <img 
                                src={image2} 
                                alt="Home icon" 
                                style={{ width: '20px', height: '20px'}}
                            />
                                Pending User
                        </button>
                    </div>
                    :
                    <>
                        <div>
                            <PendUserButton/>                    
                        </div>
                    </>   
                }
            </>
        )
    }
}
export default PendUserButton;