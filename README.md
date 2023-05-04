## Write a Function in javascript programming language:

that, given a dictionary D where key is of form YYYY-MM-DD and its corresponding value is an integer, returns a new dictionary D such that:

1) it's key (type: String) is a Day: [Mon, Tue, Wed, Thu, Fri, Sat, Sun] 
2) and corresponding value (type: INT) is sum of values on that day
3) Also, if Input Dictionary don't have particular day then Output Dictionary will have value of that day as the mean of Prev and Next Day 

# Write an efficient algorithm for the following assumptions:
-Input Dictionary will have at least Mon & Sun
-Input Dictionary key is a string within the range [1970-01-01..2100-01-01).
-And its corresponding value is an integer within the range (-1,000,000 1,000,000)
