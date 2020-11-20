import { ffprobeDTO } from "../dtos/ffprobeDTO";
import { Iffprobe } from "../commands/ffprobe";

/* map the results from ffprobe command */
export const toDTO = (ffprobe: Iffprobe): ffprobeDTO => {
    return {
        audio: [{
            bitRate: parseInt(ffprobe.streams[0].bit_rate),
            channelLayout: ffprobe.streams[0].channel_layout,
            channels: ffprobe.streams[0].channels,
            sampleRate: parseInt(ffprobe.streams[0].sample_rate)
        }],
        bitrate: parseInt(ffprobe.format.bit_rate),
        duration: parseFloat(ffprobe.format.duration) * 1000,
        video: [
            {
                bitRate: parseInt(ffprobe.streams[1].bit_rate),
                frameRate: parseInt(ffprobe.streams[1].avg_frame_rate),
                resolution: {
                    height: ffprobe.streams[1].height,
                    width: ffprobe.streams[1].width
                }
            }
        ]
    }
}