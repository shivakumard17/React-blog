import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import {FaInstagram,FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa'

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <><header className='nav_box'>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      
      <ul className='social_links'>

      <li><a href='https://www.instagram.com/accounts/login/' target="_blank" rel="noopener noreferrer"> <FaInstagram className='icons'/>   </a></li>

      <li><a href='https://twitter.com/i/flow/login' target="_blank" rel="noopener noreferrer"> <FaTwitter className='icons' />   </a></li>
      <li><a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"> <FaYoutube className='icons'/>   </a></li>
      <li><a href='https://github.com/' target="_blank" rel="noopener noreferrer"> <FaGithub className='icons'/>   </a></li>
    </ul>
    
      
      
      </header>
      {blog ? (
        <div className='blog-wrap'>
          
            <img src={blog.cover} alt='cover' />
            
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div><p className='blog-date'>Published {blog.createdAt}</p>
          


          
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
