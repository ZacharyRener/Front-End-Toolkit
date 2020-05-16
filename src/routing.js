/**

    This file controls the client-side routing, while the 
    main logic of the app is controlled by functions.js

    We define a slug, and assign it a function. That function
    contains the different methods from functions.js that will 
    execute on that slug.

    To add new JavaScript:
    1. Create a method in functions.js to do what you need
    2. Call it from allPages() or wherever you need it using 
        context.functions.yourFunction 
    
**/

import { Functions } from './functions.js'

import { Router } from './../dist/Router.js'

export class Routing {

     /** This method is executed on all pages */

     allPages(context) {

        context.functions.printPeople()

    }

    /** This method is executed only on the homepage */

    home(context) {

        

    }

    constructor() {

        /** Pulls in the methods from functions.js */
        this.functions = new Functions()

        const router = new Router()

        /** .get() defines a route. Takes a slug, and a function */
        router.get( '.*', () => { this.allPages(this)   } )
        router.get(  '/', () => { this.home(this)       } )

        /** To add a new route:
         *  1. Choose a slug, such as about-us/team/.*
         *  2. Create a method for the route, such as singleTeam(context)
         *  3. Add the router. Example:
         *      router.get( 'about-us/team/.*', () => { this.singleTeam(this)   } )
         *  4. Add new methods as needed in functions.js, and call from the new routing method
         */
        
        router.init()

    }

}