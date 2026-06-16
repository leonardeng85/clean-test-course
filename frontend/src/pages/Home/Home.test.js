import { render, screen } from '@testing-library/react';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import Home from '.';

describe('Test Home', () => {
  // 1. Move the spy here so it is accessible to all tests in this block
  const mockGet = jest.spyOn(axios, 'get');

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Helper function to avoid repeating the same mock data logic
  const setupMockSuccess = () => {
    mockGet.mockImplementation((url) => {
      switch (url) {
        case `${API_URL}/api/category/?format=json`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: [
                { id: 1, name: 'Handhelds', description: "So big, you don't need thumbs." },
                { id: 2, name: 'Appeteasers', description: 'Tease the hangry hippo, he get hangrier' },
              ],
            },
          });
        default:
          return Promise.resolve({ data: { status: 'fail' } });
      }
    });
  };

  test('should render categories successfully', async () => {
    // Arrange
    setupMockSuccess();

    // Act
    render(<Home />);

    // Assert
    const items = await screen.findAllByTestId(/category-item/i);
    expect(items).toHaveLength(2);
    expect(await screen.findByText('Appeteasers')).toBeInTheDocument();
  });

  test('should handle API failure gracefully', async () => {
    // Arrange: Mock a failure scenario
    mockGet.mockImplementation(() => 
      Promise.resolve({ data: { status: 'fail' } })
    );

    // Act
    render(<Home />);

    // Assert: Check that items are NOT rendered (or error message is shown)
    const items = screen.queryAllByTestId(/category-item/i);
    expect(items).toHaveLength(0);
  });
});
