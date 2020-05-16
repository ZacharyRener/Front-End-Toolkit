import './../assets/main.scss'
import people from './_person.js'


const main = () => {

    people.forEach(person=>{
        console.log(person + " :) ")
    })

}

main()