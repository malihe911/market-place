"use client";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 MyApp. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-300">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="text-blue-300">
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
