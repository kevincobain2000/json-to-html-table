import React, {useState, useEffect} from 'react'
import CodeMirror from 'react-codemirror';

import {JSONToHTMLTable} from '@kevincobain2000/json-to-html-table'
import ReactDOMServer from "react-dom/server";

export const App = () => {
  const handleChangeData = (data) => {
    setData(data)
  }

  const [data, setData] = useState(`{
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
  }`)

  useEffect(() => {
  }, [])
  const renderTable = () => {
    console.log("render")
    try {
      return <JSONToHTMLTable data={JSON.parse(data)} tableClassName="table table-condensed table-sm" />
    } catch (error) {
      return <div>Error in JSON</div>
    }
  }

  const options = {
    height: "70px",
    width: "100%",
    theme: "ambiance",
    lineNumbers: true,
    styleActiveLine: true,
    textWrapping: true,
    mode: "javascript",
  }

  return (
    <div className="container">
        <h1 className="text-center">
        Nested JSON to HTML Table Converter - Online tool
      </h1>
      <p className="text-center">
          <a className="text-center" href="https://medium.com/web-developer/convert-nested-json-to-html-table-react-javascript-be6611fed718">
            Medium - Convert Nested JSON to HTML Table — React, Javascript
          </a>
      </p>
      <p className="text-center">
        <a className="text-md" href="https://github.com/kevincobain2000/json-to-html-table">
            <i className="fa fa-code"></i>
            Github
        </a>
      </p>
      <br/>
      <p className="text-center">
        <a target="_blank" rel="noreferrer" href="https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html">Sample JSON</a>
      </p>
      <div className='pt-2 pb-2'>
        <CodeMirror value={data} onChange={handleChangeData} options={options} />
        <br/>
        <pre className="selectable prettyprint">
          {ReactDOMServer.renderToString(renderTable())}
        </pre>
        <br/>
        <pre className="prettyprint bg-white shadow-sm p-20"
          dangerouslySetInnerHTML={{
                    __html: ReactDOMServer.renderToString(renderTable())
        }}></pre>
      </div>
    </div>
  )
}
export default App;
