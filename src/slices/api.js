// export const url = "https://api.secondarydao.com/api";
export const url = "http://localhost:5001/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};

// http://localhost:5000
// https://api.secondarydao.com/
