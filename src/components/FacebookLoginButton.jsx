// src/components/FacebookLoginButton.js
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ onLogin }) => {
  const responseFacebook = (response) => {
    onLogin(response);
  };

  return (
    <FacebookLogin
      appId="<YOUR_APP_ID>"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="facebook-login-button"
    />
  );
};

export default FacebookLoginButton;
