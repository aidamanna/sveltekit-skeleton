import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/svelte'
import Header from "../../../src/components/example/Header.svelte";

describe('Header', () => {
    test('should render', () => {
        render(Header);
        const button = screen.getByRole('heading');

        expect(button).toHaveTextContent('Header');
    });
});


