# Hashtables
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash

## Challenge
Implement a Hashtable Class with the following methods: set, get, contains, keys, hash


## Approach & Efficiency

Since we are able to hash our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. This is ideal when quick lookups are required. but time complexity will be O(n) if we are looping through linkedlist elements which is in the average and worst case. 
Space complexity is O(1) because no additional space was used.

## API
set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
<br />
get
Arguments: key
Returns: Value associated with that key in the table <br />

contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.<br />

keys
Returns: Collection of keys<br />

hash
Arguments: key
Returns: Index in the collection for that key