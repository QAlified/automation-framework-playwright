//Se exporta la clase 'Request'
exports.Request = class Request {

    //Se define el constructor
    constructor(request) {
        this.request = request;
    }

    //Se define una función que devuelva el resultado de una petición dada
    async getPokemon(pokemonData){
      return await this.request.get('/api/v2/pokemon/'+pokemonData+'/', {
          });
    }
}