import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            "Welcome to React":"Welcome to React and react-i18next",
            "Accept":"Accept",
            "Decline":"Decline",
            "English":"English",
            "Polish":"Polish",
            "Select your language":"Select your language",
            "Accept terms of conditions":"Accept terms of conditions",
            "Select currency to exchange":"Select currency to exchange",
            "Back":"Back",
            "Next":"Next",
            "Type here amount to exchange":"Type here amount to exchange",
            "Thank you for using our services":"Thank you for using our services",
            "Confirm value and currency":"Confirm value and currency",
            "Select method of payment":"Select method of payment",
            "Currency exchange":"Currency exchange",
            "Back to start page":"Back to start page",
        }
    },
    pl: {
        translation: {
            "Welcome to React":"Witaj w React i react-i18next",
            "Accept":"Akceptuj",
            "Decline":"Odrzuć",
            "English":"Angielski",
            "Polish":"Polski",
            "Select your language":"Wybierz swój język",
            "Accept terms of conditions":"Zaakceptuj warunki użytkowania",
            "Select currency to exchange":"Wybierz walutę do wymiany",
            "Back":"Wstecz",
            "Next":"Dalej",
            "Type here amount to exchange":"Podaj wartość do wymiany",
            "Thank you for using our services":"Dziękujemy za korzystanie z naszych usług",
            "Confirm value and currency":"Potwierdź kwotę i walutę",
            "Select method of payment":"Wybierz metodę płatności",
            "Currency exchange":"Wymiana walut",
            "Back to start page":"Powrót do strony głównej"
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;