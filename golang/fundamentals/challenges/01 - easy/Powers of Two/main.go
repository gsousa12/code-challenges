/*
Complete the function that takes a non-negative integer n as input,
and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
package main

import (
	"fmt"
	"math"
)

func powersOfTwo(n int) (powers []int) {
	for i := 0; i <= n; i++ {
		powers = append(powers, int(math.Pow(2, float64(i))))
	}
	return powers
}

func main() {
	var n int
	fmt.Println("Digite o inteiro:")
	_, err := fmt.Scanf("%d", &n)
	if err != nil {
		fmt.Println("Erro ao ler o inteiro:", err)
		return
	}
	
	result := powersOfTwo(n)
	fmt.Printf("result: %v\n", result)
}