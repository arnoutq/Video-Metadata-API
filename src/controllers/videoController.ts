import { Request, Response } from "express";
import ffprobe from "../commands/ffprobe";
import { ffprobeDTO } from "../dtos/ffprobeDTO";
import { toDTO } from "../mappers/ffprobeMap";

export const getMetaData = async (req: Request, res: Response) => {

    try {
        const { filename } = req.params;
        const videoFile = `${filename}.mp4`;
        const requestUrl = `${process.env.HOST_URL}/${videoFile}`;

        /* execute ffprobe command and retrieve video meta data */
        const metaData = await ffprobe(requestUrl);
        /* map the ffprobe results into a DTO */
        const dto: ffprobeDTO = toDTO(metaData);
        /* return the DTO as JSON */
        return res.json(dto);
    } catch (e) {
        const statusCode = e.statusCode || 500;
        const message = e.message || "No error message defined";
        return res.status(statusCode).json({ error: message });
    }
};