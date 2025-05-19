/**
 * Blog Utility Functions
 * Handles blog operations and data fetching
 */

// Mock blog data - in a real implementation, this would be fetched from an API or database
const blogData = {
  1: {
    id: 1,
    title: 'The Secrets to a Living Room that Draws You In',
    date: 'January 9, 2023',
    author: 'Jane Smith',
    authorImage: 'https://placehold.co/100x100',
    category: 'FURNITURE, TABLE',
    image: 'https://placehold.co/1200x800',
    content: `
      <p>Creating a living room that truly draws people in requires careful consideration of both aesthetics and functionality. The living room is often the heart of a home, where family and friends gather to relax, socialize, and create memories.</p>
      
      <h2>Start with a Thoughtful Layout</h2>
      <p>The foundation of an inviting living room begins with its layout. Arrange furniture to create conversation areas where people can easily interact without raising their voices. Consider the flow of traffic through the room and ensure there are clear pathways.</p>
      
      <p>A common mistake is pushing all furniture against the walls, which can create an empty and uninviting space in the middle. Instead, float furniture away from walls to create a more intimate setting. Use area rugs to define different zones within larger living rooms.</p>
      
      <h2>Choose Comfortable Seating</h2>
      <p>Comfort is paramount in a living room that people want to spend time in. Invest in quality seating with proper support and cushioning. Include a mix of seating options – sofas, loveseats, armchairs, and perhaps a chaise lounge – to accommodate different preferences and group sizes.</p>
      
      <p>Consider the scale of your furniture relative to the room size. Oversized pieces can overwhelm a small space, while furniture that's too small can look out of place in a large room.</p>
      
      <h2>Layer Your Lighting</h2>
      <p>Lighting plays a crucial role in creating ambiance. Incorporate multiple light sources at different heights to create a warm, layered effect. Include:</p>
      <ul>
        <li>Ambient lighting for overall illumination</li>
        <li>Task lighting for reading or other activities</li>
        <li>Accent lighting to highlight architectural features or artwork</li>
      </ul>
      
      <p>Dimmer switches are a worthwhile investment, allowing you to adjust the mood according to the time of day or occasion.</p>
      
      <h2>Add Thoughtful Details</h2>
      <p>The finishing touches often make the biggest difference in creating a room that feels complete and inviting:</p>
      <ul>
        <li>Soft textiles like throw pillows and blankets add comfort and color</li>
        <li>Window treatments frame views and control light</li>
        <li>Plants bring life and improve air quality</li>
        <li>Personal items and meaningful artwork create connection</li>
      </ul>
      
      <p>Remember that the most inviting living rooms reflect the personalities of the people who live there. Don't be afraid to incorporate elements that tell your story and make the space uniquely yours.</p>
    `,
    relatedPosts: [2, 3, 5]
  },
  2: {
    id: 2,
    title: 'Modern Interior Design Trends',
    date: 'February 15, 2023',
    author: 'Michael Johnson',
    authorImage: 'https://placehold.co/100x100',
    category: 'FURNITURE, DESIGN',
    image: 'https://placehold.co/1200x800',
    content: `
      <p>Modern interior design continues to evolve, with new trends emerging that balance aesthetics, functionality, and sustainability. Here's a look at some of the most influential trends shaping homes today.</p>
      
      <h2>Biophilic Design</h2>
      <p>The connection between humans and nature is being emphasized more than ever in interior design. Biophilic design incorporates natural elements to create spaces that improve well-being and productivity.</p>
      
      <p>This trend goes beyond simply adding houseplants (though that's certainly part of it). It includes the use of natural materials like wood and stone, maximizing natural light, incorporating organic shapes, and creating views to outdoor spaces.</p>
      
      <h2>Multifunctional Spaces</h2>
      <p>As homes continue to serve multiple purposes, flexible spaces have become essential. Furniture that can adapt to different needs – such as expandable dining tables, murphy beds, and modular seating – allows rooms to transform based on the activity.</p>
      
      <p>Smart storage solutions that maximize space while maintaining a clean aesthetic are particularly valuable in smaller homes and apartments.</p>
    `,
    relatedPosts: [1, 4, 5]
  },
  3: {
    id: 3,
    title: 'Essential Elements of Home Staging',
    date: 'March 22, 2023',
    author: 'Sarah Williams',
    authorImage: 'https://placehold.co/100x100',
    category: 'DECOR, STAGING',
    image: 'https://placehold.co/1200x800',
    content: `
      <p>Home staging is the art of preparing a property for sale by making it appealing to the highest number of potential buyers. Whether you're a homeowner or a real estate professional, understanding the essential elements of effective staging can significantly impact selling price and time on market.</p>
      
      <h2>Declutter and Depersonalize</h2>
      <p>The first and most crucial step in staging is to remove clutter and personal items. Buyers need to envision themselves in the space, which is difficult when it's filled with someone else's family photos and personal collections.</p>
      
      <p>Remove excess furniture to make rooms appear larger and more functional. Pack away personal photographs, memorabilia, and unique decorative items that might distract buyers from seeing the home itself.</p>
    `,
    relatedPosts: [1, 2, 4]
  },
  4: {
    id: 4,
    title: 'Sustainable Furniture Choices for Eco-Conscious Homes',
    date: 'April 10, 2023',
    author: 'David Chen',
    authorImage: 'https://placehold.co/100x100',
    category: 'FURNITURE, SUSTAINABILITY',
    image: 'https://placehold.co/1200x800',
    content: `
      <p>As environmental awareness grows, more homeowners are seeking sustainable furniture options that minimize ecological impact without compromising on style or quality. Here's what to look for when making eco-conscious furniture choices.</p>
      
      <h2>Sustainable Materials</h2>
      <p>The materials used in furniture production have varying environmental footprints. Look for options made from:</p>
      <ul>
        <li>FSC-certified wood from responsibly managed forests</li>
        <li>Reclaimed or recycled wood that gives new life to existing materials</li>
        <li>Rapidly renewable materials like bamboo, rattan, or cork</li>
        <li>Recycled metal, plastic, or textile components</li>
      </ul>
    `,
    relatedPosts: [2, 3, 5]
  },
  5: {
    id: 5,
    title: 'Color Psychology in Interior Design',
    date: 'May 5, 2023',
    author: 'Emma Thompson',
    authorImage: 'https://placehold.co/100x100',
    category: 'DESIGN, COLOR',
    image: 'https://placehold.co/1200x800',
    content: `
      <p>The colors we choose for our homes do more than just please the eye—they can influence our emotions, thoughts, and behaviors in profound ways. Understanding color psychology can help you create spaces that support your desired mood and function.</p>
      
      <h2>The Emotional Impact of Colors</h2>
      <p>Different colors evoke different psychological and physiological responses:</p>
      <ul>
        <li><strong>Blue</strong> promotes calm and relaxation, making it ideal for bedrooms and bathrooms</li>
        <li><strong>Red</strong> stimulates energy and appetite, working well as an accent in dining rooms or kitchens</li>
        <li><strong>Green</strong> connects us to nature and promotes balance, perfect for any room where stress reduction is a goal</li>
        <li><strong>Yellow</strong> evokes optimism and creativity but can cause anxiety in large amounts</li>
      </ul>
    `,
    relatedPosts: [1, 2, 4]
  }
};

// Get all blogs for listing
const getAllBlogs = () => {
  return Object.values(blogData) ;
};

// Get a specific blog by ID
const getBlogById = (id) => {
  return blogData[id] || null;
};

// Get related blogs
const getRelatedBlogs = (blogId) => {
  const blog = getBlogById(blogId);
  if (!blog || !blog.relatedPosts) return [];
  
  return blog.relatedPosts.map(id => getBlogById(id)).filter(Boolean);
};

// In a real implementation, these functions would make API calls
// to fetch data from a backend server or CMS

export { getAllBlogs, getBlogById, getRelatedBlogs };