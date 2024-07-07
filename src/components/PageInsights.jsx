// src/components/PageInsights.js
import  { useEffect, useState } from 'react';
import axios from 'axios';

const PageInsights = ({ pageId, accessToken }) => {
  const [insights, setInsights] = useState({});

  useEffect(() => {
    const fetchInsights = async () => {
      const response = await axios.get(
        `https://graph.facebook.com/${pageId}/insights/page_fans,page_engaged_users,page_impressions,page_actions_post?access_token=${accessToken}`
      );
      setInsights(response.data.data);
    };

    if (pageId) fetchInsights();
  }, [pageId, accessToken]);

  return (
    <div>
      <div>Total Followers: {insights.page_fans}</div>
      <div>Total Engagement: {insights.page_engaged_users}</div>
      <div>Total Impressions: {insights.page_impressions}</div>
      <div>Total Reactions: {insights.page_actions_post}</div>
    </div>
  );
};

export default PageInsights;
