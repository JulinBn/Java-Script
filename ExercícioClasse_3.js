class Imovel {
    constructor(quartos, tipo, endereço) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereço = endereço;
    }
exibirinformações() {
    return `Imovel
Quartos: ${this.quartos}
Tipo: ${this.tipo}
Endereço: ${this.endereço}`;
    }
}
const casa = new Imovel(4,"Casa","Rua da Amizade, 789 - Bairro Alegre");
const apartamento = new Imovel(2,"Apartamento","Avenida da Paz, 123 - Centro")

console.log(casa.exibirinformações());
console.log(apartamento.exibirinformações())