<template>
  <div id="app">
    <v-app dark>
      <v-toolbar color="red">
        <v-btn flat to="/">
          <v-toolbar-title>AvtoluxCRM</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon to="/users">
            <v-icon>person</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn icon to="/cars">
            <v-icon>directions_car</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
