import React from 'react';

const RedirectButton = ({ link, btnText, btnClass }) => {
  const redirectToLink = () => {
    window.open(link, '_blank');
  };

  return (
    <button className={btnClass} onClick={redirectToLink}>
      {btnText}
    </button>
  );
};

export default RedirectButton;
