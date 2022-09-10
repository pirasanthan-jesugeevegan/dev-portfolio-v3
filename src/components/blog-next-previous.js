/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import { Link as Links } from './link';
export default function BlogNextPrevious({ data }) {
  console.log(data);
  //   if (data.nextPost.title.length && data.previousPost.title.length > 35) {
  //     data.previousPost.title = data.previousPost.title.substring(0, 34) + '...';
  //     data.nextPost.title = data.nextPost.title.substring(0, 34) + '...';
  //   }
  return (
    <Box sx={styles.container}>
      <Flex>
        <Box p={2} bg="primary" color="white" sx={{ flex: '1 1 auto' }}>
          <Text sx={styles.title}>
            {data?.previousPost?.title && 'Previous Article'}
          </Text>
          <Flex>
            <Box sx={styles.subtitle}>
              <Links
                path={`/blog/${data?.previousPost?.slug?.current}`}
                sx={styles.link}
              >
                {data?.previousPost?.title}
              </Links>
            </Box>
          </Flex>
        </Box>
        <Box></Box>
        <Box p={2} bg="muted">
          <Text sx={styles.title}>
            {data?.nextPost?.title && 'Next Article'}
          </Text>
          <Flex>
            <Box></Box>
            <Box sx={styles.subtitle}>
              <Links
                path={`/blog/${data?.nextPost?.slug?.current}`}
                sx={styles.link}
              >
                {data?.nextPost?.title}
              </Links>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
const styles = {
  container: {
    borderTop: '1px solid',
    borderTopColor: '#252734',
    paddingTop: '30px',
  },
  title: { font: 'message-box', paddingBottom: '10px' },
  link: {
    color: '#ffc35b',
    borderBottom: '1px dotted #ffc35b',
    textDecoration: 'none',
  },
};
