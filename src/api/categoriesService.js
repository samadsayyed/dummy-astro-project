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

  getAllCategories: async () => {
    try {
      const response = await fetch('https://admin.bablon.in/api/categories/all');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching all categories:", error);
      throw error;
    }
  },
};

export default CategoriesService;
