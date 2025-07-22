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

  // New methods for the updated API
  getAllProducts: async () => {
    try {
      const response = await apiClient.get('/public/products');
      return response.data;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  },

  getProductBySlug: async (slug) => {
    try {
      const response = await apiClient.get(`/products/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product by slug:", error);
      throw error;
    }
  },

  // Function to generate static paths for Astro
  getStaticPaths: async () => {
    try {
      console.log("🔄 Generating static paths...");
      const products = await productsService.getAllProducts();
      console.log("📦 Fetched products:", products.length);
      
      const paths = products.map(product => {
        console.log("🔗 Creating path for:", product.slug);
        return {
          params: {
            slug: product.slug
          },
          props: {
            product: {
              id: product.id,
              parent_id: product.parent_id,
              name: product.name,
              sku: product.sku,
              slug: product.slug,
              price: parseFloat(product.price),
              discount_price: product.discount_price ? parseFloat(product.discount_price) : null,
              in_stock: product.in_stock,
              stock_quantity: product.stock_quantity,
              gallery: product.gallery || [],
              has_variants: product.has_variants || false,
              attributes: product.attributes || {}
            }
          }
        };
      });
      
      console.log("✅ Generated paths:", paths.length);
      return paths;
    } catch (error) {
      console.error("❌ Error generating static paths:", error);
      return [];
    }
  },
};

export { productsService }; 