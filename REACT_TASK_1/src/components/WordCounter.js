import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [paragraph, setParagraph] = useState('');
  
  const handleInputChange = (e) => {
    const text = e.target.value;
    setParagraph(text);
  };

  const countWords = () => {
    const words = paragraph.split(/\s+/).filter(word => word !== '');
    return words.length;
  };

  return (
    <div className="container">
        <div className="box">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea
                id="paragraph-input"
                placeholder="Enter your paragraph here..."
                value={paragraph}
                onChange={handleInputChange}
            />
            <p id="word-count">Word Count: {countWords()}</p>
        </div>
    </div>
  );
}

export default WordCounter;
