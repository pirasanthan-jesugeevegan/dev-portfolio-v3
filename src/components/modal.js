import React from 'react';
import {
  Box,
  Container,
  Button,
  Flex,
  Heading,
  Image,
  Grid,
  Text,
  Close,
} from 'theme-ui';
import { Icon } from '@iconify/react';

function Modal({ setShowModal, data }) {
  const card = data.card;
  return (
    <Box
      sx={styles.box}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <Container sx={styles.container}>
        <Flex>
          <Box p={2} bg="primary" sx={{ flex: '1 1 auto' }}>
            <Heading as="h2" variant="modalTitle">
              {data.name}
            </Heading>
          </Box>
          <Box p={2} bg="muted">
            <Close
              onClick={() => {
                setShowModal(false);
              }}
            />
          </Box>
        </Flex>
        <Grid sx={{ fontFamily: 'Arial' }} gap={2} columns={[1, '2fr 2fr']}>
          <Box p={2} bg="primary">
            <Text>{data?.card?.description}</Text>
            <Heading as="h1" variant="lead">
              {card?.dev === true ? 'Feature :' : 'Test Scenario :'}
            </Heading>
            {card?.feature?.map((item, i) => (
              <Text key={i}>{item}</Text>
            ))}
            <Heading as="h1" variant="lead">
              TECHNOLOGIES USED :
            </Heading>

            {card?.tech?.map((item) => (
              <Text>- {item}</Text>
            ))}
          </Box>
          <Box p={2} bg="primary">
            <Image src={data.img} />
          </Box>
        </Grid>
        <Box sx={styles.button}>
          {card?.demo !== undefined ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = card?.demo;
              }}
              variant="secondary"
              aria-label="Download CV"
              style={{ marginRight: '10px' }}
            >
              <Icon icon="bx:bx-show" style={{ marginRight: '10px' }} />
              DEMO
            </Button>
          ) : (
            ''
          )}
          {card?.code !== undefined ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = card?.code;
              }}
              variant="secondary"
              aria-label="Download CV"
            >
              <Icon
                icon="akar-icons:github-fill"
                style={{ marginRight: '10px' }}
              />
              CODE
            </Button>
          ) : (
            ''
          )}
        </Box>
      </Container>
    </Box>
  );
}
const styles = {
  box: {
    position: 'fixed',
    zIndex: '1',
    paddingTop: '100px',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    backgroundColor: 'primary',
    margin: 'auto',
    py: [4, 4, 4, 6],
    px: [2, 4, 4, 6],
    border: '1px solid #888',
    width: '80%',
  },
  button: {
    textAlign: ['center', 'center', 'left', 'left', 'left', 'left'],
  },
};
export default Modal;
