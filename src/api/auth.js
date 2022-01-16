import axios from 'axios';

export const loginAsync = async (email, password) => {
  const result = {
    success: true,
    data: null,
    errorMessage: '',
  };

  try {
    const response = await axios.post('/login', {
      email,
      password,
    });

    result.data = response.data;
  } catch (error) {
    result.success = false;
    result.errorMessage = 'Login failed. Please check your credentials.';
    result.data = null;
  }

  return result;
};

export const registerAsync = async (email, password) => {
  const result = {
    success: true,
    data: null,
    errorMessage: '',
  };

  try {
    const response = await axios.post('/register', {
      email,
      password,
    });
    result.data = response.data;
  } catch (error) {
    result.success = false;
    result.errorMessage = 'Registration failed. Please check your credentials.';
    result.data = null;
  }

  return result;
};
