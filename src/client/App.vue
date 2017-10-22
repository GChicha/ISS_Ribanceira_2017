<template>
    <div id="app">
        <Navbar></Navbar>
        <Empresas></Empresas>
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import Empresas from './components/Empresas'

export default {
    name: 'app',
    components: {
        Navbar,
        Empresas
    }
}
</script>

<style>
</style>

<style src="element-ui/lib/theme-default/index.css"></style>
