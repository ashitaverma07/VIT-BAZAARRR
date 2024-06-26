import { color } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { red } from "tailwindcss/colors";
import data from "../components/message.json";
import Chat from "../components/Chat/ChatApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function KnowMore() {
  const location = useLocation();
  console.log(location.state.item_id);
  const [Data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const a = ["", "bad", "average", "good", "very good", "excellent"];

  const [isBotVisible, setIsBotVisible] = useState(false);

  const CallAboutPage = async () => {
    setIsFetching(true);
    console.log("Call about");
    try {
      console.log("tried");

      const res = await axios.get("http://localhost:5000/db");
      const object = await res.data;

      filtertags(object);

      setIsFetching(false);
      if (!res.status === 201) {
        const error = new Error(res.error);
        alert(
          "There seems to be some issue with your credentials. We are working on it."
        );
        throw error;
      }
    } catch (err) {
      console.log(err);
      console.log("caught error");
      setIsFetching(false);
    }
  };

  const filtertags = (object) => {
    const res = object.filter((currentValue) => {
      currentValue.list = currentValue.list.filter((currentVal) => {
        console.log(currentVal._id);
        console.log(location.state.item_id);
        console.log("space");
        return currentVal._id === location.state.item_id;
      });
      return currentValue.list.length !== 0;
    });
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    CallAboutPage();
  }, []);

  const [col, setCol] = useState("white");
  const updateColor = () => {
    let mess = "";
    if (col === "red") mess = "Removed From Wishlist";
    else mess = "Added To Wishlist";
    toast(mess);
    setCol(() => {
      if (col === "red") return "white";
      else return "red";
    });
  };
  // console.log(this.props);
  if (isFetching) {
    return <h1>Page is Loading</h1>;
  } else {
    return (
      <div className="relative">
        <div className=""></div>
        <ToastContainer />
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto ">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-contain object-top rounded border border-gray-200"
                src={Data[0].list[0].item_image}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {Data[0].name}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {Data[0].list[0].item_name}
                </h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">
                      {Data[0].list[0].item_condition} Condition
                    </span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p class="leading-relaxed pb-5 mb-5">
                  {Data[0].list[0].item_description}
                </p>

                <div class="flex border-b-2 border-gray-200 pb-5">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ₹{Data[0].list[0].item_price}
                  </span>
                  <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Report
                  </button>
                  <button
                    class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                    style={{ color: col }}
                    onClick={updateColor}
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <div className="my-5 border-b-2 border-gray-200 pb-5">
                  <div className=" text-xl font-semibold">Features</div>
                  <div className="mt-[2%]">
                    <ul className="list-disc list-outside px-[5%]">
                      <li>
                        The condition of this product is{" "}
                        {a[Data[0].list[0].item_condition]}.
                      </li>
                      <li>
                        The product is {Data[0].list[0].item_age} Months Old
                      </li>
                    </ul>
                  </div>
                </div>
{/*                 <button
                  className=""
                  onClick={() => setIsBotVisible(!isBotVisible)}
                >
                  <span className="bg-blue-500 rounded-xl px-4 py-1 text-white text-xl">
                    {" "}
                    Chat{" "}
                  </span>
                  <div
                    id="tars-fullpage-container"
                    class="tars-fullpage-container-class"
                  >
                    <iframe
                      id="tars-fullpage"
                      width="100%"
                      className={`mt-2 shadow-lg min-h-[400px] max-w-[450px] rounded-lg ${
                        isBotVisible ? "block" : "hidden"
                      }`}
                      height="100%"
                      frameborder="0"
                      allow="geolocation; microphone; camera; midi; encrypted-media;"
                      src="https://chatbot.hellotars.com/conv/PWIlnd/"
                    ></iframe>
                    <script
                      type="text/javascript"
                      src="https://tars-file-upload.s3.amazonaws.com/bulb/js/fullpage.js"
                    ></script>
                  </div>
                </button> */}
                <div>
                <Chat id={Data[0].list[0]._id} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default KnowMore;
