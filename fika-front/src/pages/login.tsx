const Login = () => {
  
    const handleGoogleLogin = () => {
      const clientId = '221458438570';
      const redirectUri = 'http://localhost:3000/oAuthCallback';
      const authUrl =`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}-gs27j83l0779gv2l4a3oalnhjo5f5glt.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile%20openid&access_type=offline&prompt=consent`;

      window.open(authUrl, '_self');
    }

    return (
      <div className="w-80 h-40 bg-white">
          <button className="w-80 h-40 bg-white text-black" onClick={handleGoogleLogin}>로그인!!!</button>
      </div>
    );
  }

  export default Login