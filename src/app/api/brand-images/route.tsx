'use server';

import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';


const publicDir = path.join(process.cwd(), 'public');


interface IImage {
    src: string;
    alt: string;
}

interface IResponse {
    images: IImage[];
}

export async function GET(request: Request) {
    const images = fs.readdirSync(path.join(publicDir, 'brands'));
    if (images.length === 0) {
        return Response.json({ images: [] });
    }


    const imagesData = images.map((file) => {
        return {
            src: `/brands/${file}`,
            alt: file,
        };
    });

    return Response.json({ images: imagesData });

}