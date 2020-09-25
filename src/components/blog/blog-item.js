import React from 'react';
import { Link } from 'react-router-dom'


const BlogItem = props => {
    const {
        status,
        content,
        title,
        banner_image_url,
        published_date
    } = props.blogItem
    return(
          <div>
            <div className="blog-item-wrapper">
              <div className="top-heading-wrapper">
                <div>
                    {title}
                </div>
                <div>
                    {published_date}
                </div>
              </div>
              <div className="banner-image-wrapper">
                <img src={banner_image_url} />
              </div>
              <div className="content-wrapper">
                <p>{content}</p>
              </div>
            </div>
          </div>
    )
}

export default BlogItem;