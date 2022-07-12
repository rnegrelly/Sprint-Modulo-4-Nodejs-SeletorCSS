import readline from "readline";

const rl = readline.createInterface({    
    input: process.stdin,
    output: process.stdout
})

var seletor = []

rl.question('Quais seletores CSS você precisa organizar? ', (resposta) =>{
    
    seletor.push(resposta.toLocaleLowerCase().trim());
    rl.setPrompt("Algum outro? Se não, digite 'sair'. ")
    rl.prompt()  
})

rl.on('line', (input) =>{
    if(input.trim() == "sair"){
        seletor.sort()
        console.log(seletor)
        process.exit()
    } else {
        seletor.push(input.toLocaleLowerCase().trim());
    }
    
})
