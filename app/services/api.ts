'use client'
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


export const editJob = async (data: any, id: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/jobs/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    ).then((response) => response.json());
    if (response) {
      return response
    }
  } catch (error) {
    return error;
  }
};

export const deleteJob = async (id: string) => {

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/jobs/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
}


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
    if (response) {
       return response;
    }
  
  } catch (error) {
    return error;
  }
};

export const getPlatform = async (id: string) => {
  try {
    const response = await fetch(BASE_URL + "/resources/platforms/" + id, {
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

export const editPlatform = async (data: any, id: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/platforms/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    ).then((response) => response.json());
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const deletePlatform = async (id: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/platforms/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

 export const getPlatformId = async (name: string) => {
   var id;
   const platforms = await getPlatforms();
   if (platforms) {
     await platforms.forEach((platform: any) => {
       if (platform.name === name)
         id = platform._id;
     });
   }
   return id;
 };

// Resources endpoints

export const getAllResources = async(id?: string) => {
  try {
    const response = await fetch(BASE_URL + "/resources?platform_id=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSingleResource = async(id: string) => {
  try {
    const response = await fetch(BASE_URL + "/resources/details/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createResource = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const editResource = async (data: any, id: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/update/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    ).then((response) => response.json());
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const deleteResource = async (id: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/remove/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};