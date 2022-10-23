import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import {FaEye, FaRegBookmark, FaShareAlt, FaStar} from "react-icons/fa";


const NewsCard = ({news}) => {
    const {author, title, _id, total_view, image_url, rating, details} = news;
     return (
        <Card className="mb-5">
        <Card.Header className='d-flex justify-content-between align-items-center'> 
          <div className='d-flex'>
          <Image
          className='me-2'
           src={author?.img}
           style={{height: '60px'}}
           roundedCircle
          ></Image>
          <div>
            <p className='mb-0'>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
           {
            details.length > 250 ?
           <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span>
           : <>{details}</>
           }
          </Card.Text>
         </Card.Body>
        <Card.Footer className="d-flex justify-content-between"> 
        <div>
          <FaStar className='me-2 text-warning'></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye>
          <span className='ms-2'>{total_view}</span>
        </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;