# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@rohan-batra/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1,arr2)`: Takes in two arrays and console.logs an appropriate message to the console.
* `assertEqual(Str1,Str2)`: Compare the two values it takes in and prints out a message telling us if they match or not.
* `assertObjectsEqual(Obj1,Obj2)`: Takes in two objects and console.logs an appropriate message to the console.
* `countLetters(String)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly([array])`: Takes in a collection of items and return counts for a specific subset of those items
* `eqArrays([array1],[array2])`: Compares two arrays and returns true or false, based on a perfect match
* `eqObjects(Obj1,Obj2)`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey(Object, callback)`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(Object, value)`: Takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `flatten(array)`: Takes in an array of arrays and returns a "flattened" version of the array
* `head(array)`: Retrieves the first element from an array
* `letterPositions(string)`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map(array,callback)`: Creates a new array as a result of a callback function implemented on each element of teh array.
* `middle(array)`: Returns the middle-most element(s) of the given array.
* `tail(array)`: Retrieves every element except the head (first element) of the array
* `takeUntil(array,callback)`: Returns a "slice of the array with elements taken from the beginning." It will keep going until the callback/predicate returns a truthy value.
* `without(source array, itemsToRemove array)`: Return a subset of a given array, removing unwanted elements.