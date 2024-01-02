import React, { useState } from 'react';


function Post({ type, content }) {
  const [active, setActive] = useState(true);
  const handleDelete = () => {
    setActive(false);
  };
  if (active) {
    return (
      <div className="post">
        {type === 'Text' ? <p>{content}</p> : <img src={content} />}
        <button type="submit" name="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  } else {
    return null
  }
}

export default Post;