import util from 'util';
import { exec } from 'child_process';
import { CustomError } from "../utilities/CustomError";
const executeCommand = util.promisify(exec);

export interface IvideoStream {
    codec_type: "video";
    width: number;
    height: number;
    avg_frame_rate: string;
    bit_rate: string;
}

export interface IaudioStream {
    codec_type: "audio";
    sample_rate: string;
    channels: number;
    channel_layout: string;
    bit_rate: string;
}

export interface Iffprobe {
    streams: [] | [IaudioStream] | [IvideoStream] | [IvideoStream, IaudioStream] | [IaudioStream, IvideoStream];
    format:
        {
            duration: string;
            bit_rate: string;
        }
}

const ffprobe = async (requestUrl: string): Promise<Iffprobe> => {
    /* execute ffprobe command and retrieve the output */
    const command = "ffprobe -v quiet -print_format json -show_format -show_streams";
    try {
        const { stdout } = await executeCommand(`${command} ${requestUrl}`);
        return JSON.parse(stdout);
    } catch (e) {
        throw new CustomError("Video file location not found", 404);
    }
};

export default ffprobe;