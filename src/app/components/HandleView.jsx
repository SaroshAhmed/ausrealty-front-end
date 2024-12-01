'use client';


const HandleView = ({ children, isVisible }) => {
    if (!isVisible) return null;
    return <div>{children}</div>;
  };

export default HandleView;
