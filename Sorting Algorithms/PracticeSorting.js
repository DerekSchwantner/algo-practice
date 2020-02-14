// this sheet is used for practicing memorizing the sorting algos

class City {

    /* The constructor takes in a list of data points representing the city,
    where each data point takes the form (12-digit-geohash, curb_designation).
    Store this data inside the class and perform any other work you need to do
    for the other two methods in this class. Your goal here is to store the data
    in a format that makes your search function accurate and time efficient.
    */
    constructor(data){
        this.pickupLocations = {}
        this

    }

    /* @params: address-the user's entered dropoff address’s 12-digit-geohash
    This method should search around “address” for the best curb spaces available.
    @returns: array of top 10 curb spaces close to passed address (as mentioned above,
    you’ll need to design a metric which takes into account (a) distance from address
    and (b) curb_designation value.
    */
    function search(address){

    }

    /* params: location -- a well-formed input (12-digit-geohash, curb_designation).
    Update should take this information and update the data structure you initialized
    in the City constructor. This function will either update the curb_designation
    for an existing data point, or will insert a new data point. As an example,
    imagine a user reports that a parking spot now has a hydrant.
    returns: void
    */
    update(location){

    }

}