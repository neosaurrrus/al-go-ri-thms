function meanMedianMode(array){
    var result = {}

    console.log(result);

    
    return {
        mean:(getMean(array)),
        mode:(getMode(array)),
        median:(getMedian(array))
    }
};
    function getMean(array){
        var total = 0;
        for (i=0;i<array.length;i++){
            //if(!count[array[i]]) count[array[i]]=0;
            //count[array[i]]++
            total += array[i];
        };
    return (total/array.length);
    };

    function getMedian(array){
        var median;
        array.sort(function(a,b){return a-b});
        if(array.length % 2 !==0){
            median = array[Math.floor(array.length/2)];
        } else {
            median = ((Math.floor(array.length/2) + Math.ceil(array.length/2)) / 2)
        }
        console.log(Math.floor(array.length/2) + " " + Math.ceil(array.length/2));
        return median;
    }

    function getMode(array){
        var modeObj = {};
        array.forEach(num =>{
            if (!modeObj[num]) modeObj[num]=0;
            modeObj[num]++
        })

        var maxFrequency = 0;
        var modes = [];

        for (var num in modeObj){
            if (modeObj[num]>maxFrequency){
                modes = [num];
                maxFrequency = modeObj[num];
            }
        else if (modeObj[num] === maxFrequency) modes.push(num);
        }
        if (modes.length === Object.keys(modeObj).length) modes = []; //gives how many propps are in modes oobject
        return modes;
    }

console.log(meanMedianMode([1,2,3,3,4,5,6]));

