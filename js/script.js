// // Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: '#root',
        data: {
            mails: []
        },
        methods: {

        },
        created() {
            // mediante axios (ajax per vue) con un get domando le mail all'http 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // creando un arrow function per pusharli nell'array creato in data
                .then((response) => {
                    console.log(response);
                    this.mails.push(response.data.response);
                }
                )
        }

    })