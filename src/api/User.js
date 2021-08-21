class User {
  constructor(payload) {
    this.payload = payload;
  }

  async create() {
    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        body: new URLSearchParams(this.payload),
      });
      return await response.json();
    } catch (error) {
      console.log(error.json());
      return error.json();
    }
  }
}

export default User;
