import React from 'react';
import { Button } from 'react-bootstrap';
import './sign-in-page.scss';

function SignInPage() {
  return (
    <article>
      <header>
        <p>Spotify Buddy</p>
      </header>

      <div id="login">
        <Button href="/login" className="mbp-login-btn">Collect Data</Button>
      </div>

      <footer>
        Enjoy!
      </footer>
    </article>
  );
}

export default SignInPage;
