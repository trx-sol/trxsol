import Image from 'next/image';

export default function BlogImage({ title }) {
    return (
        <Image
            src="/images/blog/default-blog-image.png"
            alt={title}
            width={1200}
            height={630}
            priority
        />
    );
}
