import styles from "../styles/cityChooser.module.scss";
import cities from "public/static/cities.json";
import { FocusEventHandler, MouseEventHandler, useRef, useState } from "react";
import { useRouter } from "next/router";

const CityChooser = () => {

  const router = useRouter();
  const inputRef = useRef<HTMLButtonElement>(null);
  const [focused, setFocused] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Choose a city');

  const cityListButtonClickHandler = (name: string, lat: number, lon: number) => {
    setSelectedCity(name);
    router.push(`/?lat=${lat}&lon=${lon}`);
  };

  const buttonBlurHandler: FocusEventHandler<HTMLButtonElement> = () => {
    setFocused(false);
  }

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setFocused(!focused);
  }

  return (
    <div className={styles["main"]} >
      <button
        onClick={buttonClickHandler}
        onBlur={buttonBlurHandler}
        ref={inputRef}
        className={styles["main__btn"]}
      >
        <span className={styles["main__btn__text"]} >{selectedCity}</span>
        <img className={styles["main__btn__arrow"]} src="/images/arrow.svg" alt="arrowImage" />
      </button>
      <div className={styles[focused ? "main__expanded" : "main__hidden"]}>
        {cities.map((city) => (
          <button
            onClick={() => cityListButtonClickHandler(city.name, city.lat, city.lon)}
            key={city.lat}
            className={styles["main__expanded__btn"]}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityChooser;
