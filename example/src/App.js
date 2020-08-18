import React, {useState, useEffect} from 'react'

import {JSONToHTMLTable} from '@kevincobain2000/json-to-html-table'
import ReactDOMServer from "react-dom/server";

export const App = () => {
  const handleChangeData = (event) => {
  console.log('event :', event);
    console.log("handle change")
    let data
    try {
      data = JSON.parse(event.target.value)
    } catch (error) {
      data = {}
    }
    setData(data)
    console.log('data :', data);
    console.log('ReactDOMServer :', ReactDOMServer.renderToString(renderTable));
  }
  const [data, setData] = useState({
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
      {
        "batter":
          [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
          ]
      },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  })
  const renderTable = (
    <JSONToHTMLTable data={data} tableClassName="table table-condensed table-sm" />
  )

  return (
    <div className="container">
        <h1 class="text-center">
          Json to HTML Table Converter - Online tool
      </h1>
      <div className='pt-2 pb-2'>
        <textarea
          defaultValue={JSON.stringify(data)}
          onChange={handleChangeData}
          placeholder="Write or paste your code here..."
          className="text-md" id="textarea-code" cols="30" rows="10"></textarea>
        <br/>
        <br/>
        {renderTable}
      </div>
    </div>
  )
}
export default App;
