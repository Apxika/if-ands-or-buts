const prompt = require ('prompt-sync')({sigint: true})

let pin = Number(prompt('Enter pin number: '))

if(pin === 1234) {
    console.log('Success')
}   else {
        console.log('Failure')
    }
