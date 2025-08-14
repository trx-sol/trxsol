import { NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';

// For static builds, we'll pre-generate all blog images at build time
export async function generateStaticParams() {
    return [{}]; // Generate one static image
}

export async function GET() {
    try {
        const title = 'TRX Solutions Blog';

        return new ImageResponse(
            (
                <div
                    style={{
                        background: 'linear-gradient(to bottom right, #0891b2, #164e63)',
                        width: '1200',
                        height: '630',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                    }}
                >
                    <div
                        style={{
                            color: 'white',
                            fontSize: '60px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            maxWidth: '80%',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '30px',
                            marginTop: '20px',
                        }}
                    >
                        TRX Solutions
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e) {
        console.error('Error generating blog image:', e);
        return new NextResponse('Failed to generate image', { status: 500 });
    }
}
