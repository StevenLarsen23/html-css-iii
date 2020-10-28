import React from 'react';
import voltron from '../voltron.png';

const Main = () => {
    return (
        <main>
            <img alt="voltron" id="voltron" src={voltron}/>
            <div className="lion-container">
                <div className="lion black" >
                    <img alt="lion" src="https://lh3.googleusercontent.com/proxy/Y19svRe0O7l_hmED6KbuXazcxI_g20ouWVTWJIZ0M_62E7JJb_WMsmAZNK8q_BgXH-8BxShrN8WkTkSQEq1D71vV7jFt"/>
                </div>
                <div className="lion red">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltronlegendarydefender/images/1/19/Red_Lion.png/revision/latest?cb=20160726012158"/>
                </div>
                <div className="lion blue">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltronlegendarydefender/images/2/22/Blue_Lion.png/revision/latest?cb=20160726012103"/>
                </div>
                <div className="lion yellow">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltronlegendarydefender/images/4/4f/Yellow_Lion.png/revision/latest?cb=20170316233533"/>
                </div>
                <div className="lion green">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltronlegendarydefender/images/6/6c/Green_Lion.png/revision/latest/top-crop/width/360/height/450?cb=20160726012305"/>
                </div>
            </div>
        </main>
    )}

export default Main;