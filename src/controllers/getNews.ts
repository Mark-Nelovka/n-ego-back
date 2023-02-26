import axios from 'axios';
import * as r from 'express';

async function getNews(req: r.Request, res: r.Response) {
    const { params } = req;

    try {
        const { data } = await axios.get(`${process.env.NEWS_API}/v3/articles`);
        const result = data.slice(0, +params.page * 4);
        return res.status(200).json({
            status: "succes",
            code: 200,
            data: {
                items: result,
                totalCount: data.length
            },
        })
    } catch (error) {
        return res.status(404).json({
            status: "error",
            code: 404,
            data: {
                message: "Not found"
            }
        });

    }
}

export default getNews;