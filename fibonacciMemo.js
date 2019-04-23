function fibonacci(position){
    //base case
    if(position < 3) return 1;
    else return fibonacci(positon - 1) + fibonacci(position - 2);  
};
fibonacci(4);
