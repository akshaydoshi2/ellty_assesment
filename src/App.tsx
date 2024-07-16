import { useState } from "react";
import "./App.css";
import { data, ListTileProps } from "./utils/utils";

function App() {
  const [selectedData, setSelectedData] = useState<string[]>([]);

  return (
    <div className="container">
      <p className="text">All Pages</p>
      <div className="divider"></div>
      <div className="scrollable">
        {data.map((e, index) => (
          <ListTile
            text={e}
            key={index}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
        ))}
      </div>
      <div className="divider"></div>
      <button className="button" disabled={selectedData.length===0}>Done</button>
    </div>
  );
}

function ListTile({ text, selectedData, setSelectedData }: ListTileProps) {
  return (
    <div className="listtile">
      <p className="text">{text}</p>
      <input
        type="checkbox"
        checked={selectedData.includes(text)}
        onChange={(_e) => {
          if(selectedData.includes(text)){
            setSelectedData((l:string[]) => l.filter((item:string) => item !== text));
          }else{
            setSelectedData((prevData:string[]) => [...prevData, text]);
          }
        }}
      />
    </div>
  );
}

export default App;
