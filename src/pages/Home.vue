<script>
export default {
  name: 'TheHome'
}
</script>

<template>
<div class="wrapper">
  <div class="loader">
    <h1>HOME</h1>
  </div>
  <div class="body">
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  </div>
</div>
</template>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    background: #262626;
    font-family: Arial;
  }
  .wrapper {
    width: 100%;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }
  .loader h1 {
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 500px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-style: 10em;
    color: rgba(255, 255, 255, .1);
    /* background-image: url('../img/8.jpg');  */
    background-repeat: repeat-x;
    /* clip для того что анимация картинки была внутри текста */
    -webkit-background-clip: text; 
    animation: animate 25s linear infinite;
  }

  /* @keyframes animate  {
    0% {
        background-position: left -300px top 80px;
        color: rgba(0, 0, 0, 0.01);
    }
    40% {
        background-position: left 500px top -80px ;
        color: rgba(255, 255, 255, 0.43);
        background-image: url('../img/3.jpg'); 
    }
    80% {
        background-position: left 1800px top -50px ;
        background-image: url('../img/8.jpg'); 
    }
    100% {
        background-position: left 2400px top 80px ;
        color: rgba(0, 0, 0, 0.01);
    }
  } */

  .body {
    z-index: -1;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #4b88ec91;
  }
  .bubble {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
    animation: animate 8s ease-in-out infinite;
  }
  .bubble:nth-child(2) {
    position: relative;
    zoom: 0.45;
    left: -10px;
    top: -100px;
    animation-delay: -4s;
  }
  .bubble:nth-child(3) {
    position: relative;
    zoom: 0.25;
    right: -180px;
    top: -300px;
    animation-delay: -6s;
  }
  .bubble:nth-child(4) {
    position: relative;
    zoom: 0.5;
    right: -120px;
    top: -200px;
    animation-delay: -5s;
  }
  .bubble:nth-child(5) {
    position: relative;
    zoom: 0.5;
    left: 0px;
    bottom: -200px;
    animation-delay: -3s;
  }
  @keyframes animate {
    0%,100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
  }
  .bubble::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 45px;
    width: 30px;
    height: 30px;   
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
  }
  .bubble::after {
    content: '';
    position: absolute;
    top: 80px;
    left: 80px;
    width: 20px;
    height: 20px;   
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
  }
  .bubble span {
    position: absolute;
    border-radius: 100px;
  }
  .bubble span:nth-child(1) {   
    inset: 70px;    
    border-left: 15px solid #0fb4ff;
    filter: blur(8px);
  }
  .bubble span:nth-child(2){   
    inset: 45px;
    border-right: 15px solid #ff4484;
    filter: blur(8px);
  }
  .bubble span:nth-child(3) {   
    inset: 38px;
    border-top: 15px solid #ffeb3b;
    filter: blur(8px);
  }
  .bubble span:nth-child(4) {   
    inset: 46px;
    border-left: 15px solid #ff4484;
    filter: blur(12px);
  }
  .bubble span:nth-child(5) {   
    inset: 38px;
    border-bottom: 15px solid #fff;
    filter: blur(8px);
    transform: rotate(330deg);
  }
</style>
