
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const token = localStorage.getItem("accessToken");


export const getAllJobs = async () => {
  try {
    const response = await fetch(BASE_URL + "/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json());
 
 
    if(response) {
      return (response.data);
    }
  } catch (error) {
    return error;
  }
};

export const createJob = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    if (response) return response;
  } catch (error) {
    return error;
  }
};


export const getJob = async (id: string) => {
  try {
    const response = await fetch(
      BASE_URL + "/jobs/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());

    if (response) {
     return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const getPlatforms = async () => {
  try {
    const response = await fetch(BASE_URL + "/resources/platforms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());

    if (response) {
     return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const createPlatform = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "/resources/platforms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    if (response.statusCode == 201) {
    
       return response;
    }
    console.log("error" + response);
  } catch (error) {
    return error;
  }
};