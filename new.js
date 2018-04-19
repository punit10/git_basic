function digitSum(n) {
    var rem = sum = 0;
    while (n > 0) {
        rem = n % 10;
        sum = sum + rem;
        n = n / 10;
    }
    return sum;
}