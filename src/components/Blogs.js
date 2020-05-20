import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import json from '../blogList.json';

class Blogs extends Component {
    state = {
        blogs: [...json]
    }
    handleDelete = (blogId) => {
        const {blogs} = this.state;
        const del = blogs.filter(blog => {
            return blog.id !== blogId;
        });
        this.setState({
            blogs: del
        });
        console.log(this.state)
    }
    render() {
        const {blogs} = this.state;
        const blogList = blogs.map(blog => {
            return (
                <div className="col-6 blog-item p-3" key={blog.id} style={{boxShadow:"1px 1px 6px -3px gray"}}>
                <div className="row">
                    <div className="col-8 ">
                        <Link to={'/'+ blog.id}><h4>{blog.title}</h4></Link>
                        <h6>{blog.author}</h6>
                        <span>{blog.date}</span>
                        <br />
                    </div>
                    <div className="col-4 blog-img">
                        <img src={blog.img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 blog-desc">
                        <hr />
                        <p>
                            {blog.desc}
                        </p>
                    </div>
                    <div className="col-12 blog-action text-center">
                       <Link to={'/'+ blog.id}><button className="btn btn-info px-3 m-1" >Read</button></Link>
                       <button onClick={() => {this.handleDelete(blog.id)}} className="btn btn-danger px-3 m-1" >Delete</button>
                    </div>
                </div>
            </div>
            );
        });
        return (
            <div className="blogs-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center p-2 m-2">All Blogs</h3>
                            <hr />
                            <div className="row">
                                {blogList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blogs;