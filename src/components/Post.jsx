import { useEffect, useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostSection() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        console.log(data);  // Check the fetched data
        setPost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {post.map((card, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card>
              {/* Log the image source URL */}
              {console.log(card.image ? card.image : '/images/mbl.jpg')}  {/* Log the image URL being used */}
              
              <Card.Img 
                variant="top" 
                src={card.image ? card.image : '/images/alin.jpg'}  // Fallback image if card.image is unavailable
                alt={card.name} 
                onError={(e) => e.target.src = '/images/alin.jpg'}  // Ensure fallback image if original fails to load
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>Category ID: {card.id}</Card.Text>
                <Button variant="success">View Category</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostSection;







