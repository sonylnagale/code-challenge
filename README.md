# Co-Occurrences

## Problem Description
We want to be able to recommend factories to brands. A simple way to do that is to identify how often two factories are viewed by the same brand. Your input is the brand view logs, which are represented by comma-separated sequences of factory names. You should print each pair of factories (co-occurrences) which have been visited by the same brand in at least N brand view log rows.

## Input Format
The first line contains an integer, N, the minimum number of co-occurrences for a factory pair to appear in the output. Subsequent lines are comma-separated lists of factory names, the brand view log. (Factory names will never contain a comma, so you don't have to worry about parsing "real" CSV.)

## Output Format
Pairs of factory names, separated by a comma, that appeared together on at least N lines in the input. A pair should be listed exactly once, and the lesser (in dictionary order) of the two names should appear first. For example, Ace Binding Co,Baikal is correct; but Baikal,Ace Binding Co is not.) Furthermore, the list of pairs should be sorted in ascending dictionary order.

## Submission Requirements
You should submit a working program, runnable from a command line, that reads from standard input and prints to standard output. For example, on Unix-based systems it should be runnable like this:
`python your_program.py < input_file > output_file`
Of course, the actual command line may vary depending on the language you choose; your program file need not be executable on its own. However, it must read input directly from stdin and print to stdout.

You may write your program in any of the following languages:
*	C# (5.0 or above)
*	Go (1.4 or above)
*	Java (Java SE 7 or above)
*	JavaScript (Node.js 0.10 or above)
*	PHP (5.4 or above)
*	Python (2.7 or 3.x)
*	Ruby (2.0 or above)
*	Scala (2.10 or above)

Be sure to state which version you used to run and test your program.
Send source code, not compiled artifacts. For languages that require compilation, include some kind of makefile, e.g. Make, Ant, Maven, SBT, etc., with build instructions.

## Extra Credit
1.	What is the algorithmic complexity of your program? In other words, how does the running time change as the number of brand view log rows increases?
2.	Is there a faster solution? 
Note: Some of our test cases are very large. To pass them all, your program will need to be fast.

## Example Input
```
3
New York Embroidery Studio,Novelty Pom Pom,Sherry Accessories
Ace Binding Co,Dallas Bias Fabrics,Sherry Accessories
New York Embroidery Studio,Novelty Pom Pom,Pearl Trim & Textile
Baikal,Dallas Bias Fabrics,Novelty Pom Pom,Pearl Trim & Textile,Riva Jewelry Manufacturers
Ace Binding Co,Baikal,Pearl Trim & Textile
Ace Binding Co,Baikal,New York Embroidery Studio,Riva Jewelry Manufacturers,Sherry Accessories
New York Embroidery Studio,Novelty Pom Pom,Pearl Trim & Textile
Dallas Bias Fabrics,Novelty Pom Pom,Pearl Trim & Textile
Ace Binding Co,Baikal,New York Embroidery Studio
Ace Binding Co,New York Embroidery Studio,Riva Jewelry Manufacturers
```
## Example Output
```
Ace Binding Co,Baikal
Ace Binding Co,New York Embroidery Studio
New York Embroidery Studio,Novelty Pom Pom
Novelty Pom Pom,Pearl Trim & Textile
```

## Example Explanation
Since the first line of the input reads, 3, the output must only show those factories which appear together in a at least 3 brand view log rows. There are exactly 4 pairs of companies that appear together at least 3 times in the brand view log input:

1.	Ace Binding Co and Baikal appear 3 times
2.	Ace Binding Co and New York Embroidery Studio appear 3 times
3.	New York Embroidery Studio and Novelty Pom Pom appear 3 times
4.	Novelty Pom Pom and Pearl Trim & Textile appear 4 times


Also note that each factory pair is listed in ascending dictionary order with the factory that it appears with. As well as all factory pairs are listed in ascending dictionary order with the other pairs that meet the minimum number of co-occurrences.

## Tips
*	Code correctness and quality matter more to us than algorithmic wizardry. Is your program easy to understand? Is it clearly organized and documented? Does it correctly handle all the edges cases? Imagine you are writing a library for other developers to use. How would that affect your design?
*	Your program's output must precisely match the expected output. Don't print extraneous output to stdout.
*	The example input and output provided above fail to cover a large number of edge cases. To be sure your program is correct, you may want to supplement it with your own test cases.
*	Every line in the input ends with a Unix-style newline (`"\n"`). DOS-style CRLFs (`"\r\n"`) are not used.
*	Each line in the output should end with a newline character (that includes the final one). As with the input, use Unix-style newlines.
