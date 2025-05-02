package main

import (
	"fmt"
	"math/rand"
	"time"
)

func download() {
	r := rand.Intn(4)
	time.Sleep(time.Duration(r) * time.Second)
}

func main() {
	startTime := time.Now()

	urls := []string{
		"http://files.com/file1.png",
        "http://files.com/file2.png",
        "http://files.com/file3.png",
		"http://files.com/file4.png",
		"http://files.com/file5.png",
		"http://files.com/file6.png",
		"http://files.com/file7.png",
		"http://files.com/file8.png",
		"http://files.com/file9.png",
		"http://files.com/file10.png",
		"http://files.com/file1.png",
        "http://files.com/file2.png",
        "http://files.com/file3.png",
		"http://files.com/file4.png",
		"http://files.com/file5.png",
		"http://files.com/file6.png",
		"http://files.com/file7.png",
		"http://files.com/file8.png",
		"http://files.com/file9.png",
		"http://files.com/file10.png",
		"http://files.com/file1.png",
        "http://files.com/file2.png",
        "http://files.com/file3.png",
		"http://files.com/file4.png",
		"http://files.com/file5.png",
		"http://files.com/file6.png",
		"http://files.com/file7.png",
		"http://files.com/file8.png",
		"http://files.com/file9.png",
		"http://files.com/file10.png",
	}

	for _, url := range urls {
		download()
		fmt.Println("concluído:", url)
	}

	countTimer := time.Since(startTime)

	fmt.Printf("Tempo de execução do programa: %\n", countTimer)
}

