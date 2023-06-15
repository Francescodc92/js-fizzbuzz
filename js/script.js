/*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Ragionamento Base:
1. scrivere un programma che stampi in console i numeri da 1 a 100
  - ciclo da 1 a 100

2. ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
  - condizione che verifica se il numero corrente sia divisibile per 3 e per 5
    - cambio il testo in console dal numero al testo fizzbuzz 
  - consizione che verifica se il numero è dividibile solo per 5
    - cambio il testo in console dal numero al testo buzz 
  - condizione che verifica se il numero è divisibile solo per 3 
    - cambio il testo in console dal numero al testo fizz

  se le condizioni precedenti non si verificano stampo il numero corrente 
*/

for (let i = 1; i <= 100; i++) {
  let currentLog = i
  if (i % 5 == 0 && i % 3 == 0) {
    currentLog = "FizzBuzz"
  } else if (i % 5 == 0) {
    currentLog = "Buzz"
  } else if (i % 3 == 0) {
    currentLog = "Fizz"
  }

  console.log(currentLog)
}
