import React, { useState, useEffect } from 'react';
import { Card } from 'client/ui/modules/Cocktail/Card';
import { useHistory } from 'react-router';
import {
  SearchWrapper,
  Title,
  ControlWrapper,
  Control,
  InputStyled,
  SearchBtn,
  Error,
  ListWrapper,
  List,
} from './styled';

const Search = ({ source, onChange }) => {
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const str = e.target.value;
    if (str.lenght <= 2) {
      setError('Поиск от 3х символов');
      return null;
    }
    setError(null);
    onChange(str);
  };

  const handleShow = (id) => {
    history.push(`/cocktail/card/${id}`);
  };

  useEffect(() => {
    window.prerenderReady = true;
  }, []);

  return (
    <SearchWrapper>
      <Title>Поиск по названию коктейля</Title>
      <ControlWrapper>
        <Control>
          <InputStyled onChange={handleChange} />
          <SearchBtn>Искать</SearchBtn>
        </Control>
        {error && (
          <Error>{error}</Error>
        )}
      </ControlWrapper>
      <ListWrapper>
        <List>
          {source && source.map((item, i) => (
            <Card key={`_item_${i + 1}`} source={item} onClick={() => handleShow(item.idDrink)} />
          ))}
        </List>
      </ListWrapper>
    </SearchWrapper>
  );
};

export default Search;
