const mockAPI = {
  createUser: async (payload) => {
    if (payload.firstName === "error") {
      return Promise.reject({
        status: "error",
        message: "Invalid Subscription request.",
      });
    }

    return {
      status: "success",
      message: "Thank you. You are now subscribed.",
    };
  },
};

class User {
  constructor(payload) {
    this.payload = payload;
  }

  async create() {
    try {
      const response = await mockAPI.createUser(this.payload);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default User;
