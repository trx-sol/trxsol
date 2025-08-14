import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'projects.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const projects = JSON.parse(jsonData);

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error reading projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
