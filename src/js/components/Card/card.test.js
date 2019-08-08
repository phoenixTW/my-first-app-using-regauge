import React from 'react';
import Card from './card';

describe('<Card />', () => {
    let component;
    const props = {
      title: 'Some title',
      description: 'The description goes here'
    };

    describe('HTML Render', () => {
        beforeEach(() => {
            component = shallow(<Card {...props} />);
        });
        
        it('should render Card successfully', () => {
            expect(component.find('.card__wrapper')).toHaveLength(1);
        });
        
        it('should render title', () => {
          expect(component.find('.card__wrapper h3').text()).toEqual('Some title');
        });

        it('should render description', () => {
          expect(component.find('.card__wrapper p').text()).toEqual('The description goes here');
        });
    });

    describe('Props', () => {
      it('should render with default Props', () => {
        expect(Card.defaultProps.description).toEqual('');
      });
    });
});