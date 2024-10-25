import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Mobile from './mobile';

jest.mock('./path/to/AuthContext', () => ({
    useAuth: () => ({
        user: { name: 'John Doe' }, 
    }),
}));

test('toggles menu visibility for logged-in user', () => {
    render(<Mobile />);

    const toggleButton = screen.getByRole('button', { name: /bars/i });
    fireEvent.click(toggleButton);

    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorite/i)).toBeInTheDocument();
    expect(screen.getByText(/Booking/i)).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.queryByText(/Profile/i)).not.toBeInTheDocument();
});
