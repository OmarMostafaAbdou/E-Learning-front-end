// import React from 'react'
import './AppInMobile.css'

function AppInMobile() {
  return (
    <>
    <div className='mobile-app'>
    <div className="free-app " >
        <span className="content">
            <span style={{ color: '#FFFFFF', fontSize: '36px', fontWeight: 'bold' }}>APP is available for free</span>
            <span className='buttons'>
                <button className='app-btn'>
                    <img src="src\assets\Android.png" alt=""  />
                    Android APP
                </button>
                <button className='app-btn' style={{marginLeft:'30px'}}>
                    <img src="src\assets\IOS.png" alt="" />
                    IOS APP
                </button>
            </span>
        </span>
    </div>
    </div>
    </>
  )
}

export default AppInMobile