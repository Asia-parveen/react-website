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
        console.log(data);
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
              <Card.Img variant="top" src={card.image} alt={card.name} />
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


