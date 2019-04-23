
function HashTable(size){   //Hashtable Simple Constructor function
    this.buckets = Array(size);  //hashtable array
    this.numBuckets = this.buckets.length; //tracks number of buckets
};

function HashNode(key,value,next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key) { //totals up the charCodes for the string, divides by buckets, returns remainder (ie. the bucket to put it in)
    var total = 0;
    for (var i = 0; i < key.length; i++){
        total +=key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
};

HashTable.prototype.insert = function(key, value) {  //Inserts a new hashnode
    var index = this.hash(key);    //defines WHERE to put it 
    console.log(index);
    if(!this.buckets[index]) this.buckets[index] = new HashNode(key,value);  //If nothing in the bucket make the new hashnode
    else if(this.buckets[index].key === key){ //check first node in bucket to update.
        this.buckets[index].value = value;
    } 
    else {
        var currentNode = this.buckets[index];   
        while (currentNode.next) {
            if (currentNode.next.key === key){ //if it already exists, Update 
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value); //If it cant find any more nexts, create the hashnode;
    }
};

HashTable.prototype.get = function(key){   //return the value for a given key.
    var index = this.hash(key);
    if(!this.buckets[index]) return null; //if not found
    else {
        var currentNode = this.buckets[index];
        while (currentNode) {
            if (currentNode.key === key) return currentNode.value; //if a match, return value
            currentNode = currentNode.next;
        }
        return null;
    };
};
HashTable.prototype.retrieveAll = function(){ //returns all Nodes in HashTable.
    var allNodes = [];
    for (i=0; i<this.numBuckets;i++){
        var currentNode = this.buckets[i];
        while (currentNode){
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        };
    };
    return allNodes
};

var MyHT = new HashTable(30);

console.log(MyHT.hash("Becca"));
console.log(MyHT.hash("Becca"));

MyHT.insert("Megan", 22)
MyHT.insert("Dave", 17)
MyHT.insert("Dave", 27) //replaces Dave
MyHT.insert("Dvea", 71) //same hash as Dave
console.log(MyHT.retrieveAll())
console.log(MyHT.get("Megan"));
console.log(MyHT);