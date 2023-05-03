import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='text-center bg-primary bg-opacity-75 text-white py-4'>
                <h5 className='ms-4 me-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut esse expedita assumenda, qui quidem aliquid, pariatur quis quas labore iusto consectetur.</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsa cumque perferendis.</p>
            </div>
            <div>
                <h3>middle side</h3>
            </div>
            <div class='two-section'>
                <div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deserunt dolor, sapiente obcaecati consectetur fugiat doloribus ipsum maiores qui quo!</h4>
                </div>
                <div>
                    <h4>image section</h4>
                </div>
            </div>
            <div class='two-section'>
                <div>
                    <h4>image section</h4>
                </div>
                <div>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt aspernatur ad fugit ratione enim ipsum sint explicabo architecto earum!</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;