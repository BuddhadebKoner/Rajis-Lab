// Function to fetch all blogs
export async function getAllBlogs(pageNumber = 1, limit = 5) {
   try {
      const response = await fetch(`/api/blogs?page=${pageNumber}&limit=${limit}`);

      if (!response.ok) {
         throw new Error("Failed to fetch blogs");
      }

      return await response.json();
   } catch (error) {
      console.error("Error fetching blogs:", error);
      return { blogs: [], totalBlogs: 0 };
   }
}