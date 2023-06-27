/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import Lottie from 'react-lottie';
import animationData from 'assets/about.json';

import Partner from 'assets/partner.png';

const data = {
  subTitle: 'About GrowthOnBoard',
  title: 'Our Expertise Sets Us Apart',
  description:
    'Growthonboard leverages the power of email marketing and account-based marketing (ABM) to drive revenue growth. Our targeted campaigns and personalized LinkedIn marketing build strong relationships with decision-makers, while our solution cuts down on no-shows. Unlock your growth potential with us.',
  btnName: 'Get Started',
  btnURL: '#',
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function About() {
  return (
    <section sx={{ variant: 'section.partner' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
        <Lottie
              options={defaultOptions}
              height={'70%'}
              width={'70%'}
            />        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
