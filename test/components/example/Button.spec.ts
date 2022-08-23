import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/svelte'
import Button from '../../../src/components/example/Button.svelte'

describe('Button', () => {
    test('should have default text', () => {
        render(Button);
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Button');
    });

    test('should change text on click', async () => {
        render(Button);
        const button = screen.getByRole('button');

        await fireEvent.click(button);

        expect(button).toHaveTextContent('Button Clicked');
    });
});


