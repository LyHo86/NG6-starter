var moduleName = 'app.services';

// const HTTP = new WeakMap();

export default class AgentSearchService
{
    constructor($http)
    {
        this.$http = $http;
    }

    searchAgent(searchTerm)
    {
        return this.$http.get('https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=' + searchTerm)
            .then(result => result.data);
    }

    // static agentSearchFactory($http) {
    //     return new AgentSearchService($http);
    // }
}

//AgentSearchService.$inject = ['$http'];

AgentSearchService.$inject = ['$http'];

// angular.module(moduleName, [])
//     .service('agentSearchService', AgentSearchService);
