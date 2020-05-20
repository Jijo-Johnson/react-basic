import React, { Component } from 'react';
import json from '../blogList.json';

class Blog extends Component {
    state = {
        blog: null
    }
    componentDidMount() {
        let id = this.props.match.params.blog_id;
        const data = json.filter(j => j.id === id);
        this.setState({
            blog: data[0]
        });
    }
    render() {
        console.log(this.state);
        const blogData = this.state.blog ? (
            <div className="col-12 blog-item">
                <div className="text-center bg-dark text-light p-3" >
                    <h3>{this.state.blog.title}</h3>
                    <h5>{this.state.blog.author}</h5>
                    <span>{this.state.blog.date}</span>
                    <br />
                </div>
                <div className="row">
                    <div className="col-12 blog-img">
                        <img src={this.state.blog.imgBig} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 blog-desc p-3">
                        <p><strong> {this.state.blog.desc}</strong></p>
                        <p>{this.state.blog.para}</p>
                    </div>
                    <div className="col-6 blog-img">
                        <img src={this.state.blog.img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-6 blog-para">
                        <p>{this.state.blog.para}</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quas nesciunt nostrum ratione mollitia, eveniet perspiciatis accusamus tenetur expedita ut accusantium voluptatem quaerat reiciendis, iusto sit a dolorum cumque veritatis! Unde quia placeat consectetur labore hic, laboriosam sint totam sunt, ut porro eaque ipsa cupiditate maxime quae corporis perferendis nam iure at accusamus nostrum, harum mollitia aliquid! Magnam beatae dolore itaque illum dolorem blanditiis rem quod, qui ipsam, quo debitis?</p>
                    </div>
                </div>
            </div>
        ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center bg-dark text-light">
                            <h4>Loading data...</h4>
                        </div>
                    </div>
                </div>
            );

        return (
            <div className="blog-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center p-2 m-2">Blog Details</h2>
                            <hr />
                            <br />
                        </div>
                        {blogData}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
