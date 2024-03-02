import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-2">
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
        </div>

        <div className="col-4">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
