import React from 'react';
import Blogs from '../img/blogs.png';
const Home = () => {
    return (
        <div className="home-content bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center mt-5 mb-5">
                        <div className="home-intro">
                            <h2>Welcome to <span className="text-primary">React App</span></h2>
                            <p>This app is a Test and can be anything you want!</p>
                            <p>You chose to  make this a blog App :)</p>

                        </div>
                    </div>
                    <div className="col-6 text-justify">
                        <img src={Blogs} className="img-fluid" alt="" />

                    </div>
                    <div className="col-6 text-justify text-light p-4" style={{background:"#292929"}}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h3 className="text-left">Do i need a Blog <span className="text-danger">?</span></h3>
                                <p>Blogging is a great way to get your ideas out there in the world and connect with people.
                           Whether you want to blog as a hobby or to promote your business, it can be a useful tool to help you achieve many personal and professional goals.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-left">How do I Blog <span className="text-danger">?</span></h3>
                                <p>Through our website you can talk about any topics you want and express your opinion. You can even write about every activity that took place during the day.
                                These may range from small issues such as waking up, to major issues like human rights and climate changes!
                                You can choose topics that you love and strive to make one of the best blogs on the web.
                            We promote all kinds of blogs such as Fashion Blogs, Food Blogs, Travel Blogs, Music Blogs, Lifestyle Blogs, Fitness Blogs, DIY Blogs, Sports Blogs and so on.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4>Topic Ideas for Starting a Blog that Matters</h4>
                                <ul>
                                    <li>Self improvement/Self-Hypnosis</li>
                                    <li>Health & Fitness for Busy People</li>
                                    <li>Language Learning Blogs</li>
                                    <li>How to Travel on a Budget (Best hotel deals. Car rental. Trip advice.)</li>
                                    <li>Writing Style</li>
                                    <li>Rescued Animals</li>
                                    <li>Personal Development (Passions & Ambition Pursuing)</li>
                                    <li>Social Dynamics & Communication Skills</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;