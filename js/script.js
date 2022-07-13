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
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {

                }
                )
        }

    })