import axios from "axios";
import { URL_API } from "./consts";

export const getAPIData = async (category) => { 
    return await axios.get(
      `${URL_API}/${category}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-currency-token": "dasdiubasiob1=231231238913y4-n432r2nby83rt29",
        },
      }
    ).catch((error)=>{console.log(error)});
  };