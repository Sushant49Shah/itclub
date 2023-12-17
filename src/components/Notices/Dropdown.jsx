import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
// import notice from "./Notice.json";

function Dropdown() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  return (
    <div>

        {/* Component 1 */}
      <div className="text-white text-2xl p-4 relative flex flex-col">
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          className="border-4 border-white p-3 flex"
        >
          <h1>NOTICE 1: <span className=" text-blue-300 font-bold"> CTF Program </span></h1>
          {isOpen1 && <AiFillCaretUp size={30} className="ml-3 mr-1" />}
          {!isOpen1 && <AiFillCaretDown size={30} className="ml-3 mr-1" />}
        </button>
        {isOpen1 && (
          <div className="relative border-2 border-white w-full mt-[-2px] p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga suscipit aperiam, tempora consectetur veritatis possimus ducimus, sapiente odio voluptates reiciendis dignissimos dolores nostrum repudiandae voluptatum quasi ea dolorum doloribus?</p>
          </div>
        )}
      </div>
        {/* Component 2 */}
      <div className="text-white text-2xl p-4 relative flex flex-col">
        <button
          onClick={() => setIsOpen2((prev) => !prev)}
          className="border-4 border-white p-3 flex"
        >
          <h1>NOTICE 2  <span className=" text-blue-300 font-bold">: Lorem ipsum dolor sit amet consectetur... </span></h1>
          {isOpen2 && <AiFillCaretUp size={30} className="ml-3 mr-1" />}
          {!isOpen2 && <AiFillCaretDown size={30} className="ml-3 mr-1" />}
        </button>
        {isOpen2 && (
          <div className="relative border-2 border-white w-full mt-[-2px] p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga suscipit aperiam, tempora consectetur veritatis possimus ducimus, sapiente odio voluptates reiciendis dignissimos dolores nostrum repudiandae voluptatum quasi ea dolorum doloribus?</p>
          </div>
        )}
      </div>
        {/* Component 3 */}
      <div className="text-white text-2xl p-4 relative flex flex-col">
        <button
          onClick={() => setIsOpen3((prev) => !prev)}
          className="border-4 border-white p-3 flex"
        >
          <h1>NOTICE 3  <span className=" text-blue-300 font-bold">: Lorem ipsum dolor sit amet consectetur... </span></h1>
          {isOpen3 && <AiFillCaretUp size={30} className="ml-3 mr-1" />}
          {!isOpen3 && <AiFillCaretDown size={30} className="ml-3 mr-1" />}
        </button>
        {isOpen3 && (
          <div className="relative border-2 border-white w-full mt-[-2px] p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga suscipit aperiam, tempora consectetur veritatis possimus ducimus, sapiente odio voluptates reiciendis dignissimos dolores nostrum repudiandae voluptatum quasi ea dolorum doloribus?</p>
          </div>
        )}
      </div>
        {/* Component 4 */}
      <div className="text-white text-2xl p-4 relative flex flex-col">
        <button
          onClick={() => setIsOpen4((prev) => !prev)}
          className="border-4 border-white p-3 flex"
        >
          <h1>NOTICE 4  <span className=" text-blue-300 font-bold">: Lorem, ipsum dolor sit amet consectetur adipisicing... </span></h1>
          {isOpen4 && <AiFillCaretUp size={30} className="ml-3 mr-1" />}
          {!isOpen4 && <AiFillCaretDown size={30} className="ml-3 mr-1" />}
        </button>
        {isOpen4 && (
          <div className="relative border-2 border-white w-full mt-[-2px] p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga suscipit aperiam, tempora consectetur veritatis possimus ducimus, sapiente odio voluptates reiciendis dignissimos dolores nostrum repudiandae voluptatum quasi ea dolorum doloribus?</p>
          </div>
        )}
      </div>

    </div>
  );
}
export default Dropdown;




{/* Json file bata lerauna milena  */}
        {/* {!isOpen && (
          <div className="relative border-2 border-white w-full">
            {notice.map((item, index) => {
              const { NOTICE, contentLess, contentMore } = item;
              return (
                <div className="" key={index}>
                  <h1>{NOTICE}</h1>
                  <span className=" text-blue-300 font-bold">{contentLess}</span>
                  <span className=" text-blue-300 font-bold">{contentMore}</span>
                </div>
              );
            })}
          </div>
        )} */}