/** @jsx jsx */
import { jsx, Container, Grid, Image, Link } from 'theme-ui';
import BlogCard from 'components/blog-card';
import Title from 'assets/Blog.png';
import { logEvent } from '../analytics/index';

export default function Blog({ blogs }) {
  const random = blogs.sort(() => (Math.random() > 0.5 ? 1 : -1));
  blogs = random.slice(0, 3);

  return (
    <section id="blog" sx={styles.pricing}>
      <Container>
        <Grid>
          <Image src={Title} sx={styles.header} alt="blog" />
          <Link
            href="/blog"
            sx={{
              position: 'absolute',
              justifySelf: 'right',
              padding: '30px',
              color: '#ffc35b',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>See full list of blogs</span>
          </Link>
        </Grid>
        <Grid sx={styles.grid}>
          {blogs.map(
            (post) =>
              post.publish && (
                <BlogCard
                  data={post}
                  key={post._id}
                  onClick={(e) => {
                    e.preventDefault();
                    logEvent({
                      action: 'dddd',
                      category: 'clicks',
                      label: 'click_cv',
                    });
                  }}
                />
              )
          )}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [
      '-55px',
      '-60px',
      '-60px',
      '-25px',
      '-13px',
      '-13px',
      '-13px',
      '-13px',
    ],

    gridGap: ['37px 0', null, '50px 24px', null, '50px 24px', null, null, null],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  header: {
    ml: ['-20px', '-20px', '-10px', '-25px', '-20px', '-20px', '-20px'],
    mb: [null, '5px'],
  },

  pricing: {
    backgroundColor: 'primary',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [5, null, 4, null, null, 4],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,

      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
