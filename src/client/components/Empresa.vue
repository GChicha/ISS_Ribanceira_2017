<template>
    <div v-if="show" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4>{{titulo}}</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input class="form-control" id="nome" type="text" v-model="empresa.nome">
                </div>
                <div class="form-group">
                    <label for="cnpj">CNPJ</label>
                    <input class="form-control" id="cnpj" type="text" v-model="empresa.CNPJ">
                </div>
                <div class="form-group">
                    <label>Endereco</label>
                    <div class="form-group">
                        <label>Logradouro</label>
                        <input class="form-control" type="text" v-model="empresa.Endereco.logradouro">
                    </div>
                    <div class="form-group">
                        <label>Numero</label>
                        <input class="form-control" type="text" v-model="empresa.Endereco.numero">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-warning">Cancelar</button>
                <button class="btn btn-success" v-on:click="cadastrar()">Salvar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'empresa',
    data: () => {
        return {
            empresa: {
                nome: "",
                CNPJ: "",
                Endereco: {
                    logradouro: "",
                    numero: ""
                }
            }
        }
    },
    computed: {
        show () {
            return this.$route.params.id !== undefined
        },
        titulo () {
            if (this.$route.params.id == "new")
                return "Novo cadastro"
            else
                return this.empresas.nome
        }
    },
    methods: {
        cadastrar () {
            fetch("/api/empresas/add", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(this.empresa)
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
