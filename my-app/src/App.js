// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [
//         { id: 1, title: "مقدمة ابن خلدون", author: "ابن خلدون", isbn: "1289499030" },
//         { id: 2, title: "الحاوي في الطب", author: "أبو بكر الرازي", isbn: "893847239479" },
//         { id: 3, title: "تاريخ الطبري", author: "الطبري", isbn: "5984201837" },
//         { id: 4, title: "البيان والتبيين", author: "الجاحظ", isbn: "2039485738" },
//       ],
//     };
//   }

//   render() {
//     return (
//       <main style={{ display: 'flex', margin: '20px', justifyContent: 'center' }}>
//         {this.state.books.map((book) => (
//           <div className="card" key={book.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//             <h2>{book.title}</h2>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>ISBN:</strong> {book.isbn}</p>
//           </div>
//         ))}
//       </main>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/signup";
import BookCatalog from "./components/BookCatalog";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<BookCatalog />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
