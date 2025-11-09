import React, { useEffect, useState } from 'react';

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
