import type { RequestHandler, Response } from '@sveltejs/kit';
import type { Image } from '$lib/types'

const key =  import.meta.env.VITE_PIXABAY_API_KEY;

interface APIResponse {
    total: number;
    totalHits: number;
    hits: Image[];
}

const fetchImages = async (q = '', type = 'all', category = '', order = 'popular') => {
    const res = await fetch(`https://pixabay.com/api/?key=${key}&q=${q}&per_page=15&image_type=${type}&orientation=horizontal&category=${category}&order=${order}`);
    const data = await res.json();
    return data as APIResponse;
};

export const get: RequestHandler = async ({ query }) => {
    const q = query.get('q');
    const type = query.get('type');
    const category = query.get('category');
    const order = query.get('order');
    const data = await fetchImages(q, type, category, order);

    const res: Response = {
        body: {
            data
        }
    }
    return res;
}