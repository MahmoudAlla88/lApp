import React, { useState } from "react";

function Books() {
  const [books] = useState([
    { id: 1, title: "مقدمة ابن خلدون", author: "ابن خلدون", isbn: "1289499030" },
    { id: 2, title: "الحاوي في الطب", author: "أبو بكر الرازي", isbn: "893847239479" },
    { id: 3, title: "تاريخ الطبري", author: "الطبري", isbn: "5984201837" },
    { id: 4, title: "البيان والتبيين", author: "الجاحظ", isbn: "2039485738" },
  ]);

  return (
    <main style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {books.map((book) => (
        <div key={book.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
          <h2>{book.title}</h2>
          <p><strong>المؤلف:</strong> {book.author}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
        </div>
      ))}
    </main>
  );
}

export default Books;
