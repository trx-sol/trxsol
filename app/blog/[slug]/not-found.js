import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Blog Post Not Found
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Button asChild>
                    <Link href="/blog" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>
        </div>
    );
}
