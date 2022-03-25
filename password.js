console.log(`╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗  ╔╦╗╔═╗  ╔╦╗╦ ╦╔═╗  ╔═╗╔═╗╔═╗╔═╗╦ ╦╔═╗╦═╗╔╦╗  ╦  ╦╔═╗╦  ╦╔╦╗╔═╗╔╦╗╔═╗╦═╗┬┬
║║║║╣ ║  ║  ║ ║║║║║╣    ║ ║ ║   ║ ╠═╣║╣   ╠═╝╠═╣╚═╗╚═╗║║║║ ║╠╦╝ ║║  ╚╗╔╝╠═╣║  ║ ║║╠═╣ ║ ║ ║╠╦╝││
╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝   ╩ ╚═╝   ╩ ╩ ╩╚═╝  ╩  ╩ ╩╚═╝╚═╝╚╩╝╚═╝╩╚══╩╝   ╚╝ ╩ ╩╩═╝╩═╩╝╩ ╩ ╩ ╚═╝╩╚═oo`)

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question(`
╦ ╦╦ ╦╔═╗╔╦╗  ╔═╗╔═╗╔═╗╔═╗╦ ╦╔═╗╦═╗╔╦╗  ╦ ╦╔═╗╦ ╦╦  ╔╦╗  ╦ ╦╔═╗╦ ╦  ╦  ╦╦╔═╔═╗  ╔╦╗╔═╗  ╦  ╦╔═╗╦  ╦╔╦╗╔═╗╔╦╗╔═╗┌─┐
║║║╠═╣╠═╣ ║   ╠═╝╠═╣╚═╗╚═╗║║║║ ║╠╦╝ ║║  ║║║║ ║║ ║║   ║║  ╚╦╝║ ║║ ║  ║  ║╠╩╗║╣    ║ ║ ║  ╚╗╔╝╠═╣║  ║ ║║╠═╣ ║ ║╣  ┌┘
╚╩╝╩ ╩╩ ╩ ╩   ╩  ╩ ╩╚═╝╚═╝╚╩╝╚═╝╩╚══╩╝  ╚╩╝╚═╝╚═╝╩═╝═╩╝   ╩ ╚═╝╚═╝  ╩═╝╩╩ ╩╚═╝   ╩ ╚═╝   ╚╝ ╩ ╩╩═╝╩═╩╝╩ ╩ ╩ ╚═╝ o 
`, function(input){
	tokens = input.split(' ');


	
	let password = tokens[0];
 
    if(`${password.length}` < 10){
        console.log("Password needs at least 10 characters.")
    }else if(`${password.search(/[A-Z]/)}` < 0){
        console.log("Password needs an upper case letter.")
    }else if(`${password.search(/[0-9]/)}` < 0){
        console.log("Password needs at least one number.")
    }else if(`${password.search(/[!@#$%^&*]/)}` < 0){
        console.log("Password needs a speacial character.")
    }else{
        console.log("Valid Password!!")
    }



    reader.close()

});
