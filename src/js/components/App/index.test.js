import React from 'react';
import App from '.';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('HTML Render', () => {
    it('should render successfully', () => {
      expect(wrapper).toBeTruthy();
    });
  
    it('should render one card module successfully', () => {
      expect(wrapper.find('Card')).toHaveLength(1);
    });      
  });

  describe('Props', () => {
    it('should render card module with valid props', () => {
      expect(wrapper.find('Card').props().title).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing.');
      expect(wrapper.find('Card').props().description).toEqual('Lorem ipsum dolor sit amet consectetur adipiscing elit, lacus elementum eu vivamus sem urna penatibus cras, mus volutpat egestas dapibus inceptos auctor.');
    });
  });
});
