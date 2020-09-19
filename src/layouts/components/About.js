import React from 'react';
import '../../styles/About.css';
import ja from '../../img/ja.jpg';

const About = () => {
    return (
        <div id='about'>
            <div className='aboutPhoto'>
                <img alt='Agnieszka Janda' src={ja}></img>
            </div>
            <div className='aboutDesc'>
                <h3>Agnieszka JANDA<br/> <br/></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!</p>
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!</p> 
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!</p>
            </div>
        </div>
    );
}
 
export default About;