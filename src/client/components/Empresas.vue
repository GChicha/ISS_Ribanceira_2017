<template>
    <div>
        <el-input 
            placeholder="Buscar"
            icon="search"
            v-model="searchInput"
            :on-icon-click="findEmpresa"></el-input>
        <el-table :data="findTable">
            <el-table-column prop="nome" label="Nome"></el-table-column>
            <el-table-column prop="cnpj" label="CNPJ"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import Empresa from './Empresa'

export default {
    name: 'Empresas',
    data: () => {
        return {
            searchInput: '',
            findTable: [
                {
                    nome: "Teste",
                    cnpj: "82007279001"
                }
            ]
        }
    },
    components: {
        Empresa
    },
    methods: {
        findEmpresa: () => {
            fetch("http://localhost:8080/api/empresas/findall", {
                method: 'GET',
                mode: 'no-cors'
            })
                .then((empresas) => {
                    console.log(empresas.json())
                })
        }
    }
}
</script>
