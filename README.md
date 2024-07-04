# Ignite Call

Ignite Call is a web fullstack application designed to simplify and streamline scheduling and call management. This project leverages modern web technologies to provide an efficient and user-friendly experience.

## Features

- Schedule calls with ease
- Manage appointments and notifications
- User authentication and profile management
- Responsive design for mobile and desktop
- Integration with google calendar

## Tech Stack

- **Next.js**: A React framework for server-side rendering and static site generation
- **TypeScript**: A strongly typed programming language that builds on JavaScript
- **Prisma**: An ORM (Object-Relational Mapper) for database management
- **Next-Auth**: Authentication for Next.js applications
- **React Hook Form**: A library for managing form state in React
- **Axios**: A promise-based HTTP client for making API requests
- **ESLint**: A tool for identifying and fixing linting issues in code
- **Prettier**: A code formatter to ensure consistent style

## Getting Started

To get started with Ignite Call, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/glendson/ignite-call.git
    cd ignite-call
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/`: Contains the main source code for the application
- `public/`: Contains static files such as images and icons
- `prisma/`: Contains the database schema and migration files

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DATABASE_URL`: URL of your database
- `NEXTAUTH_URL`: URL for NextAuth.js
- `NEXT_PUBLIC_API_URL`: URL for the API

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the creators of Next.js, Prisma, NextAuth.js, and other libraries used in this project.
