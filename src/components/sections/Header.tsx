
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const exploreItems = [
    "Culture",
    "Internet",
    "Lifestyle",
    "Society",
    "Creators",
    "Shop",
  ];

  return (
    <header className="w-full bg-[#222222] text-white">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/397d64219276bac060bda5070da7d42a35093d3601fc744e879d43a15822a86b?placeholderIfAbsent=true"
              alt="Vext Logo"
              className="h-12 self-start"
            />
          </Link>
          <nav className="flex items-center space-x-8">
            <div className="text-xl text-[#C6FF00] font-instrument">EXPLORE:</div>
            <ul className="flex items-center space-x-6">
              {exploreItems.map((item) => (
                <li key={item}>
                  <button className="text-lg uppercase hover:text-gray-300 transition-colors font-handjet">
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button className="text-lg font-handjet">&gt;&gt;</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
