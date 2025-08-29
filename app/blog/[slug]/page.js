import { fetchBlogs } from "@/lib/datafatch";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogPostClient from "./BlogPostClient";
import Loading from "./loading";

export async function generateMetadata({ params }) {
    try {
        const blogs = await fetchBlogs();
        const blog = blogs.find(b => b.seo.slug === params.slug);

        if (!blog) {
            return {
                title: "Blog Post Not Found | TRX Sol",
                description: "The requested blog post could not be found.",
                robots: { index: false, follow: false }
            };
        }

        const { meta, social, page_info, seo } = blog;

        return {
            metadataBase: new URL('https://trxsol.com'),
            title: meta.meta_title,
            description: meta.meta_description,
            alternates: {
                canonical: meta.canonical_url,
            },
            openGraph: {
                title: social.og.og_title,
                description: social.og.og_description,
                url: social.og.og_url,
                type: social.og.og_type,
                images: [
                    {
                        url: social.og.og_image,
                        width: 1200,
                        height: 630,
                        alt: page_info.featured_image.alt,
                    },
                ],
                siteName: "TRX Sol",
            },
            twitter: {
                card: social.twitter.twitter_card,
                title: social.twitter.twitter_title,
                description: social.twitter.twitter_description,
                images: [social.twitter.twitter_image],
                creator: "@trxsolutions",
            },
            robots: {
                index: meta.robots.includes('index'),
                follow: meta.robots.includes('follow'),
                googleBot: {
                    index: meta.robots.includes('index'),
                    follow: meta.robots.includes('follow'),
                },
            },
            keywords: [seo.primary_keyword, ...seo.secondary_keywords],
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: "Blog - TRX Sol",
            description: "Read our latest blog posts about web development, SEO, and digital solutions.",
            robots: { index: false, follow: false }
        };
    }
}

export async function generateStaticParams() {
    try {
        const blogs = await fetchBlogs();
        return blogs.map((blog) => ({
            slug: blog.seo.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export default async function BlogPost({ params }) {
    try {
        const blogs = await fetchBlogs();
        const blog = blogs.find((b) => b.seo.slug === params.slug);

        if (!blog) {
            notFound();
        }

        return (
            <Suspense fallback={<Loading />}>
                <BlogPostClient blog={blog} />
            </Suspense>
        );
    } catch (error) {
        console.error('Error in BlogPost:', error);
        notFound();
    }
}