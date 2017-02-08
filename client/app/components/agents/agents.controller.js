import AgentSearchService from '../../common/services/agentSearch.service';


class AgentsController {

  constructor(AgentSearchService) {
    this.name = 'agents';
    this.searchText = "";
    this.agentSearchService = AgentSearchService;
    this.results = null;
    this.isSearching = false;
  }

  agentSearchOnChange() {
    this.searchAgent();
  }

  // Below code obtained from: https://davidwalsh.name/javascript-debounce-function
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  searchAgent = this.debounce(function () {
      this.agentSearchService.searchAgent(this.searchText)
        .then(results => {
          this.results = results;
        })
    }, 250);
  // }
}

AgentsController.$inject = ['AgentSearchService'];

export default AgentsController;
