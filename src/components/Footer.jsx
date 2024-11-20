import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[rgb(33,33,33)] p-9 text-center text-white">
      <div className="flex justify-center space-x-6 mb-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-2xl hover:text-purple-600 transition duration-300"
        >
          <FaInstagram />
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-2xl hover:text-purple-600 transition duration-300"
        >
          <FaFacebook />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-2xl hover:text-purple-600 transition duration-300"
        >
          <FaYoutube />
        </a>
      </div>
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
