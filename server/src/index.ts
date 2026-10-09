import express, { type Express, type Request, type Response } from 'express';
const app: Express = express();
const port = 3000;

app.get('/api/health', (_req: Request, res: Response) => {
    res.json({status: "ok"});
});

app.listen(port, (error) => {
    if (error) {
        console.error(`Failed to start server on port ${port}`, error.message);
        process.exit(1);
    }
    console.log(`selfImprovementApp Listening on port ${port}`);
});