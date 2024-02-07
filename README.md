# Store API

This project is a simple Express.js API for filter store products.

## Getting Started

Follow the steps below to set up and run the project:

1. Create a `.env` file in the project root directory.

2. In the `.env` file, set the `MONGO_URI` variable to the MongoDB database connection string.

    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

3. Open your terminal and run the following commands:

    ```bash
    npm install
    npm start
    ```

This will install the required dependencies and start the server.

## Project Structure

The project is organized into the following directories:

- **controllers:** Contains the logic for handling HTTP requests.
- **db:** Manages the database connection .
- **middleware:** Includes middleware functions.
- **models:** Defines the data models for tasks.
- **routes:** Defines the API routes.
- **app.js:** The main entry point for the application.

## API Endpoints
- **GET /api/v1/products:** Get all products with query parameters.

### Query Parameters

- `featured`: Filter by featured status (boolean).
- `company`: Filter by company name.
- `name`: Filter by product name (case-insensitive regex).
- `sort`: (Not implemented in this function, but can be extended) Sort the results.
- `fields`: (Not implemented in this function, but can be extended) Specify fields to be returned in the response.
- `numericFilters`: Apply numeric filters for fields like price and rating.


## Contributing

Feel free to contribute by opening issues or submitting pull requests. Make sure to follow the existing code style and conventions.

## License

This project is from jhon smilga

