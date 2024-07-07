// src/App.js
import  { useState } from 'react';
import FacebookLoginButton from './components/FacebookLoginButton';
import FacebookPagesDropdown from './components/FacebookPagesDropdown';
import PageInsights from './components/PageInsights';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedPage, setSelectedPage] = useState('');

  const handleLogin = (data) => {
    setUser(data);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <img src={user.picture.data.url} alt={user.name} />
          <h1>{user.name}</h1>
          <FacebookPagesDropdown
            accessToken={user.accessToken}
            onSelectPage={setSelectedPage}
          />
          {selectedPage && (
            <PageInsights pageId={selectedPage} accessToken={user.accessToken} />
          )}
        </div>
      ) : (
        <FacebookLoginButton onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
