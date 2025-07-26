import { a as apiClient } from './axiosConfig_BpVX1Fuo.mjs';

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

export { CategoriesService as C };
