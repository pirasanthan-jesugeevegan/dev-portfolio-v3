/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Label, Input, Textarea, Button, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';

export default function CommentForm({ post }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
        fetch('/api/sendgrid', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => console.log(res));
      })
      .catch((error) => {
        setSubmitted(false);
      });
    styles.forms['display'] = 'none';
  };

  return (
    <>
      {submitted ? (
        <Box
          sx={{
            backgroundColor: '#ffc35b',
            margin: '10px',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          <Text sx={{ fontSize: 'x-large' }}>
            Thank you for submitting your comment!
          </Text>
          <Text>Once it has been approved, it will appear below!</Text>
        </Box>
      ) : (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.forms}>
          <Input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />
          <Text sx={{ color: '#ffc35b' }}>Enjoyed this article?</Text>
          <Text sx={{ fontSize: 'x-large' }}>Leave a comment below!</Text>
          <Label htmlFor="name">Name</Label>
          <Input
            {...register('name', { required: true })}
            name="name"
            id="name"
            placeholder="John Smith"
            mb={3}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            {...register('email', { required: true })}
            name="email"
            id="email"
            type="email"
            placeholder="your@email.com"
            mb={3}
          />
          <Label htmlFor="comment">Comment</Label>
          <Textarea
            {...register('comment', { required: true })}
            name="comment"
            id="comment"
            placeholder="Enter some long from content"
            rows={6}
            mb={3}
          />
          {errors.name && (
            <Text sx={styles.error}>- The name Field is required</Text>
          )}
          {errors.email && (
            <Text sx={styles.error}>- The email Field is required</Text>
          )}
          {errors.comment && (
            <Text sx={styles.error}>- The comment Field is required</Text>
          )}
          <Button type="submit" sx={{ width: ['100%', 'auto'] }}>
            Submit
          </Button>
        </Box>
      )}
    </>
  );
}

const styles = {
  error: { color: '#bf1111', margin: '10px' },
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
