/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


// Konstruktoriaus funkcija su objektais 

class Movie {
    constructor(title,director,budget) {
        this.title = title;
        this.budget = budget;
        this.director = director;
        }

        wasExpensive() {
            if(this.budget >= 100000000) {
                return  true
            } else  {
               return  false
                
               }
            }
}

// -------------------------------------------------------------------

// filmai

const firstMovie = new Movie("pirmas filmas", "kazkas", 100000000 );
const secondMovie = new Movie("antras filmas ", "kazkas kitas", 10000000 )

console.log(firstMovie.wasExpensive());
console.log(secondMovie.wasExpensive());
