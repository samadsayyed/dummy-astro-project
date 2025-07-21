import apiClient from "./axiosConfig";

const productsService = {
  getProducts: async (limit = 1000) => {
    try {
      const response = await apiClient.get(`/products?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getProduct: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },
};

export { productsService }; 