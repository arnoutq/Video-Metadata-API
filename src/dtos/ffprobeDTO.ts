/* Data Transfer Object for video meta data */
export interface ffprobeDTO {
    audio: [{
        bitRate: number,
        channelLayout: string,
        channels: number,
        sampleRate: number
    }];
    bitrate: number;
    duration: number;
    video: [
        {
            bitRate: number,
            frameRate: number,
            resolution: {
                height: number,
                width: number
            }
        }
    ];
}