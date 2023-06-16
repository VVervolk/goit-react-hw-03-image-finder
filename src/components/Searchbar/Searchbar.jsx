import { SearchForm, Header, Button, Label, Input } from './Searchbar.styled';

export const Searchbar = props => {
  return (
    <Header>
      <SearchForm onSubmit={props.onSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
