/**

    This file is mainly a playground to add any code needed.
    Add a method here, import what you need, and then call the
    method in routing.js wherever you need it executed.
    
**/

import $ from 'jquery'
// hello from the old master branch before merging. this one has :) 
import people from './_person.js'

export class Functions {

    /* Prints the people imported from _person.js */
    printPeople() {

        people.forEach( person => {
            
            console.log( `${person} :)` );

        } )

    }

}