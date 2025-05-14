import apiClient from "./axiosConfig";

const CategoriesService = {
  getAll: async () => {
    try {
      const response = await apiClient.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
};

export default CategoriesService;
