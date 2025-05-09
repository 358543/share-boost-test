<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SHARE BOOST</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    /* Cyberpunk Base */
    :root {
      --neon-blue: #0ff0fc;
      --neon-pink: #ff2a6d;
      --neon-purple: #d300c5;
      --dark-bg: #0a0a12;
      --darker-bg: #050508;
      --panel-glow: radial-gradient(circle at center, rgba(15, 240, 252, 0.15) 0%, transparent 70%);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Rajdhani', sans-serif;
      background-color: var(--dark-bg);
      color: white;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      position: relative;
      overflow: hidden;
    }
    
    /* Cyberpunk Grid Background */
    body::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(rgba(15, 240, 252, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15, 240, 252, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: -2;
    }
    
    /* Animated Scanlines */
    body::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 95%,
        rgba(15, 240, 252, 0.05) 96%,
        transparent 97%
      );
      background-size: 100% 10px;
      animation: scan 4s linear infinite;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes scan {
      0% { background-position: 0 0; }
      100% { background-position: 0 10px; }
    }
    
    /* Main Container */
    .wrapper-container {
      width: 100%;
      max-width: 750px;
      background: rgba(5, 5, 8, 0.85);
      border: 1px solid var(--neon-blue);
      border-radius: 0;
      padding: 30px;
      box-shadow: 
        0 0 15px rgba(15, 240, 252, 0.3),
        0 0 30px rgba(15, 240, 252, 0.1),
        inset 0 0 15px rgba(15, 240, 252, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    /* Neon Corner Accents */
    .wrapper-container::before,
    .wrapper-container::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border: 2px solid var(--neon-blue);
      pointer-events: none;
    }
    
    .wrapper-container::before {
      top: 10px;
      left: 10px;
      border-right: none;
      border-bottom: none;
    }
    
    .wrapper-container::after {
      bottom: 10px;
      right: 10px;
      border-left: none;
      border-top: none;
    }
    
    /* Typography */
    h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 2.5rem;
      color: var(--neon-blue);
      text-align: center;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 3px;
      text-shadow: 0 0 10px var(--neon-blue);
      font-weight: 700;
    }
    
    h4 {
      font-size: 1.2rem;
      color: #b0bec5;
      text-align: center;
      margin-bottom: 30px;
      font-weight: 300;
      letter-spacing: 1px;
    }
    
    /* Form Elements */
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    
    .form-item label {
      display: block;
      font-size: 1rem;
      color: var(--neon-blue);
      margin-bottom: 8px;
      letter-spacing: 1px;
      font-weight: 500;
    }
    
    .form-item input {
      width: 100%;
      padding: 14px;
      font-size: 1rem;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #333;
      border-radius: 0;
      color: white;
      font-family: 'Rajdhani', sans-serif;
      transition: all 0.3s ease;
      border-left: 3px solid var(--neon-blue);
    }
    
    .form-item input:focus {
      outline: none;
      border-color: var(--neon-blue);
      box-shadow: 0 0 15px rgba(15, 240, 252, 0.3);
      background: rgba(0, 0, 0, 0.7);
    }
    
    .form-item input::placeholder {
      color: #546e7a;
      font-style: italic;
    }
    
    .form-item button {
      width: 100%;
      padding: 14px;
      font-size: 1.1rem;
      background: transparent;
      color: var(--neon-blue);
      border: 2px solid var(--neon-blue);
      font-family: 'Orbitron', sans-serif;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      margin-top: 10px;
    }
    
    .form-item button:hover {
      background: rgba(15, 240, 252, 0.1);
      text-shadow: 0 0 10px var(--neon-blue);
      box-shadow: 0 0 20px rgba(15, 240, 252, 0.4);
    }
    
    .form-item button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(15, 240, 252, 0.4), transparent);
      transition: 0.5s;
    }
    
    .form-item button:hover::before {
      left: 100%;
    }
    
    /* Status Messages */
    #result, #login-error {
      display: none;
      padding: 15px;
      margin-top: 20px;
      border-radius: 0;
      text-align: center;
      font-weight: 500;
      letter-spacing: 1px;
    }
    
    #result.success, #login-success {
      background: rgba(0, 255, 100, 0.1);
      border: 1px solid #00ff64;
      color: #00ff64;
    }
    
    #result.error, #login-error {
      background: rgba(255, 0, 64, 0.1);
      border: 1px solid var(--neon-pink);
      color: var(--neon-pink);
    }
    
    /* Video Container */
    video {
      width: 100%;
      max-width: 600px;
      margin: 30px auto;
      display: block;
      border: 1px solid var(--neon-blue);
      box-shadow: 0 0 20px rgba(15, 240, 252, 0.3);
    }
    
    /* Login/Main Transition */
    #login-section, #main-section {
      transition: opacity 0.5s ease;
    }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
      h1 {
        font-size: 1.8rem;
      }
      
      h4 {
        font-size: 1rem;
      }
      
      .wrapper-container {
        padding: 20px;
      }
    }
    
    /* Cyberpunk Glitch Effect (Optional) */
    .glitch {
      position: relative;
    }
    
    .glitch::before, .glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    
    .glitch::before {
      color: #0ff;
      z-index: -1;
      animation: glitch-effect 3s infinite;
    }
    
    .glitch::after {
      color: #f0f;
      z-index: -2;
      animation: glitch-effect 2s infinite reverse;
    }
    
    @keyframes glitch-effect {
      0% { transform: translate(0); }
      20% { transform: translate(-3px, 3px); }
      40% { transform: translate(-3px, -3px); }
      60% { transform: translate(3px, 3px); }
      80% { transform: translate(3px, -3px); }
      100% { transform: translate(0); }
    }
  </style>
