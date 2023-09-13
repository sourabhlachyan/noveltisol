import React, { useState } from "react";
import axios from "axios";

function UserForm() {
  const [formData, setFormData] = useState({
    // ... (your form fields)
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/createUser", formData);
      console.log("User created successfully");
      // Optionally, you can redirect the user to another page or display a success message.
    } catch (error) {
      console.error("Error creating user:", error);
     
    }
  };

  // ...
}
