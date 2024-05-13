import React from "react";

const ArticleDetail = ({article}) => {
  return (
    <div>
      <main className="">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-2">
              {article.title}
            </h2>
        
          </div>

          <img
            src={article.imageUrl}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
            alt="Sunset in the mountains"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">
              {article.details}
            </p>

            
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="Author"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                   {article.name}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
