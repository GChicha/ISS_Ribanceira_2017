<template>
    <div id="app" class="site-wrapper">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    name: 'app',
    components: {
        Navbar
    }
}

document.body.classList += " bg-secondary"
</script>

<style src="./assets/bootstrap.css"></style>

<style>
</style>
