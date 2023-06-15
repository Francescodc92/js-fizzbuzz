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

const rowElement = document.querySelector(".row")

const formElement = document.querySelector("form#form")
formElement.addEventListener("submit", (e) => {
  rowElement.innerHTML = ""
  e.preventDefault()
  const numberCards = document.querySelector("#number-cards")
  const valueNumber = Number(numberCards.value)
  if (valueNumber != NaN) {
    for (let i = 1; i <= valueNumber; i++) {
      let currentLog
      let bgColor = "#1389b2"
      if (i % 5 == 0 && i % 3 == 0) {
        currentLog = "FizzBuzz"
        bgColor = "#f0466f"
      } else if (i % 5 == 0) {
        currentLog = "Buzz"
        bgColor = "#ffd166"
      } else if (i % 3 == 0) {
        currentLog = "Fizz"
        bgColor = "#0cd6a1"
      } else {
        currentLog = i
      }

      renderHtml(currentLog, bgColor)
    }
  }
})

function renderHtml(currentLog, bgColor) {
  const numberContainer = `
    <div class="col-3 col-md-2">
      <div style="background-color:${bgColor}" class="number-container border text-center">
        ${currentLog}
      </div>
    </div>
  `
  rowElement.innerHTML += numberContainer
}
