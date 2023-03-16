import Home from '.';
import { renderTheme } from '../../styles/render.theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

describe('<Home />', () => {
  it('should render home', () => {
    const {container} = renderTheme(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });


  it('should do something', () => {
    expect(1).toBe(1);
  });
});
