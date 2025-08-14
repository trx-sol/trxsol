import projectsData from '../public/projects.json';
import blogsData from '../public/blogs.json';

export const projectFetch = async () => {
    try {
        return projectsData;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};

export const fetchBlogs = async () => {
    try {
        const blogs = blogsData;


        return blogs.sort((a, b) =>
            new Date(b.publish_info.date_published) - new Date(a.publish_info.date_published)
        );
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw new Error('Failed to fetch blogs');
    }
};

export const fetchBlogBySlug = async (slug) => {
    const blogs = await fetchBlogs();
    return blogs.find(blog => blog.seo.slug === slug);
};
