import React from 'react';
import {
  Heading,
  Main,
  Section,
  TabItem,
  Tabs,
  TabsContainer,
  TabsWrapper,
} from './Browse.styles';

const Browse = () => {
  return (
    <Main>
      <Heading>Browse</Heading>
      <TabsWrapper>
        <TabsContainer>
          <Tabs>
            <TabItem className="focused">
              <p>RECENTLY ADDED</p>
            </TabItem>
            <TabItem>
              <p>FREE BOOKS</p>
            </TabItem>
            <TabItem>
              <p>CATEGORIES</p>
            </TabItem>
          </Tabs>
        </TabsContainer>
      </TabsWrapper>

      <Section></Section>
    </Main>
  );
};

export default Browse;
