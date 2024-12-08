import axios from "axios";
import { TRANSACTION, PAY, CURRENCIES, URL_API } from "./consts.ts";

type categoryType = typeof TRANSACTION | typeof PAY | typeof CURRENCIES;

export const getAPIData = async (category : categoryType) => { 
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

export const setLocation = (name : string) => {
  window.location.pathname = name;
}