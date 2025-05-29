**Online Bookstore - MongoDB Insert Script**

This script populates a MongoDB database called `onlinebookstore` with a collection of books. All content related to Pakistan has been removed.

---

**Requirements:**

* Node.js installed
* MongoDB running locally (default URI: `mongodb://localhost:27017`)

---

**Installation:**

```bash
npm install mongodb
```

---

**To Run It:**

```bash
node insertBooks.js
```

---

**What It Does:**

* Connects to the local MongoDB instance
* Uses the `onlinebookstore` database
* Inserts a list of books into the `books` collection
* Displays a success message after insertion

---

**Custom Notes:**

* If your MongoDB runs on a different host or port, update the URI in `insertBooks.js`:

  ```js
  const uri = "mongodb://localhost:27017";
  ```

* You can add or remove book records by modifying the `insertMany([...])` array.

