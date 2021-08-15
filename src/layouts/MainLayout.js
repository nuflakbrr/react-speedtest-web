const MainLayout = ({ children }) => {
  return (
    <div className="md:px-4 mx-auto sm:px-6 xl:px-0 flex flex-col h-screen">
      {children}
      <div className="flex-grow" />
      <footer className="p-5 border-t-2 border-opacity-20">
        <div>
          <p className="text-center text-gray-200 dark:text-white">
            © 2021 -{" "}
            <a href="https://www.instagram.com/kbrnugroho/" className="text-gray-200 dark:text-white">
              Naufal Akbar Nugroho
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
