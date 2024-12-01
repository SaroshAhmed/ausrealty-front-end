'use client'
import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };


  const truncateText = (text, length) => {
    if (typeof text === 'string' && text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };


  const contentToDisplay = React.Children.toArray(children).map(child => {
  
    if (child && child.props && typeof child.props.children === 'string') {
      return child.props.children;
    }
    return ''; 
  }).join(' ');

  const truncatedContent = truncateText(contentToDisplay, 100);

  return (
    <div>
      <div className="property-description mt-8">
        <p>
        {isExpanded ? children : truncatedContent}

        </p>
      </div>
      <div className="flex justify-center">
        <button className="border border-black w-full p-1" onClick={handleReadMore}>
          <h1 className="text-[12px]">{isExpanded ? 'Read Less' : 'Read More'}</h1>
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
