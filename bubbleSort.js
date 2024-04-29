function bubbleSort(array){
    
    for (let j = 0; j < array.length - 1; j++){
        for(let i = 0; i < array.length - j; i++){
            let tempVal = array[i];
            let tempVal2 = array[i+1];

            if(array[i] > array[i+1]){
                array[i] = tempVal2;
                array[i+1] =tempVal;

            }
        }
    }    
    return array;
}