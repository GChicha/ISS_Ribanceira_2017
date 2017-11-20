<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Ribanceira</router-link>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link"
                             to="/empresas">Empresas</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : 'Navbar'
}
</script>
