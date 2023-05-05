import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='ms-4'>
           <div className='mt-4'>
                <h3>1.What is the differences between uncontrolled and controlled components? </h3>
                <h5>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h5>
           </div>
           <div className='mt-4'>
                <h3>2. How to validate React props using PropTypes? </h3>
                <h5>Ans: PropTypes are a good first line defense when it comes to debugging your apps. But before getting into detail about PropTypes, we have to understand the concept of props.</h5>
           </div>
           <div className='mt-4'>
                <h3>3. What is  the difference between nodejs and express js.? </h3>
                <h5>Ans: js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</h5>
           </div>
           <div className='mt-4'>
                <h3>4. What is a custom hook, and why will you create a custom hook? </h3>
                <h5>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</h5>
           </div>
        </div>
    );
};

export default Blog;