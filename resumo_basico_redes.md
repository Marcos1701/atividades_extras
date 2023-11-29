# Resumo de Redes de Computadores

## Modelo OSI/ISO

O modelo OSI/ISO é um modelo de referência para protocolos de comunicação entre sistemas em rede. Ele é dividido em 7 camadas, cada uma com uma função específica. A seguir, uma breve descrição, simplificada sobre cada uma delas:

### Camada 1 - Física

A camada física é responsável por transmitir os bits de um dispositivo para outro. Ela é responsável por definir a voltagem, a frequência e a codificação dos bits. Ela também é responsável por definir o meio físico de transmissão, como cabos, fibras ópticas, ondas de rádio, etc.

### Camada 2 - Enlace

A camada de enlace é responsável por transmitir os quadros de um dispositivo para outro. Ela é responsável por definir o endereço MAC (endereço físico) de cada dispositivo, o formato dos quadros, a forma de acesso ao meio físico, a detecção e correção de erros, etc.

- **Endereço MAC**: é um número que identifica um dispositivo em uma rede. Ele é definido pelo fabricante do dispositivo. O endereço MAC é um número de 48 bits, representado por 6 números de 8 bits, separados por dois pontos.

- **Quadro**: é um conjunto de bits que contém os dados que serão transmitidos. Ele é composto por um cabeçalho, os dados e um rodapé. O cabeçalho contém o endereço MAC de origem, o endereço MAC de destino e o tipo de protocolo. O rodapé contém um código de detecção de erros.

- **Detecção e correção de erros**: é a forma como os dispositivos detectam e corrigem erros na transmissão dos dados. Existem dois tipos de detecção e correção de erros: paridade e CRC (Cyclic Redundancy Check).
    - **Paridade**: é um bit que é adicionado ao quadro para que o número de bits 1 seja sempre par ou ímpar. Se o número de bits 1 não for par ou ímpar, significa que houve um erro na transmissão dos dados.
    - **CRC**: é um código que é adicionado ao quadro para que o dispositivo que recebe os dados possa verificar se houve um erro na transmissão dos dados. Se o código não for igual ao código gerado pelo dispositivo que recebe os dados, significa que houve um erro na transmissão dos dados.

### Camada 3 - Rede

A camada de rede é responsável por transmitir os pacotes de um dispositivo para outro. Ela é responsável por 
realizar o endereçamento lógico dos dispositivos (definindo o endereço IP de cada um), o roteamento dos pacotes, a fragmentação e remontagem dos pacotes, etc.

- **Endereço IP**: é um número que identifica um dispositivo em uma rede. Existem dois tipos de endereços IP: IPv4 e IPv6. O IPv4 é um número de 32 bits, representado por 4 números de 8 bits, separados por pontos. O IPv6 é um número de 128 bits, representado por 8 números de 16 bits, separados por dois pontos. O IPv4 é o mais utilizado atualmente, mas o IPv6 está ganhando espaço, pois o IPv4 possui apenas 4 bilhões de endereços, enquanto o IPv6 possui 340 undecilhões de endereços.

- **Roteamento**: é o processo de escolher o melhor caminho para enviar os pacotes. Existem dois tipos de roteamento: estático e dinâmico.
    - **Roteamento estático**: o administrador da rede define manualmente o melhor caminho para enviar os pacotes.
    - **Roteamento dinâmico**: os roteadores trocam informações entre si para definir o melhor caminho para enviar os pacotes.

- **Fragmentação e remontagem**: é o processo de dividir os pacotes em partes menores para que eles possam ser transmitidos e depois remontá-los no destino. Isso é necessário, pois os pacotes podem ser maiores que o MTU (Maximum Transmission Unit), que é o tamanho máximo que um pacote pode ter para ser transmitido. O MTU é definido pela camada física.


### Camada 4 - Transporte

É a camada responsável por transmitir/enviar os dados de um dispositivo para outro. Ela é responsável por definir o endereço de porta de cada aplicação, o controle de fluxo, a confiabilidade da transmissão, etc. 

- **Porta**: é um número que identifica uma aplicação. Existem 65536 portas, sendo que as portas de 0 a 1023 são reservadas para aplicações conhecidas, como HTTP, FTP, SMTP, etc.

