import React, { useEffect, useState } from 'react';
import './Home.css'
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div className='text-center bg-primary bg-opacity-75 text-white py-4'>
                <h5 className='ms-4 me-4'>First of all, it is important to understand that the geography of a land is one of the defining factors that largely shape the diet of its people. Given that Bangladesh is a riverine country and that long-stretching paddy fields are in abundance, the saying 'machhe bhaate Bangali' stands true. Fish and rice are our staples, and the typical Bangladeshi household cannot do without them</h5>
                <p>Pitha is indeed an age-old food. The names and descriptions of several pithas can be found in different Mymensingh ballards, and other oral traditions.</p>
            </div>
            <h3 className='text-center mt-4'>Bangladeshi Chef</h3>
            <div className='mid-content'>
                {
                    foods.map(food => <div
                        key={food.id} >

                        <CardGroup>
                            <Card className='card-style'>
                                <Card.Img variant="top" src={food.picture} />
                                <Card.Body>
                                    <Card.Title>{food.name}</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"> 
                                    <Link to={`/details/${food.id}`}><Button variant="primary">View Recipes</Button></Link>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>

                    </div>)

                }
            </div>
            <h2 className='text-center mt-4'>Rice and Fish</h2>
            <div className='two-section'>
                
                <div>
                    <h4>Rice and fish form a mutualistic symbiosis — in other words, they both benefit from growing in the same ecosystem. The rice provides the fish with a shelter as well as providing shade and, in turn, reducing water temperature, which creates a more suitable environment.</h4>
                </div>
                <div className='img-one'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwP8zJurAUtFLdWqcOGR8PmRaEjI309FmO8g&usqp=CAU" alt="" />
                </div>
            </div>
            <h3 className='text-center mt-4'>Some Fish Recipe !</h3>
            <div className='two-section'>
                <div className='img-one'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSqLtUxN11Sil3fphKW5hoWyCnvWcqxknQA&usqp=CAU" alt="" />
                </div>
                <div>
                    <h4>Pitha is indeed an age-old food. Rice and fish form a mutualistic symbiosis — in other words, they both benefit from growing in the same ecosystem. The rice provides the fish with a shelter as well as providing shade and, in turn, reducing water temperature, which creates a more suitable environment.</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;