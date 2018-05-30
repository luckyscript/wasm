#include <stdio.h>
long factorial(int num) {
    if(num <= 0)
        return 1;
    return num*factorial(num-1);
}

long fib(int num) {
    if(num <= 0) 
        return 0;
    if(num == 1)
        return 1;
    if(num == 2)
        return 2;
    return fib(num-1) + fib(num-2);
}

int main() {
    int num = factorial(10);
    printf("%d\n", num);
    return 0;
}