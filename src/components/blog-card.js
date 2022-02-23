import { Box, Card, Flex, Image, Text, Avatar } from 'theme-ui';
import { urlFor } from '../../sanity';
import Link from 'next/link';
import { Icon } from '@iconify/react';
export default function BlogCard({ data }) {
  return (
    <Link href={`/blog/${data.slug.current}`}>
      <Card sx={styles.pricingBox}>
        <Box>
          <Flex sx={styles.pricingHeader}>
            <Card
              sx={{
                maxWidth: '100%',
                padding: '0px',
              }}
            >
              <Image
                src={urlFor(data.mainImage)}
                sx={styles.image}
                alt={data.title}
              />
              <Text className="package__name" sx={styles.title}>
                {data.title}
              </Text>
              <Text className="package__description" sx={styles.des}>
                {data.description}
              </Text>

              <Box
                sx={{
                  padding: '15px 30px',
                  position: 'absolute',
                  bottom: '0',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Flex>
                  <Avatar src={urlFor(data.author?.image)} />
                  <Text
                    className="package__name"
                    sx={{ alignSelf: 'center', paddingLeft: '10px' }}
                  >
                    {data.author?.name}
                  </Text>
                </Flex>
                {/* <Flex>
                  <Icon
                    icon="akar-icons:clock"
                    color="#ffc35b"
                    style={{
                      alignSelf: 'center',
                    }}
                  />
                  <Text
                    className="package__name"
                    sx={{ alignSelf: 'center', paddingLeft: '10px' }}
                  >
                    {data?.estimatedReadingTime}
                  </Text>
                </Flex> */}
              </Box>
              {/* <Box>
                <Text className="package__name"> {data.author?.name}</Text>
              </Box>
              <Box>
                <Text className="package__name" sx={{}}>
                  {data.author?.name}
                </Text>
              </Box> */}
            </Card>
          </Flex>
        </Box>
      </Card>
    </Link>
  );
}

const styles = {
  image: {
    width: '-webkit-fill-available',
    height: '60%',
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
  },
  title: {
    fontWeight: '700',
    fontSize: '1.5rem',
    padding: '15px 30px',
    textAlign: 'left',
  },
  des: {
    padding: '15px 30px 60px',
    textAlign: 'left',
  },
  pricingBox: {
    padding: '0px',
    flex: [
      '0 1 100%',
      null,
      null,
      '0 1 50%',
      '0 1 45%',
      '0 1 40%',
      '0 1 38.5%',
    ],
    background: '#252734',
    borderRadius: 8,
    // ml: [3, 5, 5, 6],
    // margin: [null, null, null, '24px'],
    position: 'relative',
    mt: ['40px', null, null, 0],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px',
    },
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '30px 30px 60px -25px #FFC35B',
    },
  },
  header: {
    height: ['28px', null, null, null, '32px'],
    backgroundColor: '#EF9E48',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: [3, null, 4],
    letterSpacing: '-.14px',
    px: '10px',
  },
  icons: { width: '10%', margin: '10px' },
  heading: {
    fontWeight: 'heading',
    fontSize: [6, null, null, null, 7],
    textAlign: 'center',
    lineHeight: '23px',
    color: 'text',
    margin: [1, null, '12px'],
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['15px', null, null, null, null, '50px'],
    padding: '0px',
  },
};
