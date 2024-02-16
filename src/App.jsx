import accordionData from "./utils/constant";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(accordionData);
  const [isMultiopen, setIsMultiopen] = useState(false);

  const updateOpenStatus = (id) => {
    let open = false;

    if (!isMultiopen) {
      setData((prevData) => {
        return prevData.map((data) => {
          if (data.id == id) {
            open = data.isOpen;
            return { ...data, isOpen: !data.isOpen };
          } else {
            if (!open) {
              return { ...data, isOpen: false };
            } else {
              return { ...data };
            }
          }
        });
      });
    } else {
      setData((prevData) => {
        return prevData.map((data) => {
          if (data.id == id) {
            return { ...data, isOpen: !data.isOpen };
          } else {
            return { ...data };
          }
        });
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="Acc-container">
        <Accordion
          data={data}
          updateOpenStatus={updateOpenStatus}
          isMultiopen={isMultiopen}
          setIsMultiopen={setIsMultiopen}
        />
      </div>
    </div>
  );
}

export default App;
