import React from 'react';
import {Article}  from "../../components";
import './blog.css';
import {blog01} from './import.js';

const Blog = () => {
    return (
        <div className="dgi_blog section__padding">
            <div className="dgi_blog-heading">
                <h2 className="gradient__text">
                    A lot is happening...<br/>
                </h2>
                <p>
                    Die Webentwicklung ist eine ziemliche Herausforderung. Wenn man erst einmal angefangen hat, weiß man nie, wie oft man von Technologie zu Technologie springen wird.
                </p>
            </div>
            <div className="dgi_blog-body">
                <div className="dgi_blog-body__group-a">
                    <Article/>
                </div>
                <div className="dgi_blog-body__group-b">
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
            </div>
        </div>
    )
}
export default Blog