</head>
<body>
  <div class="wrapper-container">
    <!-- Login Form -->
    <div id="login-section">
      <h1 class="glitch" data-text="ACCESS TERMINAL">ACCESS TERMINAL</h1>
      <form onsubmit="login(event)" class="form-container">
        <div class="form-item">
          <label for="username">USER ID:</label>
          <input type="text" id="username" required placeholder="ENTER CREDENTIALS">
        </div>
        <div class="form-item">
          <label for="password">AUTH CODE:</label>
          <input type="password" id="password" required placeholder="••••••••••••">
        </div>
        <div class="form-item">
          <button type="submit">AUTHENTICATE</button>
        </div>
        <div id="login-error"></div>
      </form>
    </div>

    <!-- Main Project (Hidden until login) -->
    <div id="main-section" style="display: none;">
      <div class="container">
        <h1 class="glitch" data-text="SHARE BOOST">SHARE BOOST</h1>
        <h4>SYSTEM INITIALIZED: READY FOR COOKIE INJECTION</h4>
      </div>
      <div class="form-wrapper">
        <form onsubmit="submitForm(event)" class="form-container">
          <div class="form-item">
            <label for="cookies">APPSTATE:</label>
            <input type="text" id="cookies" name="cookie" placeholder="ENTER YOUR APPSTATE">
          </div>
          <div class="form-item">
            <label for="urls">TARGET URL:</label>
            <input type="text" id="urls" name="url" placeholder="ENTER POST COORDINATES">
          </div>
          <div class="form-item">
            <label for="amounts">SHARE:</label>
            <input type="text" id="amounts" name="amount" placeholder="MAXIMUM SHARE COUNT">
          </div>
          <div class="form-item">
            <label for="intervals">DELAY:</label>
            <input type="text" id="intervals" name="interval" placeholder="SECONDS BETWEEN SHARES">
          </div>
          <div class="form-item">
            <button type="submit" id="submit-button">EXECUTE PROGRAM</button>
          </div>
          <div class="form-item">
            <div id="result"></div>
          </div>
        </form>
      </div>
      <div class="container">
        <h1>SYSTEM STANDBY</h1>
        <video controls>
          <source src="https://i.imgur.com/5pb4eJR.mp4" type="video/mp4">
          TERMINAL ERROR: VIDEO PROTOCOL NOT SUPPORTED
        </video>
      </div>
    </div>
  </div>

  <!-- Original JavaScript Preserved -->
  <script>
    function login(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const loginError = document.getElementById('login-error');

      if (username === 'johnloyd12345' && password === 'johnloydmagno12345') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
      } else {
        loginError.style.display = 'block';
        loginError.textContent = 'AUTH FAILURE: INVALID CREDENTIALS';
      }
    }

    async function submitForm(event) {
      event.preventDefault();
      const result = document.getElementById('result');
      const button = document.getElementById('submit-button');
      try {
        result.style.display = 'block';
        result.className = '';
        result.textContent = 'PROCESSING REQUEST...';
        button.disabled = true;

        const response = await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify({
            cookie: document.getElementById('cookies').value,
            url: document.getElementById('urls').value,
            amount: document.getElementById('amounts').value,
            interval: document.getElementById('intervals').value,
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if (data.status === 200) {
          result.className = 'success';
          result.textContent = 'OPERATION SUCCESSFUL';
        } else {
          result.className = 'error';
          result.textContent = 'SYSTEM ERROR: ' + data.error;
        }
      } catch (error) {
        result.className = 'error';
        result.textContent = 'NETWORK FAILURE: RETRY REQUIRED';
      } finally {
        button.disabled = false;
      }
    }
  </script>
</body>
</html>
