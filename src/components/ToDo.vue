<template>
  <div class="container">
    <Header />
    <ToDo_List />
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import ToDo_List from './ToDo_List'
import Footer from './Footer'

  export default {
    name: 'ToDo',
    components: {
      Header,
      ToDo_List,
      Footer
    }
  }
</script>

<style>
    .container {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        position: relative;
    }
</style>
