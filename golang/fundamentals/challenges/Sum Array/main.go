/*
implemente uma função em Go chamada SumArray
que recebe um slice de inteiros e retorna a soma de todos os elementos.
*/

package main

import "fmt"

func SumArray(arr []int) int {
	var result  = 0 
	for _, num := range arr { 
        result += num
    }
	return result
}

func main() {
	arr := []int{10,20,30}
	sum := SumArray(arr) 
    fmt.Println("Soma:", sum) 
}