import fs from 'fs'
let dados = []
let codes: string[] = []

function leitura_e_extracao_de_dados(loc_arquivo: string) {

    try {
        const arquivo: string = fs.readFileSync(loc_arquivo, 'utf-8')
        let i: number = 1
        let dados_linha: string[]

        while (i < arquivo.length - 1) {
            dados_linha = arquivo[i].split(',')
            if (dados[dados_linha[1]]) {
                dados[dados_linha[1]].push(dados_linha[i])
            } else {
                dados[dados_linha[1]] = dados_linha[i]
                codes.push(dados_linha[1])
            }
            i++
        }

    } catch (e: any) {

    }

}

function exibir_resultados(dados: any[], arquivo_retorno: string){
    let retorno = ``
    for(let i = 0; i < dados.length; i++){
        retorno += `${dados[i].join(' - ')}\n`
    }
    fs.writeFileSync(arquivo_retorno, retorno)
}

function main() {

    leitura_e_extracao_de_dados('./cause_of_deaths.csv')
    let code: string
    let total_mortes_por_pais = []
    let intervalos_por_pais = []

    const somar_linha =  (c: string,j: number, variavel: any[], i?: string) => {
        if(i){
            for (let x = 0; x < dados[c][j].length; x++) {
                if (x < 3) {
                   variavel[c][i][x] = dados[c][j][x]
                } else {
                   variavel[c][i][x] += dados[c][j][x]
                }
            }
        }else{
            for (let x = 0; x < dados[c][j].length; x++) {
                if (x < 3) {
                   variavel[c][x] = dados[c][j][x]
                } else {
                   variavel[c][x] += dados[c][j][x]
                }
            }
        }
    }

    for (let i = 0; i < codes.length; i++) {
        code = codes[i];
        let x: number = 0, k = 0
        let inter: string = `${dados[code][0][2]}- ${dados[code][2][2]}`
        for (let j = 0; j < dados[code].length; i++) {
            if (x < 3) {
               intervalos_por_pais[code][k][inter] = somar_linha (code, j, intervalos_por_pais, inter)
               x++
            }else{
               x = 0
               k++
               intervalos_por_pais[code][k][inter] = somar_linha (code, j, intervalos_por_pais, inter)
            }

            total_mortes_por_pais[code] = somar_linha(code, j, total_mortes_por_pais)
        }
    }

    exibir_resultados(total_mortes_por_pais, './total_mortes_por_pais_sem_intervalo.txt')
    exibir_resultados(intervalos_por_pais, './total_mortes_por_pais_com_intervalo.txt')


}

main()