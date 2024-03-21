class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Veículo: \n\tMarca: ${this.marca}\n\tModelo: ${this.modelo}\n\tAno: ${this.ano}`;
    }
}
const carro = new Veiculo("Toyota", "Corolla", 2022);
console.log(carro.exibirDetalhes());
const moto = new Veiculo("Honda", "CBR 600RR", 2021);
console.log(moto.exibirDetalhes());