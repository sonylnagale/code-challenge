# Sonyl Nagale Code Challenge

## Preamble
This solution is a bit naïve, I admit. I have not had the time to expand upon test cases, as my time has been divided between a few priorities. I took approximately 3 hours to do the logic, but I'll confess that I had to keep switching gears for other work, so my estimate may be low or high.

## Technical Specifications
This program is written in Node.js and tested with v8.9.4.

## Running the Program

1. Clone the repository (or use the zip).
1. `cd` into the directory created by the clone or unzip the zip.
1. `npm install`
1. `npm start -s 'data/example.csv' > output.txt`

## Complexity
Most of this is simple loops, but since there is a double-for, that makes  it at least O(n^2), which is not ideal, but seeing as how we have to calculate pairs, it seems the best option.
