import axios from "axios";

const BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchIBUs = async () => {
  try {
    const response = await api.get("/getIBUs");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const fetchNewJoinees = async () => {
  try {
    const response = await api.get("/getAllJoinees");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const addNewJoinee = async (newJoineeData) => {
  try {
    const response = await api.post("/addNewJoinee", newJoineeData);
    console.log(response);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const deleteNewJoinee = async (idToDelete) => {
  try {
    const response = await api.delete("/deleteJoinee", {
      params: {
        id: idToDelete,
      },
    });
    console.log(response);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const addProfilePicture = async (imageFile) => {
  try {
    const response = await api.post("/uploadProfilePhoto", imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);

    // if (!response.ok) {
    //   throw new Error("Failed to add profile picture");
    // }

    // Handle the response as needed
    return response.data; // assuming the response contains relevant information
  } catch (error) {
    console.error("Error adding profile picture:", error);
    throw error;
  }
};

export const fetchProfilePhoto = async (imageId) => {
  try {
    const response = await api.get("/getProfilePhoto", {
      responseType: "blob",
      params: {
        id: imageId,
      },
    });

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
