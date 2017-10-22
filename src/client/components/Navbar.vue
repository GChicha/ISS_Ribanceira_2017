<template>
    <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <template slot="title">Ribanceira</template>
        <el-submenu index="empresas">
            <template slot="title">Empresas</template>
            <el-menu-item index="empresas/cadastrar">Cadastrar</el-menu-item>
            <el-menu-item index="empresas/buscar">Buscar</el-menu-item>
        </el-submenu>
        <el-submenu index="sindicatos">
            <template slot="title">Sindicatos</template>
            <el-menu-item index="sindicatos/cadastrar">Cadastrar</el-menu-item>
            <el-menu-item index="sindicatos/buscar">Buscar</el-menu-item>
        </el-submenu>
        <el-submenu index="contratos">
            <template slot="title">Contratos</template>
            <el-menu-item index="contratos/cadastrar">Cadastrar</el-menu-item>
            <el-menu-item index="contratos/buscar">Buscar</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name : 'Navbar',
    methods: {
        handleSelect: index => console.log(index)
    }
}
</script>
