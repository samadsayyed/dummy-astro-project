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

  getCategoryProducts: async (categorySlug) => {
    try {
      const response = await apiClient.get(`/categories/${categorySlug}/products`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching products for category ${categorySlug}:`, error);
      throw error;
    }
  },
};

export default CategoriesService;
