function sqrtInt(number){
    if(number <= 1) return number;

    let start = 1, end = number, ans;

    while(start <= end){
        let mid = parseInt((start + end)/2);

        if(mid*mid === number){
            return mid;
        }

        if(mid*mid < number){
            start = mid + 1;
            ans = mid;
        }else{
            end = mid - 1;
        }
    }
    return ans;
}