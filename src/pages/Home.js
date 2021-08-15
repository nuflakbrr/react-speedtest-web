import React from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { siteContext } from "../contexts/siteContexts";
import { useHistory } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const { setSiteData } = React.useContext(siteContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const url = React.useRef();
  const history = useHistory();
  const HandleCheck = async () => {
    setIsLoading(true);
    if (isError) setIsError(false);
    try {
      const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url.current?.value}&key=${API_KEY}`);
      setSiteData(response.data);
      setIsLoading(false);
      history.push(`/${url.current?.value}`);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex h-screen bg-gray-900">
        <section className="m-auto">
          <div className="container flex flex-col px-5 py-8 mx-auto lg:items-center">
            <div className="flex flex-col w-full mb-8 text-left lg:text-center justify-center">
              <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter text-gray-100 lg:w-5/6 sm:text-5xl title-font">Tes Kecepatan Website</h1>
              <p className="mx-auto text-base font-normal leading-relaxed text-gray-200 lg:w-5/6 text-center">Semakin cepat pemuatan website, semakin tinggi nilai website anda di penilaian Google.</p>
              <div className="mt-10" />
              {isError && (
                <div className="p-2 justify-center flex flex-row">
                  <div className="inline-flex items-center leading-none text-white rounded-lg p-2 shadow text-teal text-sm">
                    <span className="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">Gagal</span>
                    <span className="inline-flex px-2">Situs tidak ditemukan</span>
                  </div>
                </div>
              )}
              <div className="flex flex-col md:flex-row md:items-start w-full mx-auto justify-center lg:w-5/6">
                <div className="relative md:mr-4 text-left lg:w-full xl:w-1/2 md:w-full">
                  <input
                    type="text"
                    id="urlsite"
                    placeholder="Masukan URL Halaman Situs"
                    name="urlsite"
                    ref={url}
                    disabled={isLoading}
                    className="flex-grow w-full px-4 py-2 mb-4 md:mr-4 text-base text-black transition duration-650 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  />
                </div>
                <button
                  onClick={HandleCheck}
                  disabled={isLoading}
                  className={`${
                    isLoading && "cursor-not-allowed"
                  } mx-auto md:mx-0 w-32 text-center justify-center md:w-20 flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2`}
                >
                  {isLoading ? "Memuat" : "Cek"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
