exports.Request = class Request {

    constructor(request) {
        this.request = request;
    }

    async getPokemon(pokemonData){
      return await this.request.get('/api/v2/pokemon/'+pokemonData+'/', {
          });
    }
}