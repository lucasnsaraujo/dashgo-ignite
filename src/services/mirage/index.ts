import { createServer, Factory, Model } from 'miragejs'
import { randEmail, randFullName, randRecentDate } from '@ngneat/falso' // Biblioteca para criar dados fakes

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: { // Gera usuários automagicamente
      user: Factory.extend({
        name(i) { // Nomes devem ser igual ao type
          return randFullName({ withAccents: false });
        },
        email() {
          return randEmail().toLowerCase();
        },
        created_at() { // Camel case é convertido em snake case automagicamente
          return randRecentDate({ days: 10 }) // Data nos últimos 10 dias
        }
      })
    },

    seeds(server) {
      server.createList('user', 10) // Cria 200 usuários automagicamente

    },

    routes() {
      this.namespace = 'api' // Antes das rotas, será necessário o /api (i.e.: /api/users)
      this.timing = 750; // Delay da chamada da api do Mirage
      this.get('/users');
      this.post('/users')
      this.namespace = '' // Reseta o namespace, para não interferir com o Next.js (pages/api)
      this.passthrough(); // Caso a chamada não esteja no Mirage, redireciona para o Next
    }
  })

  return server;
}