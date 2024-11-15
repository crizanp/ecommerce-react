
// Function to log in a user
export const loginUser = async (email, password) => {
    try {
      // Your authentication logic here
      // For example, making a request to your server to verify credentials
      // If successful, return user data or token
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message);
      }
  
      // Log the email of the user who logged in
      console.log(`User logged in with email: ${email}`);
  
      return data.user; // Modify this based on your actual response structure
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };
  
  
  
  // Function to register a new user
  export const registerUser = async (email, password) => {
    try {
      // Your registration logic here
      // If successful, return user data or token
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message);
      }
      console.log(`User logged in with email: ${email}`);

      return data.user; // Modify this based on your actual response structure
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error;
    }
  };
  
  // Function to log out a user
  export const logoutUser = async () => {
    try {
      // Your logout logic here, such as clearing tokens or session data
      // If successful, return true
      // For example, if using JWT, you might clear the token from localStorage
      localStorage.removeItem("token");
  
      return true;
    } catch (error) {
      console.error("Logout failed:", error.message);
      throw error;
    }
  };
  
  // Function to check if a user is logged in
  export const checkLoggedIn = () => {
    // Your logic to check if the user is logged in
    // For example, checking if a token exists in localStorage
    const token = localStorage.getItem("token");
    
    return !!token; // Returns true if token exists, false otherwise
  };
  