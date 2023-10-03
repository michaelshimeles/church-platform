import { Flex, Text } from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'

export function YouTubePreview({ url }: any) {
    return (
        <Flex padding={4} justify={'center'}>
            {url
                ? <YouTubePlayer url={url} />
                : <Text>Add a YouTube URL</Text>
            }
        </Flex>
    )
}