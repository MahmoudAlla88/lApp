// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { db } from "./config";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// function BookCatalog() {
//   const [books, setBooks] = useState([]);
//   const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });

//   // 🟢 جلب الكتب من Firebase
//   const fetchBooks = async () => {
//     const querySnapshot = await getDocs(collection(db, "books"));
//     const booksList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setBooks(booksList);
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // 🟢 إضافة كتاب جديد
//   const addBook = async () => {
//     await addDoc(collection(db, "books"), newBook);
//     setNewBook({ title: "", author: "", isbn: "" });
//     fetchBooks(); // تحديث القائمة
//   };

//   // 🟢 تعديل كتاب
//   const editBook = async (id, updatedBook) => {
//     await updateDoc(doc(db, "books", id), updatedBook);
//     fetchBooks();
//   };

//   // 🟢 الحذف (Soft Delete)
//   const softDeleteBook = async (id) => {
//     await updateDoc(doc(db, "books", id), { deleted: true }); // وضع علامة الحذف
//     fetchBooks();
//   };

//   return (
//     <div>
//       <h2>Book Catalog</h2>

//       {/* 🟢 نموذج إضافة كتاب جديد */}
//       <div>
//         <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
//         <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} />
//         <input type="text" placeholder="ISBN" value={newBook.isbn} onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })} />
//         <button onClick={addBook}>Add Book</button>
//       </div>

//       {/* 🟢 عرض الكتب */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
//         {books.filter(book => !book.deleted).map((book) => (
//           <div key={book.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
//             <h3>{book.title}</h3>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>ISBN:</strong> {book.isbn}</p>
//             <button onClick={() => editBook(book.id, { ...book, title: "Updated Title" })}>Edit</button>
//             <button onClick={() => softDeleteBook(book.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookCatalog;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import { db } from "../config";
// // import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// const API_URL = "https://your-firebase-database.firebaseio.com/books.json";

// function BookCatalog() {
//   const [books, setBooks] = useState([]);
//   const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });

//   // 🟢 جلب الكتب من Firebase باستخدام Axios
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       if (response.data) {
//         const booksArray = Object.keys(response.data).map((key) => ({
//           id: key,
//           ...response.data[key],
//         }));
//         setBooks(booksArray);
//       }
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // 🟢 إضافة كتاب جديد
//   const addBook = async () => {
//     try {
//       await axios.post(API_URL, newBook);
//       setNewBook({ title: "", author: "", isbn: "" });
//       fetchBooks();
//     } catch (error) {
//       console.error("Error adding book:", error);
//     }
//   };

//   // 🟢 تعديل كتاب
//   const editBook = async (id, updatedBook) => {
//     try {
//       await axios.patch(`https://your-firebase-database.firebaseio.com/books/${id}.json`, updatedBook);
//       fetchBooks();
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   // 🟢 الحذف (Soft Delete)
//   const softDeleteBook = async (id) => {
//     try {
//       await axios.patch(`https://your-firebase-database.firebaseio.com/books/${id}.json`, { deleted: true });
//       fetchBooks();
//     } catch (error) {
//       console.error("Error deleting book:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Book Catalog</h2>

//       {/* 🟢 نموذج إضافة كتاب جديد */}
//       <div>
//         <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
//         <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} />
//         <input type="text" placeholder="ISBN" value={newBook.isbn} onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })} />
//         <button onClick={addBook}>Add Book</button>
//       </div>

//       {/* 🟢 عرض الكتب */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
//         {books.filter(book => !book.deleted).map((book) => (
//           <div key={book.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
//             <h3>{book.title}</h3>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>ISBN:</strong> {book.isbn}</p>
//             <button onClick={() => editBook(book.id, { ...book, title: "Updated Title" })}>Edit</button>
//             <button onClick={() => softDeleteBook(book.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookCatalog;




import React, { useEffect, useState } from "react";
import { db } from "../config"; // تأكد أن لديك ملف config.js به إعدادات Firebase
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

function BookCatalog() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });

  // 🟢 جلب الكتب من Firestore
  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "books"));
      const booksArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBooks(booksArray);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 🟢 إضافة كتاب جديد إلى Firestore
  const addBook = async () => {
    try {
      await addDoc(collection(db, "books"), newBook);
      setNewBook({ title: "", author: "", isbn: "" });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // 🟢 تعديل بيانات الكتاب
  const editBook = async (id, updatedBook) => {
    try {
      await updateDoc(doc(db, "books", id), updatedBook);
      fetchBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // 🟢 الحذف (Soft Delete) عن طريق وضع علامة `deleted`
  const softDeleteBook = async (id) => {
    try {
      await updateDoc(doc(db, "books", id), { deleted: true });
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Book Catalog</h2>

      {/* 🟢 نموذج إضافة كتاب جديد */}
      <div>
        <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
        <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} />
        <input type="text" placeholder="ISBN" value={newBook.isbn} onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })} />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* 🟢 عرض الكتب */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
        {books.filter(book => !book.deleted).map((book) => (
          <div key={book.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <button onClick={() => editBook(book.id, { ...book, title: "Updated Title" })}>Edit</button>
            <button onClick={() => softDeleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCatalog;
