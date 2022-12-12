/** @jsx jsx */
import { jsx, Box, Text, Flex, Avatar } from 'theme-ui';
import moment from 'moment';
export default function Comments({ comments }) {
  console.log(comments);
  return (
    <Box sx={styles.forms}>
      <Text>Comments</Text>

      {comments.map((comment) => (
        <Flex
          sx={{
            backgroundColor: 'var(--theme-ui-colors-primary,#323444)',
            borderRadius: '10px',
            margin: '10px',
          }}
        >
          <Box p={2} sx={{ display: 'table' }}>
            <Avatar
              src={`https://ui-avatars.com/api/?background=random&name=${comment.name
                .match(/(\b\S)?/g)
                .join('')
                .match(/(^\S|\S$)?/g)
                .join('')
                .toUpperCase()}`}
              sx={{ maxWidth: 'fit-content' }}
            />
          </Box>
          <Box p={2} sx={{ flex: '1 1 auto' }}>
            <Box>
              {comment.name} -{' '}
              <Text
                sx={{
                  color: 'darkgray',
                  display: 'contents',
                  fontSize: 'smaller',
                }}
              >
                {moment(comment._updatedAt).endOf('day').fromNow()}
              </Text>
            </Box>
            <Box sx={{ overflow: 'hidden' }}>{comment.comment}</Box>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  display: { display: 'none' },
  forms: {
    padding: '10px',
    margin: '10px',
    backgroundColor: '#252734',
    borderRadius: '5px',
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
      },
    },
    button: {
      borderColor: 'gray',
      backgroundColor: (t) => `${t.colors.secondary}`,
      '&:hover': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px`,
        outline: 'none',
      },
    },
  },
};
