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
            // creo un ciclo for per inserire le 10 mail nell'array
            for (let i = 0; index < 10; i++) {
                // mediante axios (ajax per vue) con un get domando le mail all'http 
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    // creando un arrow function per pusharli nell'array creato in data
                    .then((response) => {
                        this.mails.push(response.data.response);
                        console.log(this.mails);
                    });
            };
        },
    })