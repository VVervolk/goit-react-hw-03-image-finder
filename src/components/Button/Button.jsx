import { Button } from './Button.styled';

export function ButtonLoadMore({ onClick }) {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
}
