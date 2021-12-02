import { mount } from '@vue/test-utils'
import Card from '../components/Pokeman'

test('Pokeman component displays suit', () => {
    const wrapper = mount(Pokeman, {
        props: {
           name: 'Pikachu',
           index: 23, 
        }
    });

    expect(wrapper.text()).toBe('Pikachu');

});

test('Pokeman html', () => {
    const wrapper = mount(Pokeman, {
        props: {
           name: 'Pikachu',
           index: 23, 
        }
    });

    expect(wrapper.html()).toMatchSnapshot();
});