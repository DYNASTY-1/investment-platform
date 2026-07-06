import React from 'react';
import { Card } from 'react-bootstrap';

function JokeCard({ joke }) {
  const getCategoryColor = (category) => {
    const colors = {
      General: '#FF6B6B',
      Programming: '#4ECDC4',
      'Knock-Knock': '#FFE66D',
    };
    return colors[category] || '#667eea';
  };

  return (
    <Card className="shadow-lg border-0 mb-4 joke-card">
      <Card.Body>
        <div
          className="category-badge"
          style={{
            background: getCategoryColor(joke.category),
          }}
        >
          {joke.category}
        </div>
        <div className="joke-text">{joke.joke}</div>
        <div className="mt-3 text-muted small">
          {joke.type === 'two-part' ? '🎭 Two-Part Joke' : '😄 Single Joke'}
        </div>
      </Card.Body>
    </Card>
  );
}

export default JokeCard;
