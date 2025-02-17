import React, { useRef } from 'react';

const FileInput = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    onChange(e.target.files[0]);
  };

  return (
    <div>
      <a type="button" onClick={handleButtonClick}>
        Select File
      </a>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
