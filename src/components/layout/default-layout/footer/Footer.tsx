export const Footer = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-auto">
      <hr className="mb-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <span className="block text-sm sm:text-center text-gray-400">
        © 2023
        <a
          target="_blank"
          href="https://github.com/alejandro-fdez"
          className="hover:underline ml-2"
          rel="noreferrer"
        >
          Alejandro Fernández
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
