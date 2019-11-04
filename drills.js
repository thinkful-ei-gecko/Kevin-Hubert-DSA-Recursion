//Drill #1 - Counting Sheep

const sheepCount = function(sheep) {
    //base case
    if (sheep === 0) {
        return 'All sheep jumped over the fence';
    //general case
    } else {
        sheepCount(sheep - 1) 
        return `${sheep}: Another sheep jumped over the fence`  
    }
}
sheepCount(3);

//Drill #2 - Power Calculator