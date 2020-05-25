import React, { Component } from 'react';
import {
  GridWrapper,
  Box,
  PageHolder,
  Text,
  Button,
} from '../../theme/myStyledComponents';

import { Animation1 } from './img/Animation1.jsx';
import { Animation2 } from './img/Animation2';
import { Animation2Mobile } from './img/Animation2-mobile';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.fontBigXs = 'calc(24px + 2vw)';
    this.fontBigMd = 'calc(28px + 1vw)';
    this.BigPaddingXs = 'calc(10vw + 75px) calc(5vw + 15px)';
    this.BigPaddingMd = 'calc(8vw + 75px) calc(4vw + 80px)';
  }

  render() {
    return (
      <PageHolder>
        <GridWrapper
          xs={{ pad: this.BigPaddingXs }}
          md={{ pad: this.BigPaddingMd }}
        >
          <Box xs={{ gcs: 8 }} md={{ gcs: 4 }}>
            <Text
              lh={1.5}
              xs={{ fsize: this.fontBigXs, ta: 'center' }}
              md={{ fsize: this.fontBigMd, ta: 'left' }}
            >
              Finally, a program that knows better than you when you should and
              when you can repeat a vocabulary
            </Text>
          </Box>
          <Box
            xs={{
              d: 'flex',
              jc: 'center',
              ai: 'center',
              gcs: 8,
              pad: 'calc(12vw + 25px) 15px 0 15px',
            }}
            md={{ gcs: 4, pad: '0 50px 0 70px' }}
          >
            <Animation1 />
          </Box>
        </GridWrapper>
        <GridWrapper
          background={'#080808'}
          xs={{ pad: this.BigPaddingXs }}
          md={{ pad: this.BigPaddingMd }}
          className="black-block"
        >
          <Box
            xs={{
              gr: '2',
              gcs: 8,
              d: 'flex',
              ai: 'center',
              jc: 'center',
              pad: `75px 0 0 0`,
            }}
            lg={{ pad: '0', gcs: 4, gr: '1' }}
          >
            <Box xs={{ w: '100%', d: 'none' }} sm={{ d: 'block' }}>
              <Animation2 />
            </Box>
            <Box sm={{ w: '100%', d: 'none' }}>
              <Animation2Mobile />
            </Box>
          </Box>
          <Box xs={{ gcs: 8 }} lg={{ gcs: 4, pad: '0 0 0 70px' }}>
            <Text
              lh={1.5}
              colorText={({ theme }) => theme.palette.basic.white}
              xs={{
                d: 'flex',
                ai: 'center',
                fsize: this.fontBigXs,
                ta: 'center',
              }}
              lg={{ fsize: this.fontBigMd, ta: 'left' }}
            >
              You send a photo, a saved words in a Google translator, or just
              type it in. <br /> <br /> We create packages for each repetition
            </Text>
          </Box>
        </GridWrapper>
        <Box
          xs={{
            d: 'flex',
            pad: '150px 30px',
            fd: 'column',
            ai: 'center',
            jc: 'center',
          }}
          md={{ pad: '250px 130px' }}
        >
          <Text
            colorText={({ theme }) => theme.palette.basic.black}
            xs={{
              fsize: this.fontBigXs,
              fw: 400,
              mar: ' 0 0 20px',
            }}
            md={{ fsize: this.fontBigMd }}
          >
            Get started now!
          </Text>
          <Button
            bs={({ theme }) => theme.shadow[2]}
            br={({ theme }) => theme.borderRadius.normal}
            background={({ theme }) => theme.palette.main.normal}
            xs={{
              w: '220px',
              d: 'flex',
              jc: 'center',
              pad: '10px 30px',
            }}
          >
            <Text
              colorText={({ theme }) => theme.palette.basic.white}
              xs={{ fsize: '20px', fw: 400 }}
            >
              Join in
            </Text>
          </Button>
        </Box>
      </PageHolder>
    );
  }
}
