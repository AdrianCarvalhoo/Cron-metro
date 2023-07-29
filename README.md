# Cronômetro

Este é um projeto simples de cronômetro desenvolvido em JavaScript que permite ao usuário iniciar, parar e zerar o cronômetro. O cronômetro exibirá o tempo decorrido em horas, minutos e segundos.

## Funcionalidades

O cronômetro possui as seguintes funcionalidades:

1. Iniciar/Parar: O botão "Iniciar/Parar" permite ao usuário iniciar e parar o cronômetro. Ao clicar neste botão, o cronômetro começará a contar a partir de onde parou ou zerará o tempo caso seja a primeira vez que é iniciado.

2. Zerar: O botão "Zerar" permite ao usuário resetar o cronômetro para o tempo inicial (00:00:00) e parar sua contagem, caso esteja em execução.

## Como funciona o código

O código JavaScript possui algumas funções essenciais para o funcionamento do cronômetro:

1. `startStop()`: Esta função é chamada quando o botão "Iniciar/Parar" é clicado. Se o cronômetro estiver em execução, a função irá parar a contagem usando `clearInterval()`. Caso contrário, ela iniciará a contagem usando `setInterval()` chamando a função `updateTime()` a cada 1000 milissegundos (1 segundo).

2. `reset()`: Esta função é chamada quando o botão "Zerar" é clicado. Ela para a contagem do cronômetro e redefine a variável `seconds` para 0, permitindo que o cronômetro comece a contagem do zero novamente. Além disso, ela atualiza o visor do cronômetro chamando `updateClockDisplay()`.

3. `updateTime()`: Esta função é chamada a cada segundo quando o cronômetro está em execução. Ela incrementa a variável `seconds` em 1 e atualiza o visor do cronômetro chamando `updateClockDisplay()`.

4. `updateClockDisplay()`: Esta função atualiza o visor do cronômetro com o tempo decorrido no formato "HH:mm:ss" (horas, minutos e segundos). Ela calcula as horas, minutos e segundos a partir do valor da variável `seconds` e utiliza a função `padNumber()` para formatar os valores com dois dígitos (por exemplo, 08 em vez de 8).

5. `padNumber(number)`: Esta função recebe um número e retorna o número formatado com dois dígitos. Ela é utilizada para garantir que os valores de horas, minutos e segundos sempre tenham dois dígitos no visor do cronômetro.

## Utilização

Para utilizar o cronômetro, basta abrir o arquivo HTML `index.html` em um navegador da web. O cronômetro será exibido na página, mostrando o tempo decorrido desde que foi iniciado. Clique no botão "Iniciar/Parar" para iniciar ou parar o cronômetro, e clique no botão "Zerar" para reiniciar o cronômetro do zero.

## Personalização

Se desejar personalizar a aparência do cronômetro, você pode editar o arquivo `styles.css` que está vinculado ao arquivo HTML. Lá, você poderá modificar o estilo dos botões, o tamanho da fonte ou qualquer outro aspecto visual do cronômetro.

## Requisitos

O projeto não possui dependências externas e funciona apenas com JavaScript e HTML. Portanto, não é necessário instalar nenhuma biblioteca adicional.

## Observações

Este cronômetro foi desenvolvido utilizando JavaScript padrão e é compatível com a maioria dos navegadores modernos, incluindo Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, entre outros.
