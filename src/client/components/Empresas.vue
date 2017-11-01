<template>
    <div class="container">
        <div class="row">
            <h2>Empresas</h2>
        </div>
        <div class="row form-inline justify-content-md-right">
            <div class="form-group">
                <input placeholder="Digite o nome da empresa"
                       type="search"
                       class="form-control">
                <button type="button"
                        class="btn btn-dark"
                        v-on:click="findEmpresa">Search</button>
            </div>
            <div class="form-group justify-content-md-left">
                <router-link to="/empresas/new">
                    <button class="btn btn-primary">Adicionar</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="empresa in empresas">
                        <td>{{empresa.nome}}</td>
                        <td>{{empresa.CNPJ}}</td>
                        <td><button class="btn">Editar</button></td>
                        <td><button class="btn btn-danger">Excluir</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <empresa></empresa>
    </div>
</template>

<script>
import Empresa from './Empresa'

export default {
    name: 'Empresas',
    data: () => {
        return {
            searchInput: '',
            empresas: [
                {
                    nome: "Teste",
                    CNPJ: "00.000.000/0001-00"
                },
                {
                    nome: "Teste",
                    CNPJ: "00.000.000/0001-00"
                }
            ]
        }
    },
    components: {
        Empresa
    },
    methods: {
        findEmpresa: () => {
            fetch("/api/empresas/findall")
                .then(response => {
                    if (response.status == 200) {
                        response.json()
                            .then(empresas => {
                                console.log(empresas)
                            })
                    }
                })
        }
    }
}
</script>
