import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CountryCodePicker from 'react-country-code-picker';

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    state: '',
    country: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (formData.firstName.length < 5) {
      newErrors.firstName = 'First Name must be at least 5 characters.';
    }
    if (formData.lastName.length < 5) {
      newErrors.lastName = 'Last Name must be at least 5 characters.';
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}<span class="math-inline">/\.test\(formData\.email\)\) \{
newErrors\.email \= 'Invalid email address\.';
\}
if \(\!formData\.mobile\) \{
newErrors\.mobile \= 'Mobile number is required\.';
\} else if \(\!/^\[0\-9\]\{10\}</span>/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number.';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Get the list of states based on the selected country
      const states = getStates(formData.country);

      // Update the state of the form data
      setFormData({ ...formData, states });
    }
  };

  const getStates = (country) => {
    // Get the list of states from the open API
    const response = await fetch(`https://api.countrystates.io/v1/countries/${country}/states`);
    const data = await response.json();

    // Return the list of states
    return data.states;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
        value={formData.firstName}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
        value={formData.lastName}
        required
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        value={formData.email}
        required
      />
      <CountryCodePicker
        name="mobile"
        label="Mobile"
        value={formData.mobile}
        onChange={handleChange}
        error={!!errors.mobile}
        helperText={errors.mobile}
        required
      />
      <TextField
        name="country"
        label="Country"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        error={!!errors.country}
        helperText={errors.country}
        value={formData.country}
        required
      />




