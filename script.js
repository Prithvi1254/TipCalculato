const calculateBill = () => {
  let tbil = document.getElementById('billTotalInput')
  tbil = Number(tbil.value)
  let tip = document.getElementById('tipInput')
  tip = Number(tip.value)
  let c = document.getElementById('perPersonTotal')
  c.innerText = `$${(tbil + ((tip * tbil) / 100)) / Number(people)}`

}
let people = 1
const increasePeople = () => {
  people++
  let num = document.getElementById('numberOfPeople')
  num.innerText = people
  calculateBill()
}

const decreasePeople = () => {
  if (people > 1) people--
  let num = document.getElementById('numberOfPeople')
  num.innerText = people
  calculateBill()
}
