<template>
  <div id="app">
    <img alt="Vue logo" class="img-header" src="https://brauliomateus.com/logo.png">
    <div id="nav">
      <div class="container">
        
        <ul>
          <li>
            <!-- Avenir, Helvetica, Arial, sans-serif; -->
            <router-link to="/nao-curtidos">
            <a class="nav-class">FILMES NÃO CURTIDOS</a>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <a style="align-self: center;" class="nav-class">FILMES</a>
            </router-link>
          </li>
          <li>
            <router-link to="/curtidos">
              <a class="nav-class">FILMES CURTIDOS</a>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <notifications position="top left" width="300px" height="150px" />
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>

body {
  height: 100vh;
}

a {
  text-decoration: none;
  font-family: 'Bakbak One';
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.09em;
}

ul {
    display: inline-flex;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}



ul li {
  list-style: none;
  display: inline;
  color: #fff;
  width: 33.3%;
  line-height: 20px;
  
}

.img-header {
  width: 80px;
  height: 80px;
  padding: 10px;
}

.nav-class {
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  /* font-weight: bold; */
  color: #fff;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  /* background-color: #42b983; */
  text-decoration:underline;
}



.v-enter,
.v-leave-to {
  transform: translate3d(-25px,0,0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}
</style>
