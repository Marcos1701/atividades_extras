interface TipoTelha{
    nome: string
    especificacao: string
}

class Telhado {
    TipoTelha: TipoTelha
    area: number
}


interface Acabamento{
    Espessura: number
    TipoAcabamento: string
}

class Parede {
    altura: number
    Largura: number
    Acabamento: Acabamento
}


interface Endereco {
    logradouro: string
    numero: number
    cep: string
}


class Moradia {
    area: number
    endereco: Endereco
}


interface TipoVidro{
    nome: string
    fabricante: string
}

class Espelho {
    TipoVidro: TipoVidro
    altura: number
    Largura: number
}

class Casa extends Moradia{
    TelhadoAreaExterna: Telhado
    TelhadoAreaInterna: Telhado
    ParedeQuarto: Parede
    ParedeBanheiro: Parede
    ParedeCozinha: Parede
    EspelhoCorredor: Espelho
}
