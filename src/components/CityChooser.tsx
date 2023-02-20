import styles from "../styles/cityChooser.module.scss";
import cities from "public/static/cities.json";
import { ChangeEventHandler, FocusEventHandler, useRef, useState } from "react";
import { useRouter } from "next/router";

const CityChooser = () => {

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');


  const buttonClickHandler = (name: string, lat: number, lon: number) => {
    setSelectedCity(name);
    router.push(`/?lat=${lat}&lon=${lon}`);
  };

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedCity(e.target.value);
  };

  const inputFocusHandler: FocusEventHandler<HTMLInputElement> = () => {
    setFocused(true);
    setSelectedCity('');
  };

  const inputBlurHandler: FocusEventHandler<HTMLInputElement> = () => {
    setFocused(false);
  }

  return (
    <div className={styles["main"]}>
      <input
        value={selectedCity}
        onChange={inputChangeHandler}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
        ref={inputRef}
        className={styles["main__search-box"]}
      />
      <div className={styles[focused ? "main__expanded" : "main__hidden"]}>
        {cities.map((city) => (
          <button
            onClick={() => buttonClickHandler(city.name, city.lat, city.lon)}
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
