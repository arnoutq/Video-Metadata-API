import util from 'util';
import { exec } from 'child_process';
import { CustomError } from "../utilities/CustomError";
const executeCommand = util.promisify(exec);

export interface Iffprobe {
    streams:
        [{
            sample_rate: string,
            channels: number,
            channel_layout: string,
            bit_rate: string
        },
            {
                width: number,
                height: number,
                avg_frame_rate: string,
                bit_rate: string
            }],
    format:
        {
            duration: string,
            bit_rate: string
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