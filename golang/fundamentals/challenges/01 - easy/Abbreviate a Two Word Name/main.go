/*

	Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

	The output should be two capital letters with a dot separating them.

	It should look like this:

	Sam Harris => S.H

	patrick feeney => P.F

*/

package main

import (
	"fmt"
	"strings"
)

	func abbreviate(name string) string {
		parts := strings.Split(name, " ")
		
		if(len(parts) != 2) {
			return ""
		}

		part1 := strings.ToUpper(string(parts[0][0]))
		part2 := strings.ToUpper(string(parts[1][0]))

		return part1 + "." + part2
	}

	func main() {
		name := "patrick feeney"
		abbreviated := abbreviate(name)
		fmt.Printf("Abreviado: %s", abbreviated)
	}