- **Controle de fluxo**: é a forma como os dispositivos controlam a quantidade de dados que é transmitida. Existem duas formas de controle de fluxo: _stop-and-wait_ e _sliding window_.
    - **Stop-and-wait**: o dispositivo que envia os dados espera o dispositivo que recebe os dados enviar uma confirmação de recebimento. Só depois de receber a confirmação é que o dispositivo que envia os dados envia o próximo pacote.
    - **Sliding window**: o dispositivo que envia os dados envia vários pacotes sem esperar a confirmação de recebimento. O dispositivo que recebe os dados envia uma confirmação de recebimento para cada pacote recebido. O dispositivo que envia os dados só envia o próximo pacote depois de receber a confirmação de recebimento do pacote anterior.

- **Confiabilidade da transmissão**: é a forma como os dispositivos garantem que os dados serão transmitidos sem erros. Existem duas formas de garantir a confiabilidade da transmissão: _stop-and-wait_ e _sliding window_.

- **Stop-and-wait**: o dispositivo que envia os dados espera o dispositivo que recebe os dados enviar uma confirmação de recebimento. Só depois de receber a confirmação é que o dispositivo que envia os dados envia o próximo pacote.

- **Sliding window**: o dispositivo que envia os dados envia vários pacotes sem esperar a confirmação de recebimento. O dispositivo que recebe os dados envia uma confirmação de recebimento para cada pacote recebido. O dispositivo que envia os dados só envia o próximo pacote depois de receber a confirmação de recebimento do pacote anterior.

### Camada 5 - Sessão

É a camada responsável por estabelecer, manter e encerrar as sessões de comunicação entre os dispositivos. Ela é responsável por definir o tipo de sessão (simples, meia-duplex, duplex), a sincronização entre os dispositivos, o gerenciamento dos tokens, etc.

- **Token**: é um recurso que é passado entre os dispositivos para que eles possam se comunicar. Apenas o dispositivo que possui o token pode transmitir dados.

- **Sessão**: é uma conexão lógica entre dois dispositivos. Ela é estabelecida quando um dispositivo envia um token para o outro.

- **tipo de sessão**: define a forma como os dispositivos se comunicam. Existem três tipos de sessão: simples, meia-duplex e duplex.
    - **Sessão simples**: apenas um dispositivo pode transmitir dados por vez.
    - **Sessão meia-duplex**: os dispositivos podem transmitir dados, mas não ao mesmo tempo.
    - **Sessão duplex**: os dispositivos podem transmitir dados ao mesmo tempo.

### Camada 6 - Apresentação

É a camada responsável por definir a forma como os dados serão apresentados para o usuário. Ela é responsável por definir o formato dos dados, a criptografia, a compressão, etc.

### Camada 7 - Aplicação

É a camada responsável por definir as aplicações que serão utilizadas para a comunicação. Ela é responsável por definir o protocolo utilizado para a comunicação, como HTTP, FTP, SMTP, etc.

## O que é comutação e multiplexação?

### Comutação

Comutação é a forma como os dispositivos se comunicam. Existem três tipos de comutação: circuito, mensagem e pacote.

- **Comutação de circuito**: é a forma como os dispositivos se comunicam em uma ligação telefônica. Nesse tipo de comutação, é necessário estabelecer uma conexão entre os dispositivos antes de transmitir os dados. Essa conexão é chamada de circuito virtual. O circuito virtual é estabelecido em três etapas: estabelecimento, transmissão e encerramento. O circuito virtual é estabelecido quando o dispositivo que envia os dados envia uma mensagem para o dispositivo que recebe os dados. O circuito virtual é encerrado quando o dispositivo que envia os dados envia uma mensagem para o dispositivo que recebe os dados.

- **Comutação de mensagem**: é a forma como os dispositivos se comunicam em um chat. Nesse tipo de comutação, não é necessário estabelecer uma conexão entre os dispositivos antes de transmitir os dados. Os dados são transmitidos em forma de mensagens. Cada mensagem é transmitida de forma independente.

- **Comutação de pacote**: é a forma como os dispositivos se comunicam na internet. Nesse tipo de comutação, não é necessário estabelecer uma conexão entre os dispositivos antes de transmitir os dados. Os dados são transmitidos em forma de pacotes. Cada pacote é transmitido de forma independente.

### Multiplexação

Multiplexação é a forma como os dispositivos se comunicam. Existem três tipos de multiplexação: FDM, TDM e WDM.

- **FDM (Frequency Division Multiplexing)**: é a forma como os dispositivos se comunicam em uma ligação telefônica. Nesse tipo de multiplexação, os dados são transmitidos em um único meio físico. Cada dispositivo utiliza uma faixa de frequência diferente para transmitir os dados.

- **TDM (Time Division Multiplexing)**: é a forma como os dispositivos se comunicam em um chat. Nesse tipo de multiplexação, os dados são transmitidos em um único meio físico. Cada dispositivo utiliza um intervalo de tempo diferente para transmitir os dados.

