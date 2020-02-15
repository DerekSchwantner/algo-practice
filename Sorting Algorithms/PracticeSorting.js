// this sheet is used for practicing memorizing the sorting algos

class City {

    /* The constructor takes in a list of data points representing the city,
    where each data point takes the form (12-digit-geohash, curb_designation).
    Store this data inside the class and perform any other work you need to do
    for the other two methods in this class. Your goal here is to store the data
    in a format that makes your search function accurate and time efficient.
    */

    //Here I am storing all of the possible pickup locations into a Map object where lookup is O(1).
    constructor(data){
        this.pickups = new Map();
        data.forEach(pickup => {
            this.pickups.set(pickup[0],  pickup[1])
        })
        this.numberOfLocations = data.length;

    }

    /* @params: address-the user's entered dropoff address’s 12-digit-geohash
    This method should search around “address” for the best curb spaces available.
    @returns: array of top 10 curb spaces close to passed address (as mentioned above,
    you’ll need to design a metric which takes into account (a) distance from address
    and (b) curb_designation value.
    */

      search(address){
        //  creating empty array to store all possible pickups with in the general vicinity, as well as an empty array containing the hashes that are adjacent to the current one
        let viablePickups = []
        let adjacentHashes = []
        //  using the GeoHash class from the link, I will start by creating a general vicinity.
        //  Here I will trim the current address to 7 digits where a single geohash will be ≤ 153m	×	153m
        let currentAddress = address.substr(0,7)
        //  I create the general vicinity by finding the 8 neighboring geohashes in all directions, which totals 210,681sqm
        let currentVicinity = Geohash.neighbours(currentAddress)
        //pushing all of the valid geohashes into adjacent hash array
        adjacentHashes.push(currentAddress)
        Object.values(currentVicinity).forEach( geohash => adjacentHashes.push(geohash))

        // for each adjacent hash, iterate through keys in this.pickups and see if the the first 7 digits match the adjacent geohash, if so, push them into the viable pickups array.

        //  Now that the full array of possible pickups is gathered in an array, we create a composite score for each one taking distance and ease of pickup into consideration.

         const pickupScore = (currentLocation, pickupDestination, pickupEase) => {
              let composite = 0
              // In this function to establish the composite score we start by getting the distance between current location and possible pickup
              let distance = GoogleMaps.getDistance(currentLocation, pickupDestination)
              // if the distance is < 1 minute walk, it gets a 10 rank for the score, decreasing by 1 for every minute further the walk is. Then distance score is added to composite score
              //  putting more of an emphasis on distance to the pickup location we will weigh that score more than the ease of pickup.
              composite+= pickupEase * 0.8

              return { pickupDestination: composite}
       }

          // run all of the viable pickups through the pickupScore function and then rank them from highest to lowest using a compare function
          sortedPickups = viablePickups.sort(compare)
          //  Now return the sorted list of the top 10 locations ranked by composite score
          return sortedPickups.slice(0, 10)

    }

    /* params: location -- a well-formed input (12-digit-geohash, curb_designation).
    Update should take this information and update the data structure you initialized
    in the City constructor. This function will either update the curb_designation
    for an existing data point, or will insert a new data point. As an example,
    imagine a user reports that a parking spot now has a hydrant.
    returns: void
    */
      update(location){
          // Check to see if location already exists as a data point, if yes, update the data, if no, add new datapoint
      if (this.pickups.get(location[0])) {
          this.pickups[location[0] = location[1]]

      } else {
          this.pickups.set(location[0], location[1])
      }
    }

}