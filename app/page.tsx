import { sql } from '@vercel/postgres';

export default async function Home() {
  const { rows } = await sql`SELECT * from users`;

  console.log({ rows });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter your dog name
          </label>
          <input
            type="text"
            id="dogName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
