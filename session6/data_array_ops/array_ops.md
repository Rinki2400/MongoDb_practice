# Array Operators

MongoDB provides a rich set of array operators to query and manipulate array fields in documents. These operators are mainly used in queries, projections, and update operations.

---

## Query Operators for Arrays

| Operator    | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `$all`      | Matches arrays that contain all specified elements.                         |
| `$elemMatch`| Matches documents that contain an array field with at least one element that matches all the specified query criteria. |
| `$size`     | Matches any array with the specified number of elements.                    |

---

## Update Operators for Arrays

| Operator     | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `$addToSet`  | Adds an element to an array only if it does not already exist.             |
| `$pop`       | Removes the first or last element of an array.                             |
| `$pull`      | Removes all matching values from an array.                                 |
| `$push`      | Adds an element to an array.                                                |
| `$pullAll`   | Removes all matching values from an array (exact match only).              |
| `$each`      | Used with `$push` or `$addToSet` to add multiple elements.                 |
| `$position`  | Specifies the location in the array at which to add elements (with `$push`).|
| `$slice`     | Limits the number of array elements to be stored (used with `$push`).      |
| `$sort`      | Sorts array elements (used with `$push` and `$each`).                      |

---

## Positional and Array Filter Operators

| Operator        | Usage Context              | Description                                                  |
|-----------------|----------------------------|--------------------------------------------------------------|
| `$`             | Positional Operator        | Updates the first matching element in an array.             |
| `$[]`           | All Positional Operator    | Updates all elements in an array.                           |
| `$[<identifier>]`| Filtered Positional Operator | Updates specific elements based on a condition.           |



| Operator           | find / findOne                  | updateOne / updateMany        |
|--------------------|---------------------------------|-------------------------------|
| `$`                | ✅ (positional projection)      | ✅ updateOne only              |
| `$[]`              | ❌                              | ✅ both                        |
| `$[identifier]`    | ❌                              | ✅ (with arrayFilters)         |


