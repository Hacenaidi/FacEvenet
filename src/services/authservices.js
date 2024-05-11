const API_URL = "";

export async function login( username, password ) {
    try {
      const response = await fetch(`${API_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));      }
  
      return response.json();
    } catch (error) {
      throw error;
    }
  }