import React from 'react';
import ReactPlayer from 'react-player';
import Ad from '../../assets/images/real-estate-ad.mp4';
import './Area.style.css';

function Area(props) {
    return (
        <div className='area'>
            <div className='area-player'>
                <ReactPlayer 
                url={Ad}
                playing={true}
                width='100%'
                height='100%' />
            
            </div>
            <div className='area-context'>
                <h2 className='area-context-title'>Greater Washington D.C - Baltimore Metro Area</h2>
                <p className='area-context-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ipsa accusantium quasi sit beatae sint mollitia non, possimus nesciunt ullam fugit esse doloremque quis? Aperiam odio sunt minus necessitatibus, maiores aliquid esse itaque repellat, est, similique repellendus. Fugiat aut asperiores quod autem suscipit iste quam dicta amet ratione vitae ipsam, que tempora similique? Beatae molestiae, accusantium nam expedita, ut incidunt cupiditate vitae, omnis officiis voluptates eius totam nulla vel ex. Nam, alias laudantium officiis atque accusamus pariatur amet cum qui fuga, magni rem! Eaque voluptatum aliquid aut quo inventore atque sit obcaecati, suscipit fugiat. Sunt, at. Voluptate, libero quidem?</p>
            </div>
        </div>
    );
}

export default Area;