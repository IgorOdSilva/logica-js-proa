const exerciciosFacat = [
    {
        nome: "soma",
        exercicio: function ex1() {
            let numero1 = parseInt(prompt("digite o numero 1: "));
            let numero2 = parseInt(prompt("digite o numero 2: "));

            alert(`a soma dos números informados é ${numero1 + numero2}`);
        },
    },
    {
        nome: "subtração",
        exercicio: function ex2() {
            let numero1 = parseInt(prompt("digite o numero 1: "));
            let numero2 = parseInt(prompt("digite o numero 2: "));

            alert(`a subtração dos números informados é ${numero1 - numero2}`);
        },
    },
    {
        nome: "multiplicação",
        exercicio: function ex3() {
            let numero1 = parseInt(prompt("Digite um valor: "));
            let numero2 = parseInt(prompt("Digite Outro valor: "));

            alert(
                `A multiplicação dos números informados é ${numero1 * numero2}`
            );
        },
    },
    {
        nome: "divisão",
        exercicio: function ex4() {
            let numero1 = parseInt(prompt("Digite um valor: "));
            let numero2 = parseInt(prompt("Digite Outro valor: "));

            alert(`A divisão dos números informados é ${numero1 / numero2}`);
        },
    },
    {
        nome: "antecessor",
        exercicio: function ex5() {
            let numero = parseInt(prompt("Digite um número: "));
            let antecessor = numero - 1;
            alert(`O antecessor do número ${numero} é ${antecessor}`);
        },
    },
    {
        nome: "area do retangulo",
        exercicio: function ex6() {
            let base = parseInt(prompt("Digite a base do retângulo: "));
            let altura = parseInt(prompt("Digite a altura do retângulo: "));
            let area = base * altura;

            alert(`A Área do retângulo é: ${area}`);
        },
    },

    {
        nome: "dias de vida",
        exercicio: function ex7() {
            var idade = parseInt(prompt("Digite sua idade: "));
            var mesversario = parseInt(
                prompt(
                    "Digite quantos meses fazem desde sua ultimo aniversario: "
                )
            );
            let dias = parseInt(
                prompt(
                    "Digite quantos dias se passaram em relação ao mês que você nasceu: "
                )
            );
            var dias_de_vida = idade * 365 + mesversario * 30 + dias;

            alert(`voce tem ${dias_de_vida} dias de vida`);
        },
    },

    {
        nome: "votos",
        exercicio: function ex9() {
            let numero_total_votos = parseInt(
                prompt("digite o numero total de votos:")
            );
            let numero_votos_brancos = parseInt(
                prompt("digite o numero de votos brancos:")
            );
            let numero_votos_nulos = parseInt(
                prompt("digite o numero de votos nulos:")
            );
            let numero_votos_validos = parseInt(
                prompt("digite o numero de votos validos:")
            );

            let votoBrancos = (numero_votos_brancos / numero_total_votos) * 100;
            let votosNulos = (numero_votos_nulos / numero_total_votos) * 100;
            let votosValidos =
                (numero_votos_validos / numero_total_votos) * 100;

            alert(`o numero de votos brancos representam ${votoBrancos}%`);

            alert(`o numero de votos nulos representam ${votosValidos}%`);

            alert(`o numero de votos validos representam ${votosNulos}%`);
        },
    },

    {
        nome: "concessionária",
        exercicio: function ex10() {
            let numeroCarrosVendidos = parseInt(
                prompt("Digite o numero de carros vendidos:")
            );
            let valorTotalVendas = parseInt(
                prompt("Digite o valor total de vendas")
            );
            let salarioFixo = parseInt(prompt("Digite o salario fixo:"));
            let valorComissao = parseInt(
                prompt("Digite o valor recebido por carro vendido:")
            );

            let salarioFinal =
                salarioFixo +
                (numeroCarrosVendidos + valorComissao) +
                valorTotalVendas * 0.05;

            alert("O salario final do funcionario é: ", salarioFinal);
        },
    },
    {
        nome: "reajuste",
        exercicio: function ex11() {
            let salario = parseInt(prompt("Digite seu salário atual: "));
            let percentReajuste = parseInt(
                prompt("Digite a porcentagem do reajuste: ")
            );

            let reajuste = salario * (1 + percentReajuste / 100);
            alert(`Seu salário reajustado é: ${reajuste}`);
        },
    },
    {
        nome: "custo de fabrica",
        exercicio: function ex12() {
            let custo = parseInt(
                prompt("Digite o custo de fábrica do carro: ")
            );
            let valorFinal = custo * (28 / 100) + custo * (45 / 100) + custo;

            alert(`O valor final com os impostos é: ${valorFinal}`);
        },
    },
    {
        nome: "Convertor de graus",
        exercicio: function ex13() {
            let grausCelsius = parseInt(
                prompt("Digite a temperatura em Celsius: ")
            );
            let grausFahrenheit = grausCelsius * (9 / 5) + 32;

            alert(`A temperatura em Fahrenheit é: ${grausFahrenheit}`);
        },
    },

    {
        nome: "media",
        exercicio: function ex14() {
            let nota1 = parseInt(prompt("Digite a primeira nota: "));
            let nota2 = parseInt(prompt("Digite a segunda nota: "));
            let nota3 = parseInt(prompt("Digite a terceira nota: "));
            let media = (nota1 + nota2 + nota3) / 3;

            alert(`A media do aluno é: ${media}`);
        },
    },

    {
        nome: "é maior que 10?",
        exercicio: function ex15() {
            let numero = parseInt(prompt("Digite um número: "));
            if (numero > 10) alert("O número é maior que 10!");
            else alert("O número é menor que 10!");
        },
    },

    {
        nome: "positivo ou negativo",
        exercicio: function ex16() {
            let numero = parseInt(prompt("Digite um número: "));
            if (numero >= 0) alert("O número é Positivo");
            else alert("O número é Negativo!");
        },
    },

    {
        nome: "valor da maçã",
        exercicio: function ex18() {
            let quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));

            if (quantidade < 12) {
                alert(`${quantidade} maçãs deream ${quantidade * 1.3}$`);
            } else {
                alert(`${quantidade} maçãs deream ${quantidade * 1.0}$`);
            }
        },
    },

    {
        nome: "reprovado ou aprovado",
        exercicio: function ex19() {
            let quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));

            if (quantidade < 12) {
                alert(`${quantidade} maçãs deream ${quantidade * 1.3}$`);
            } else {
                alert(`${quantidade} maçãs deream ${quantidade * 1.0}$`);
            }
        },
    },
    {
        nome: "pode votar?",
        exercicio: function ex20() {
            let ano = parseInt(prompt("digite o ano que voçê nasceu:"));
            let anoAtual = parseInt(prompt("digite o ano atual:"));

            if (anoAtual - ano >= 16) {
                alert("voce pode votar esse ano");
            } else {
                alert("voce nao pode votar");
            }
        },
    },
    {
        nome: "maior e menor",
        exercicio: function ex21() {
            let numero1 = parseInt(prompt("Digite o primeiro numero"));
            let numero2 = parseInt(prompt("Digite o segundo numero"));

            if (numero1 > numero2) {
                alert("o maior numero é ", numero1);
            } else {
                alert("o menor numero é ", numero2);
            }
        },
    },
    {
        nome: "ordem crescente",
        exercicio: function ex22() {
            let numero1 = parseInt(prompt("Digite o primeiro numero"));
            let numero2 = parseInt(prompt("Digite o segundo numero"));

            if (numero1 > numero2) {
                alert("os valores em ordem crescente é: ", numero1, numero2);
            } else {
                alert("os valores em ordem crescente é: ", numero2, numero1);
            }
        },
    },
    {
        nome: "xadrez",
        exercicio: function ex23() {
            let horarioComeco = parseInt(
                prompt("Digite o horário de começo da partida: ")
            );
            let horarioFim = parseInt(
                prompt("Digite o horário de finalização da partida: ")
            );

            let calcHora = 0;

            if (horarioComeco > horarioFim)
                calcHora = 24 - horarioComeco + horarioFim;
            else if (horarioComeco == horarioFim) calcHora = 12;
            else calcHora = horarioFim - horarioComeco;

            alert(`O jogo durou ${calcHora} horas.`);
        },
    },

    {
        nome: "jornade de trabalho",
        exercicio: function ex24() {
            let horasMes = parseInt(
                prompt("Digite o numero de horas trabalhadas em um mês: ")
            );
            let salarioHora = parseInt(
                prompt("Digite o valor da hora regular: ")
            );
            let jornadaMin = 40 * 4;
            let salarioTotal = 0;

            if (horasMes > jornadaMin) {
                let horasExtras = horasMes - jornadaMin;
                salarioTotal =
                    salarioHora * jornadaMin +
                    horasExtras * (salarioHora * 1.5);
            } else salarioTotal = salarioHora * horasMes;

            alert(`O valor do seu salaário é de R$ ${salarioTotal}.`);
        },
    },

    {
        nome: "peso ideal",
        exercicio: function ex25() {
            let nome = prompt("Digite o seu nome: ");
            let sex = prompt("Digite o seu sexo (M/F): ");
            let altura = parseFloat(
                prompt("Digite o sua altura (use . no lugar da virgula): ")
            );
            let ideal = 0;

            if (sex.toLocaleLowerCase() == "m") ideal = 72.7 * altura - 58;
            else if (sex.toLocaleLowerCase() == "f")
                ideal = 62.1 * altura - 44.7;
            alert(`${nome}, o seu peso ideal é de ${ideal}kg.`);
        },
    },
    {
        nome: "salario total",
        exercicio: function ex26() {
            let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
            let totalVendas = parseFloat(
                prompt("Digite o valor total de vendas: ")
            );
            let salarioTotal,
                vendasExtras = 0;

            if (totalVendas > 1500) {
                vendasExtras = totalVendas - 1500;
            }

            if (totalVendas <= 1500)
                salarioTotal = salarioFixo + totalVendas * 1.03;
            else
                salarioTotal =
                    salarioFixo +
                    (totalVendas - vendasExtras) * 1.03 +
                    vendasExtras * 1.05;
            alert(`Seu salário total é: ${salarioTotal}`);
        },
    },

    {
        nome: "saldo total",
        exercicio: function ex27() {
            let conta = parseInt(prompt("Digite o número da sua conta: "));
            let saldo = parseFloat(prompt("Digite o valor do seu Saldo: "));
            let debito = parseFloat(prompt("Digite o valor do seu Débito: "));
            let credito = parseFloat(prompt("Digite o valor do seu Crédito: "));

            let saldoAtual = saldo - debito + credito;
            let resultado = "";

            if (saldoAtual >= 0) resultado = "Saldo Positivo";
            else resultado = "Saldo Negativo";
            alert(
                `Sua conta é a de número: ${conta} Seu saldo é: ${resultado}`
            );
        },
    },

    {
        nome: "estoque",
        exercicio: function ex28() {
            let quantProdAtual = parseInt(
                prompt("Digite a quantidade de produtos em estoque: ")
            );
            let quantMax = parseInt(
                prompt("Digite a quantidade máxima que o estoque comporta: ")
            );
            let quantMin = parseInt(
                prompt("Digite a quantidade mínima que o estoque precisa: ")
            );

            let quantMedia = (quantMax + quantMin) / 2;
            let efetuar = "";

            if (quantProdAtual >= quantMedia) efetuar = "Não efetuar compra";
            else efetuar = "Efetuar compra";
            alert(`A quantidade media de estoque é: ${quantMedia}\n${efetuar}`);
        },
    },

    {
        nome: "positivo, negativo ou zero",
        exercicio: function ex29() {
            let numero = parseInt(prompt("Digite um número: "));
            let resultado = "";

            if (numero > 0) resultado = "Positivo";
            else if (numero == 0) resultado = "Zero";
            else resultado = "Negativo";

            alert(`O Número digitado é: ${resultado}`);
        },
    },

    {
        nome: "maior valor v2",
        exercicio: function ex30() {
            let numero1 = parseInt(prompt("Digite o primeiro número: "));
            let numero2 = parseInt(prompt("Digite o segundo número: "));
            let numero3 = parseInt(prompt("Digite o terceiro número: "));

            if (numero1 > numero2) {
                if (numero1 > numero3) alert(`O maior número é: ${numero1}`);
                else alert(`O maior número é: ${numero3}`);
            } else if (numero2 > numero3) alert(`O maior número é: ${numero2}`);
            else alert(`O maior número é: ${numero3}`);
        },
    },

    {
        nome: "maior valor entre 3",
        exercicio: function ex31() {
            let numero1 = parseInt(prompt("Digite o primeiro número: "));
            let numero2 = parseInt(prompt("Digite o segundo número: "));
            let numero3 = parseInt(prompt("Digite o terceiro número: "));

            let maior1 = Math.max(numero1, numero2, numero3);
            let maior2 =
                numero1 !== maior1
                    ? Math.max(numero1, numero2)
                    : Math.max(numero2, numero3);

            let somados = maior1 + maior2;
            alert(`A soma dos 2 maiores números informados é: ${somados}`);
        },
    },

    {
        nome: "ordem crescente entre 3",
        exercicio: function ex32() {
            let numero1 = parseInt(prompt("Digite o primeiro número: "));
            let numero2 = parseInt(prompt("Digite o segundo número: "));
            let numero3 = parseInt(prompt("Digite o terceiro número: "));

            let ordem = [numero1, numero2, numero3];
            ordem.sort((a, b) => a - b);

            alert(`Os números em ordem crescente: ${ordem}`);
        },
    },

    {
        nome: "é um triangulo?",
        exercicio: function ex33() {
            let numero1 = parseInt(prompt("Digite o primeiro número: "));
            let numero2 = parseInt(prompt("Digite o segundo número: "));
            let numero3 = parseInt(prompt("Digite o terceiro número: "));

            if (
                numero1 > numero2 + numero3 ||
                numero2 > numero1 + numero3 ||
                numero3 > numero1 + numero2
            )
                alert(`Os valores não forma um triângulo.`);
            else alert(`Os valores formam um triângulo.`);
        },
    },

    {
        nome: "Verificar vencedor",
        exercicio: function ex34() {
            let time1 = prompt("Digite o nome do primeiro time: ");
            let time2 = prompt("Digite o nome do segundo time: ");

            let gols1 = parseInt(
                prompt("Digite o número de gols do primeiro time: ")
            );
            let gols2 = parseInt(
                prompt("Digite o número de gols do segundo time: ")
            );

            let vencedor = "";

            if (gols1 > gols2) vencedor = time1;
            else if (gols1 < gols2) vencedor = time2;
            else vencedor = "EMPATE";

            alert("O vencedor é: " + vencedor);
        },
    },
    {
        nome: "Comparar números",
        exercicio: function ex35() {
            let numero1 = parseInt(prompt("Digite um número: "));
            let numero2 = parseInt(prompt("Digite outro número: "));

            let comparacao =
                numero1 > numero2
                    ? "Primeiro maior"
                    : numero1 == numero2
                    ? "Números iguais"
                    : "Segundo maior";

            alert(`Sobre os números: ${comparacao}`);
        },
    },
    {
        nome: "Calcular preço do combustível",
        exercicio: function ex36() {
            alert(
                `Bem vindo ao posto de gasolina da Faccat\nÁlcool: R$2.90 / Gasolina: R$3.30`
            );
            alert(
                `Álcool até 20L: 3% de desconto / Acima disso: 5% de desconto\nGasolina até 20L: 4% de desconto / Acima disso: 6% de desconto`
            );

            let combustivel = prompt(
                "Escolha o tipo de combustível (A - álcool, G - gasolina): "
            );
            let litros = parseInt(
                prompt("Digite quantos litros deseja abastecer: ")
            );
            let preco = 0;

            if (litros > 20) {
                if (combustivel.toUpperCase() === "A")
                    preco = litros * 2.9 * (1 - 0.05);
                else if (combustivel.toUpperCase() === "G")
                    preco = litros * 3.3 * (1 - 0.05);
            } else {
                if (combustivel.toUpperCase() === "A")
                    preco = litros * 2.9 * (1 - 0.03);
                else if (combustivel.toUpperCase() === "G")
                    preco = litros * 3.3 * (1 - 0.03);
            }

            alert(`O valor a ser pago é de R$${preco.toFixed(2)}`);
        },
    },
    {
        nome: "Calcular soma e produto de idades",
        exercicio: function ex37() {
            let idadeHomem1 = parseInt(
                prompt("Digite a idade do primeiro homem: ")
            );
            let idadeHomem2 = parseInt(
                prompt("Digite a idade do segundo homem: ")
            );
            let idadeMulher1 = parseInt(
                prompt("Digite a idade da primeira mulher: ")
            );
            let idadeMulher2 = parseInt(
                prompt("Digite a idade da segunda mulher: ")
            );

            let maiorH, menorH, maiorM, menorM;

            if (idadeHomem1 > idadeHomem2) {
                maiorH = idadeHomem1;
                menorH = idadeHomem2;
            } else {
                maiorH = idadeHomem2;
                menorH = idadeHomem1;
            }

            if (idadeMulher1 > idadeMulher2) {
                maiorM = idadeMulher1;
                menorM = idadeMulher2;
            } else {
                maiorM = idadeMulher2;
            }

            let somaIdades = maiorH + menorM;
            let multIdades = menorH * maiorM;

            alert(
                `A soma das idades do homem mais velho com a mulher mais nova é: ${somaIdades}`
            );
            alert(
                `O produto das idades do homem mais novo com a mulher mais velha é: ${multIdades}`
            );
        },
    },
    {
        nome: "Calcular preço das frutas",
        exercicio: function ex38() {
            alert(
                `A maçã custa R$1.80 até 5kg, e R$1.50 acima disso\nE morangos custam R$2.50 até 5kg, e R$2.20 acima disso.\nTemos também 10% de desconto se sua compra ultrapassar 8kg ou R$25.`
            );

            let macas = parseInt(
                prompt("Digite quantos Kg de maçã irá levar: ")
            );
            let morangos = parseInt(
                prompt("Ditire quantos Kg de morango irá levar: ")
            );

            let compra = 0;
            let kgFinal = morangos + macas;

            let totalMorangos = morangos > 5 ? morangos * 2.2 : morangos * 2.5;

            let totalMacas = macas > 5 ? macas * 1.5 : macas * 1.8;

            compra = totalMacas + totalMorangos;
            if (kgFinal > 8 || compra > 25) compra -= compra * 0.1;

            alert(`Preço final: ${compra}`);
        },
    },
    {
        nome: "Verificar usuário e senha",
        exercicio: function ex39() {
            let login, senha, tentaLogin, tentaSenha;

            login = 1234;
            senha = 9999;

            tentaLogin = parseInt(prompt("Digite o Login: "));

            if (tentaLogin !== login) {
                alert("Login inválido!");
            } else {
                tentaSenha = parseInt(prompt("Digite a Senha: "));

                if (tentaSenha !== senha) alert("Senha inválida!");
                else alert("Acesso Permitido!");
            }
        },
    },
    {
        nome: "Calcular preço do produto com desconto",
        exercicio: function ex40() {
            let nomeProd, quantidade, precoUni, total, desconto;

            nomeProd = prompt("Digite o nome do produto: ");
            precoUni = parseFloat(
                prompt("Digite o preço unitário do produto: ")
            );
            quantidade = parseInt(prompt("Digite a quantidade adquirida: "));

            total = quantidade * precoUni;

            if (quantidade > 10) desconto = total * 0.05;
            else {
                if (quantidade > 5 && quantidade <= 10) desconto = total * 0.03;
                else desconto = total * 0.02;
            }

            alert(
                `Produto: ${nomeProd}\nQuantidade: ${quantidade}\nPreço unitário: ${precoUni}\nTotal a pagar: ${
                    total - desconto
                }`
            );
        },
    },
    {
        nome: "Calcular aproveitamento do aluno",
        exercicio: function ex41() {
            let nota1, nota2, nota3, mediaExercicios, mediaFinal, notaMedia;

            nota1 = parseFloat(prompt("Digite a Primeira Nota: "));
            nota2 = parseFloat(prompt("Digite a Segunda Nota: "));
            nota3 = parseFloat(prompt("Digite a Terceira Nota: "));
            mediaExercicios = parseFloat(
                prompt("Digite a Média dos Exercícios: ")
            );

            mediaFinal = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;

            if (mediaFinal >= 9.0) notaMedia = "A";
            else if (mediaFinal >= 7.5 && mediaFinal < 9.0) notaMedia = "B";
            else if (mediaFinal >= 6.0 && mediaFinal < 7.5) notaMedia = "C";
            else notaMedia = "D";

            alert("O Aproveitamento Final é: " + notaMedia);
        },
    },
    {
        nome: "Verificar aposentadoria do empregado",
        exercicio: function ex42() {
            let vaiAposentar = "";
            let anoAtual = Date().getFullYear();

            let codFuncionario = parseInt(
                prompt("Digite seu ID de funcionário: ")
            );
            let nascimento = parseInt(prompt("Digite seu ano de nascimento: "));
            let ingressoEmpresa = parseInt(
                prompt("Digite seu ano de entrada na empresa: ")
            );

            let idadeFuncionario = anoAtual - nascimento;
            let tempoTrabalhado = anoAtual - ingressoEmpresa;

            if (
                idadeFuncionario >= 65 ||
                tempoTrabalhado >= 30 ||
                (idadeFuncionario >= 60 && tempoTrabalhado >= 25)
            )
                vaiAposentar = "Requerer aposentadoria";
            else vaiAposentar = "Não requerer";

            alert(
                `Funcionário: ${codFuncionario}\nIdade: ${idadeFuncionario}\nTempo na Empresa: ${tempoTrabalhado}\nApto para aposentar: ${vaiAposentar}`
            );
        },
    },
    {
        nome: "Ler valores e fazer divisão",
        exercicio: function ex43() {
            let num1, num2;

            num1 = parseInt(prompt("Digite o Primeiro valor: "));

            do {
                alert("Aviso: o segundo valor não pode ser 0...");
                num2 = parseInt(prompt("Digite o Segundo valor: "));
            } while (num2 === 0);

            alert(`${num1} ${num2}`);
        },
    },
    {
        nome: "Ler valores e fazer divisão (ENQUANTO)",
        exercicio: function ex44() {
            let num1,
                num2 = 0;
            num1 = parseInt(prompt("Digite o Primeiro valor: "));

            while (num2 === 0) {
                alert("Aviso: o segundo valor não pode ser 0...");
                num2 = parseInt(prompt("Digite o Segundo valor: "));
            }

            alert(`${num1} ${num2}`);
        },
    },
    {
        nome: "Ler valores e fazer divisão (DO-WHILE)",
        exercicio: function ex45() {
            let num1, num2;

            num1 = parseInt(prompt("Digite o Primeiro valor: "));

            do {
                num2 = parseInt(prompt("Digite o Segundo valor: "));
                if (num2 === 0) alert("VALOR INVÁLIDO");
            } while (num2 === 0);

            alert(`${num1} ${num2}`);
        },
    },
    {
        nome: "Ler valores e fazer divisão com mensagem de erro",
        exercicio: function ex46() {
            let num1,
                num2 = 0;

            num1 = parseInt(prompt("Digite o Primeiro valor: "));
            while (num2 === 0) {
                num2 = parseInt(prompt("Digite o Segundo valor: "));
                if (num2 === 0) alert("VALOR INVÁLIDO");
            }

            alert(`${num1} ${num2}`);
        },
    },
    {
        nome: "Calcular média de notas",
        exercicio: function ex47() {
            let nota1, nota2, media;
            nota1 = -1;

            while (nota1 < 0 || nota1 > 10) {
                nota1 = parseInt(prompt("Digite a nota da Avaliação 1: "));
                if (nota1 === 0) alert("VALOR INVÁLIDO");
            }

            do {
                nota2 = parseInt(prompt("Digite a nota da Avaliação 2: "));
                if (nota2 === 0) alert("VALOR INVÁLIDO");
            } while (nota2 < 0 || nota2 > 10);

            media = (nota1 + nota2) / 2;

            alert(`Média do aluno: ${media}`);
        },
    },
    {
        nome: "Calcular média de notas com opção de novo cálculo",
        exercicio: function ex48() {
            let nota1, nota2, media, novoCalc;

            do {
                nota1 = -1;

                while (nota1 < 0 || nota1 > 10) {
                    nota1 = parseInt(prompt("Digite a nota da Avaliação 1: "));
                    if (nota1 === 0) alert("VALOR INVÁLIDO");
                }

                do {
                    nota2 = parseInt(prompt("Digite a nota da Avaliação 2: "));
                    if (nota2 === 0) alert("VALOR INVÁLIDO");
                } while (nota2 < 0 || nota2 > 10);

                media = (nota1 + nota2) / 2;
                alert(`Média do aluno: ${media}`);
                novoCalc = prompt("Novo Cálculo? (S/N)").toUpperCase();
            } while (novoCalc === "S");
        },
    },
];

export default exerciciosFacat;
