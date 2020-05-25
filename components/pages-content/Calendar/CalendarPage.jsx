import React, { Component } from 'react';
import {
  GridWrapper,
  Box,
  PageHolder,
  Text,
  Card,
  UnderCard,
  ImageWrapper,
  CardWithUnderCardMenu,
} from '../../theme/myStyledComponents';
import Link from 'next/link';

export default class CalendarPage extends Component {
  render() {
    return (
      <PageHolder xs={{ padding: '100px 15px 0 15px' }}>
        <GridWrapper xs={{ height: '110%' }}>
          <CardWithUnderCardMenu
            xs={{ gcs: 8 }}
            link1={{
              href: '#',
              name: 'CALENDAR',
            }}
            link2={{ href: '#', name: 'OPTIONS' }}
          >
            <Box>
              <Card shadow={3} xs={{ d: 'flex', padding: '8px' }}>
                <Text fontWeight={400} xs={{ fsize: '24px' }}>
                  April
                </Text>
                <ImageWrapper xs={{ w: '12px', margin: '0 0 0 15px' }}>
                  <img src="/triangle.svg" />
                </ImageWrapper>
                <Text
                  fontWeight={400}
                  xs={{ fsize: '24px', margin: '0 0 0 auto' }}
                >
                  31
                </Text>
                <Text
                  fontWeight={400}
                  xs={{ fsize: '12px', margin: 'auto 0 3px 3px' }}
                >
                  MON
                </Text>
              </Card>
            </Box>
          </CardWithUnderCardMenu>
        </GridWrapper>
      </PageHolder>
    );
  }
}
