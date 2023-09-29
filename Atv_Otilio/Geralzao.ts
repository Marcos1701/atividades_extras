interface TipoTelha {
    nome: string
    especificacao: string
}

class Telhado {
    constructor(public TipoTelha: TipoTelha, public area: number){}
}


interface Acabamento {
    Espessura: number
    TipoAcabamento: string
}

class Parede {
    constructor(public altura: number, public Largura: number, public Acabamento: Acabamento){}
}


interface Endereco {
    logradouro: string
    numero: number
    cep: string
}


class Moradia {
    constructor(public area: number, public endereco: Endereco) { }
}


interface TipoVidro {
    nome: string
    fabricante: string
}

class Espelho {
    constructor(public TipoVidro: TipoVidro, public altura: number, public Largura: number) { }
}

class Casa extends Moradia {
    TelhadoAreaExterna: Telhado
    TelhadoAreaInterna: Telhado
    ParedeQuarto: Parede
    ParedeBanheiro: Parede
    ParedeCozinha: Parede
    EspelhoCorredor: Espelho
}