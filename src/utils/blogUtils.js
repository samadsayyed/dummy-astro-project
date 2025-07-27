/**
 * Blog Utility Functions
 * Handles blog operations and data fetching from API
 */

import apiClient from '../api/axiosConfig.js';

// Transform API blog data to match component expectations
const transformBlogData = (apiBlog) => {
  // Decode Unicode-escaped HTML content
  const decodeUnicodeHtml = (html) => {
    if (!html) return '';
    try {
      console.log('Original HTML content length:', html.length);
      
      // First decode Unicode escapes like \u003C to <
      const decoded = html.replace(/\\u([0-9a-fA-F]{4})/g, (match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
      });
      
      console.log('After Unicode decoding length:', decoded.length);
      
      // Then decode HTML entities
      const finalDecoded = decoded
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\n/g, '')
        .replace(/\\/g, '');
      
      console.log('Final decoded content length:', finalDecoded.length);
      return finalDecoded;
    } catch (error) {
      console.error('Error decoding HTML content:', error);
      return html || '';
    }
  };

  return {
    id: apiBlog.id,
    title: apiBlog.title || '',
    date: apiBlog.date ? new Date(apiBlog.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '',
    author: apiBlog.author || 'Admin',
    authorImage: apiBlog.author_image || 'https://placehold.co/100x100',
    category: apiBlog.category || 'General',
    image: apiBlog.image || 'https://placehold.co/1200x800',
    description: apiBlog.title || '', // Using title as description since API doesn't provide description
    content: apiBlog.content ? decodeUnicodeHtml(apiBlog.content) : `<p>Content for "${apiBlog.title || 'this blog post'}" will be available soon.</p>`,
    slug: apiBlog.slug || '',
    created_at: apiBlog.created_at,
    updated_at: apiBlog.updated_at
  };
};

// Get all blogs for listing
const getAllBlogs = async () => {
  try {
    const response = await apiClient.get('/blogs');
    
    if (response.data.status === 'success' && response.data.data) {
      return response.data.data.map(transformBlogData);
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Get a specific blog by ID
const getBlogById = async (id) => {
  try {
    const response = await apiClient.get(`/blogs/${id}`);
    
    if (response.data.status === 'success' && response.data.data) {
      return transformBlogData(response.data.data);
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching blog ${id}:`, error);
    return null;
  }
};

// Get a specific blog by slug
const getBlogBySlug = async (slug) => {
  try {
    console.log(`Fetching blog by slug: ${slug}`);
    const response = await apiClient.get(`/blogs/title/${slug}`);
    
    if (response.data.status === 'success' && response.data.data) {
      console.log(`Successfully fetched blog: ${response.data.data.title}`);
      return transformBlogData(response.data.data);
    }
    
    console.warn(`No blog found for slug: ${slug}`);
    return null;
  } catch (error) {
    console.error(`Error fetching blog by slug ${slug}:`, error);
    return null;
  }
};

// Get related blogs (for now, returning all blogs except the current one)
const getRelatedBlogs = async (blogId) => {
  try {
    const allBlogs = await getAllBlogs();
    return allBlogs.filter(blog => blog.id !== blogId).slice(0, 3);
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    return [];
  }
};

export { getAllBlogs, getBlogById, getBlogBySlug, getRelatedBlogs };