- **WDM (Wavelength Division Multiplexing)**: é a forma como os dispositivos se comunicam na internet. Nesse tipo de multiplexação, os dados são transmitidos em um único meio físico. Cada dispositivo utiliza uma faixa de frequência diferente para transmitir os dados.

## Exercícios

1. Considerando o endereço IP 192.168.1.100 com máscara 255.255.0.0, exiba toda a sub-rede, o que inclui:
- i) Endereço da sub-rede
- ii) faixa de hosts
- iii) endereço de broadcast

- **Respondendo com passo a passo:**

    - **i) Endereço da sub-rede**

      -> Caminho mais longo
        - **Passo 1:** Converter o endereço IP e a máscara para binário

            - **Endereço IP:**
            11000000.10101000.00000001.01100100

            - **Máscara:**

            11111111.11111111.00000000.00000000

        - **Passo 2:** Aplicar a operação AND entre o endereço IP e a máscara

            - **Endereço IP:**
            11000000.10101000.00000001.01100100

            - **Máscara:**

            11111111.11111111.00000000.00000000

            - **Resultado:**
            11000000.10101000.00000000.00000000 
            -> 192.168.0.0 (endereço da sub-rede)

    -> forma mais simples
        comparar a mascara com o endereço ip e "igualar" os zeros do IP com os da Mascara <br>
        -> End.IP ----> 192.168.1.100 <br>
        -> Masc -----> 255.255.0.0  <br>
        ->Resultado -> 192.168.0.0  <br>

    - **ii) Faixa de hosts**

        - 192.168.0.1 até
        - 192.168.255.245

    - **iii) Endereço de broadcast**

        - 192.168.255.255

- **Respondendo sem passo a passo:**

    - **i) Endereço da sub-rede**
        - 192.168.0.0
    - **ii) Faixa de hosts**
    - 192.168.0.1 até 192.168.255.254
    - **iii) Endereço de broadcast**
    - 192.168.255.255

2. Defina a máscara ideal para cada uma das seguintes redes, considerando que o número de hosts é o indicado:
a) 12.000 hosts

Primeiro, precisamos encontrar o menor número que é uma potência de 2 e que é maior ou igual a 12.000. Isso é 2^14 = 16.384. Portanto, precisamos de 14 bits para os hosts. A máscara de sub-rede será 32 - 14 = 18. Portanto, a máscara de sub-rede ideal é /18.
logo a máscara ideal é 255.192.0.0

b) 5.000 hosts
O menor número que é uma potência de 2 e que é maior ou igual a 5.000 é 2^13 = 8.192. Portanto, precisamos de 13 bits para os hosts. A máscara de sub-rede será 32 - 13 = 19. Portanto, a máscara de sub-rede ideal é /19.
logo a máscara ideal é 255.224.0.0

c) 60 hosts
O menor número que é uma potência de 2 e que é maior ou igual a 60 é 2^6 = 64. Portanto, precisamos de 6 bits para os hosts. A máscara de sub-rede será 32 - 6 = 26. Portanto, a máscara de sub-rede ideal é /26.
logo a máscara ideal é 255.255.255.192

d) 6 hosts

O menor número que é uma potência de 2 e que é maior ou igual a 6 é 2^3 = 8. Portanto, precisamos de 3 bits para os hosts. A máscara de sub-rede será 32 - 3 = 29. Portanto, a máscara de sub-rede ideal é /29.
logo a máscara ideal é 255.255.255.248

- **passo a passo para a conversão de /?? para ---.---.---.---**

Divida o número após a barra (/) por 8. Isso lhe dará o número de octetos completos (255) na máscara de sub-rede. No caso de /25, temos 25/8 = 3 octetos completos.

Pegue o resto da divisão por 8. Isso lhe dará o número de bits no próximo octeto. No caso de /25, temos 25%8 = 1 bit.

Para encontrar o valor do próximo octeto, use a fórmula 2^(8 - número de bits) - 2. No nosso caso, temos 2^(8 - 1) - 2 = 128.

Os octetos restantes serão 0.

Portanto, para /25, a máscara de sub-rede seria 255.255.255.128.

para /10, a máscara de sub-rede seria

10/8 = 1 octeto completo

10%8 = 2 bits

2^(8 - 2) - 2 = 192

Portanto, para /10, a máscara de sub-rede seria 255.192.0.0

para /15, a máscara de sub-rede seria

15/8 = 1 octeto completo

15%8 = 7 bits

2^(8 - 7) - 2 = 126

Portanto, para /15, a máscara de sub-rede seria 255.126.0.0
