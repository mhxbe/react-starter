import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Paragraph, Title, ButtonLink, Link, List } from '../../App.styles';

const PageNotFound: React.FC<RouteComponentProps> = (props) => {
  const { history } = props;
  return (
    <>
      <Title>Page Not Found</Title>
      <Paragraph>{`We couldn't find what you were looking for.`}</Paragraph>
      <List>
        <li>
          navigate to <Link to="/">homepage</Link>
        </li>
        <li>
          go back to{' '}
          <ButtonLink type="button" onClick={history.goBack}>
            previous page
          </ButtonLink>
        </li>
      </List>
    </>
  );
};

export default PageNotFound;
