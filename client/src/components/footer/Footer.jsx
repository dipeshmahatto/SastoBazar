import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto py-14 px-6">
          <div className="flex gap-4 justify-evenly">
            <div className="max-w-96">
              <a href="#" >
                <img src="../../src/assets/images/logo.png" alt="" className="h-12" />
              </a>
              <p className="mt-6 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non deleniti expedita? Iure aperiam ab recusandae, cumque debitis dolores expedita temporibus dicta quae iusto necessitatibus? Eius adipisci perferendis
              </p>
            </div>

            <div className="flex gap-8">
                <div className="">
                  <h5 className="font-bold mb-3">Top Categories</h5>
                  <ul>
                    <li><a href="#">Mens Boot</a></li>
                    <li><a href="#">Womens Boot</a></li>
                    <li><a href="#">Womens Boot</a></li>
                  </ul>
                </div>
                <div className="lg:col-span-2 col-span-11">
                  <h5 className="font-bold mb-3">Top Categories</h5>
                  <ul>
                    <li><a href="#">Mens Boot</a></li>
                    <li><a href="#">Womens Boot</a></li>
                    <li><a href="#">Womens Boot</a></li>
                  </ul>
                </div>
                <div className="lg:col-span-2 col-span-1">
                  <h5 className="font-bold mb-3">Top Categories</h5>
                  <ul>
                    <li><a href="#">Mens Boot</a></li>
                    <li><a href="#">Womens Boot</a></li>
                    <li><a href="#">Womens Boot</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
