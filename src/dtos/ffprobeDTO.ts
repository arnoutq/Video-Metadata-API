/* Data Transfer Object for video meta data */
interface audioStreamDTO {
    bitRate: number;
    channelLayout: string;
    channels: number;
    sampleRate: number;
}

interface videoStreamDTO {
    bitRate: number;
    frameRate: number;
    resolution: {
        height: number;
        width: number;
    }
}

export interface ffprobeDTO {
    audio: [audioStreamDTO] | false;
    bitrate: number;
    duration: number;
    video: [videoStreamDTO] | false;
}