import React, {
  lazy,
  useState,
  useEffect
} from 'react';
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { Layout } from 'client/ui/components/_block/Layout';
import { get } from 'client/providers/fetch';

const CocktailSearch = lazy(() => import('client/ui/modules/Cocktail/Search'));
const CocktailCard = lazy(() => import('client/ui/modules/Cocktail/Card'));

export const Cocktail = () => {
  const location = useLocation();
  const math = useRouteMatch();
  const params = useParams();
  const [cocktails, setCocktails] = useState(null);
  const [cocktail, setCocktail] = useState(null);
  const source = 'https://www.thecocktaildb.com/api/json/v1/1';

  const handleChange = async (str = '') => {
    const results = await get(`${source}/search.php`, { s: str });
    if (results.data && results.data.drinks) {
      setCocktails(results.data.drinks);
    }
  };

  const handleGetByID = async (id = null) => {
    if (!id) return null;
    const results = await get(`${source}/lookup.php`, { i: id });
    if (results.data && results.data.drinks && results.data.drinks.length > 0) {
      setCocktail(results.data.drinks[0]);
    }
  };
  
  console.log(location, params);

  useEffect(() => {
    if ((params.id && !cocktails) || (params.id && cocktails && !cocktails.some(s => s.idDrink === Number(params.id)))) {
      handleGetByID(params.id);
    } else {
      handleChange();
    }
  }, [params]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/cocktail/search">
          <CocktailSearch onChange={handleChange} source={cocktails} />
        </Route>
        <Route exact path="/cocktail/card/:id">
          <CocktailCard source={cocktail} card />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Cocktail;
