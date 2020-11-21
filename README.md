# Video-Metadata-API
> Video metadata API for videos

## Response

With video and audio:

```json 
{
    "audio": [
        {
            "bitRate": 317375,
            "channelLayout": "stereo",
            "channels": 2,
            "sampleRate": 48000
        }
    ],
    "video": [
        {
            "bitRate": 4953266,
            "frameRate": 30000,
            "resolution": {
                "height": 720,
                "width": 1280
            }
        }
    ],
    "bitrate": 5278815,
    "duration": 33770.667
}
```

Without audio:
```json 
{
    "audio": false,
    "video": [
        {
            "bitRate": 4953266,
            "frameRate": 30000,
            "resolution": {
                "height": 720,
                "width": 1280
            }
        }
    ],
    "bitrate": 4956041,
    "duration": 33734
}
```


## Install
```
yarn install
```

## Start
```
npm start
```
