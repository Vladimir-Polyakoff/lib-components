<template>
  <div id="app">
    <div class="menu">
      <router-link v-for="({ path, title }) in pagesList"
      :key='path'
      :to="path">{{ title }}</router-link>
    </div>

    <router-view/>
  </div>
</template>


<script>

export default {
  data () {
    return {
      pagesList: [
        {
          title: 'Главная',
          path: '/'
        },
        {
          title: 'Выпадашка',
          path: '/dropdown-page'
        },
        {
          title: 'Приветствие',
          path: '/welcome'
        },
        {
          title: 'Инпуты',
          path: '/fields'
        },
        {
          title: 'Таблица',
          path: '/table-page'
        },
        {
          title: 'Мультиселект Теги',
          path: '/multiselect-tags'
        },
        {
          title: 'Диалог',
          path: '/confirm-dialog-page'
        },
        {
          title: 'Промпт',
          path: '/prompt-page'
        }
      ]
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 200px;
}
a {
  text-decoration: none;
  border-radius:4px ;
  padding: 2px 4px;
  margin: 0;
  transition: .3s;
}
a:hover{
  text-decoration: none;
  background: rgba(28, 28, 225, 0.585);
  border-radius:4px ;
  padding: 2px 4px;
  margin: 0;
  color: white;
}
</style>
