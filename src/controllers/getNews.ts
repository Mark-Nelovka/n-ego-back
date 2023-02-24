import axios from 'axios';
import { Request, Response } from 'express';

async function getNews(req: Request, res: Response) {
    const { params } = req;

    try {
        const {data} = await axios.get(`${process.env.NEWS_API}/v3/articles`);
        const result = data.slice(0, +params.page * 4);
        return res.json({
            status: "succes",
            code: 200,
            data: {
                items: result,
                totalCount: data.length
            },
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
             return res.json({
            status: error.status,
            code: error.code,
            message: error.message
        })
        }
    }
}

export default getNews;