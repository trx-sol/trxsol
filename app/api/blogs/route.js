import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'blogs.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const blogs = JSON.parse(jsonData);

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error reading blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
