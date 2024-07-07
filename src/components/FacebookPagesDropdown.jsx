// src/components/FacebookPagesDropdown.js
import  { useEffect, useState } from 'react';
import axios from 'axios';

const FacebookPagesDropdown = ({ accessToken, onSelectPage }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      const response = await axios.get(
        `https://graph.facebook.com/me/accounts?access_token=${accessToken}`
      );
      setPages(response.data.data);
    };

    fetchPages();
  }, [accessToken]);

  return (
    <select onChange={(e) => onSelectPage(e.target.value)}>
      <option value="">Select a page</option>
      {pages.map((page) => (
        <option key={page.id} value={page.id}>
          {page.name}
        </option>
      ))}
    </select>
  );
};

export default FacebookPagesDropdown;
