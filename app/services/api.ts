'use client'

// import { useEffect, useState } from "react";
// import { useAuth } from "../../context/AuthContext";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const [accessToken, setToken] = useState('');
// const { accessToken } = useAuth();

// const getNewToken

// useEffect(() => {
//   const getToken = async () => {
    

//     if (accessToken) {
//       setToken(accessToken);
//     }
//   }
  
//   getToken();
// }, [])



export const getAllJobs = async () => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
  
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    if (response) return response;
  } catch (error) {
    return error;
  }
};


export const getJob = async (id: string) => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      BASE_URL + "/jobs/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/jobs/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/jobs/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
};


export const getPlatforms = async () => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/resources/platforms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/resources/platforms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/resources/platforms/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/platforms/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/platforms/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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

export const getPlatformResources = async(id?: string) => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/resources?platform_id=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSingleResource = async(id: string) => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/resources/details/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createResource = async (data: any) => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/update/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/remove/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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

export const addScreen = async (data: any, id: string) => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      BASE_URL + "/resources/add-screens/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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

export const deleteScreen = async (res_id: string, id: string) => {
 const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/resources/remove-screen/" + res_id + "/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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


// Users

export const getAllUsers = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());

    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const getProUsers = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/admin/users?plan=pro", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());

    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const getActiveUsers = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/admin/users?status=active", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());

    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const getUsersStat = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/admin/users/stats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());

    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const suspendUser = async (id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/admin/users/suspend/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
};

export const liftUserSuspsension = async (id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/admin/users/lift-suspension/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
};


// Design Systems

export const getDesignSystems = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/design-system", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());

    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const getDesignSystem = async (id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/design-system/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());

    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const addSDesignSystem = async (data: any) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/design-system", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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

export const editDesignSystem = async (data: any, id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/design-system/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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

export const deleteDesignSystem = async (id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(BASE_URL + "/design-system/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};
