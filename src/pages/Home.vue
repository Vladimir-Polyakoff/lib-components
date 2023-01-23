<script>
export default {
  name: 'TheHome'
}
</script>

<template>
  <div class="loader">
    <h1>HOME</h1>
  </div>
</template>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    background: #262626;
    font-family: Arial;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    background-image: url('../img/8.jpg'); 
    background-repeat: repeat-x;
    /* clip для того что анимация картинки была внутри текста */
    -webkit-background-clip: text; 
    animation: animate 25s linear infinite;
  }

  @keyframes animate  {
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
  }
</style>
