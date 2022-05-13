function SayMyName(props){
    console.log("Before arrow");
    props()
    console.log("After arrow");
}

SayMyName(
    ()=>{
        console.log(" => While Arrow");
    }
)

function Person(newPerson){
    this.name = newPerson
    this.walk = ()=>{return this.name +" Walking"}

}
// newPersonName está referenciada como o THIS acima
const newPersonName = new Person("Andrew")
const newPersonName2 = new Person("Rafinha")
console.log(newPersonName.walk());
console.log(newPersonName2.walk());