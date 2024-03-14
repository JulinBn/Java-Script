class Veiculo {
    constructor(marca,modelo,ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirinformações() {
        return `Veiculo
        Marca ${this.marca}
        Modelo ${this.modelo}
        Ano ${this.ano} `
    }
}

