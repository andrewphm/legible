import React from 'react';
import backgroundImg from '../../assets/LatestNewsImg.svg';
import newscard1 from '../../assets/latest-news/newscard1.jpeg';
import newscard2 from '../../assets/latest-news/newscard2.jpeg';
import newscard3 from '../../assets/latest-news/newscard3.jpeg';

// Styled components
import {
  Section,
  Container,
  NewsContainer,
  Button,
  Card,
  CardInfo,
  Anchor,
} from './LatestNews.styles';

const NewsCard = ({ news }) => {
  return (
    <Anchor href={news.link} target="_blank" rel="noreferrer">
      <Card>
        <img src={news.img} alt="person with astronaut helmet" />
        <CardInfo>
          <p className="date">{news.date}</p>
          <p className="description">{news.title}</p>
          <p className="author">by {news.author}</p>
          <button>READ MORE</button>
        </CardInfo>
      </Card>
    </Anchor>
  );
};

const LatestNews = () => {
  const news = [
    {
      date: 'December 13, 2021',
      title: 'Spice Up Your Reading Life with a Sci-Fi Favorite on Legible.',
      author: 'Marci Rae Johnson',
      img: newscard1,
      link: 'https://medium.com/legible-media/spice-up-your-reading-life-with-a-sci-fi-favorite-on-legible-a2b467424278?source=rss----a5731dd888c4---4',
    },
    {
      date: 'December 9, 2021',
      title: 'The Legible List: New & Noteworthy Books',
      author: 'Marci Rae Johnson',
      img: newscard2,
      link: 'https://medium.com/legible-media/the-legible-list-new-noteworthy-books-12-7-21-4008a805c6db?source=rss----a5731dd888c4---4',
    },
    {
      date: 'December 7, 2021',
      title: 'Surprise Me: Read These 2021 Award Winners on Legible',
      author: 'Tanya Runyan',
      img: newscard3,
      link: 'https://medium.com/legible-media/surprize-me-read-these-2021-award-winners-on-legible-545c39108403?source=rss----a5731dd888c4---4',
    },
  ];

  return (
    <Section backgroundImg={backgroundImg}>
      <Container>
        <h2>Latest News</h2>
        <NewsContainer>
          {news.map((news, i) => (
            <NewsCard key={i} news={news} />
          ))}
        </NewsContainer>
        <Button>Read the Full Blog</Button>
      </Container>
    </Section>
  );
};

export default LatestNews;
