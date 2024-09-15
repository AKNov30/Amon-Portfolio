import { BrowserRouter } from "react-router-dom";
import App from "../App";


function WrappedApp() {
  return (
    <BrowserRouter basename="/Amon-Portfolio">
        <App></App>
    </BrowserRouter>
  )
}

export default WrappedApp