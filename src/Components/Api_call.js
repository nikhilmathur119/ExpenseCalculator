import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsComponent() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-05-28&to=2024-05-28&sortBy=popularity&apiKey=4d850d6365d542b799b8a4b247cd3f21");
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>News Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewsComponent;
