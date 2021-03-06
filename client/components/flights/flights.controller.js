FlightsController.$inject = ["flightsService", "$anchorScroll", "$location"];

function FlightsController(flightsService, $anchorScroll, $location) {
    var vm = this;
    vm.getFlight = getFlight;
    vm.origin = '';
    vm.destination = '';
    vm.date = '2017-08-05';
    vm.maxStops = 0;
    vm.passengers = 1;
    vm.preferredCabin = "COACH";
    vm.goToFlights = goToFlights;

    vm.results = [];

    activate();

    function activate() {
        vm.artists = [{
            name: "Test artist",
            photo_url: "http://www.fillmurray.com/200/200",
            nationality: "USA"
        }, {
            name: "Test artist 2",
            photo_url: "http://www.fillmurray.com/205/205",
            nationality: "USA"
        }]
    }

    function getFlight() {
        console.log('flight hit');
        return flightsService.getFlight(vm.origin, vm.destination,
                vm.date, vm.maxStops, vm.passengers)
            .then(function(res) {
                console.log(res);
                vm.results = res.trips.tripOption;
                // $location.hash('searchResults');
                // $anchorScroll();
                // goToFlights();
            });
    }

    // function goToFlights () {
    //     // if ($location.hash() !== newHash) {
    //     // // set the $location.hash to `newHash` and
    //     // // $anchorScroll will automatically scroll to it
    //     // $location.hash('anchor' + x);
    //     // } else {
    //     //     // call $anchorScroll() explicitly,
    //     //     // since $location.hash hasn't changed
    //     //     $anchorScroll();
    //     // }
    //     console.log('anchor scroll hit');
    //     $location.hash('searchResults');
    //     $anchorScroll();
    // }
        
}
export default FlightsController;