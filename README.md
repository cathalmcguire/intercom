# The Test
 
We have some customer records in a text file (customers.json) -- one customer per line, JSON-encoded. We want to invite any customer within 100km of our Dublin office for some food and drinks on us. Write a program that will read the full list of customers and output the names and user ids of matching customers (within 100km), sorted by User ID (ascending).


### to run
```
npm start
```
output will be written to output.txt


### to test
```
npm i (first time only)
npm test
```

### alternative solution

Another approach would be to think of a solution for big data. The provided customers file has 32 entries but the solution I've provided would be inefficient for a million. To solve for big data I would:

* Read on a per line basis. If the line meets the distance criteria write to an output file
* Read in data from the diltered output in chunks. Sort the data and write to temporary files
* Use an external merge sort to sort the data from the temporary files into a single final sorted file. 
