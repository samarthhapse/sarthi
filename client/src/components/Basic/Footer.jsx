import React from "react";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-gray-900 h-auto">
      <div className="max-width-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Open Source Project
          </h2>

          <p className="max-w-sm mx-auto mt-4 text-gray-400">
            Sarthi is an open source project.
          </p>
          <p className="max-w-sm mx-auto mt-0 text-gray-400">
            Feel free to{" "}
            <a
              className="text-white underline decoration-transparent transition ease-in-out hover:decoration-inherit"
              href="https://github.com/samarthhapse/sarthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              contribute to the project
            </a>
            .
          </p>
        </div>
        <div className="pt-8 mt-16 border-t flex gap-3 border-gray-800 sm:justify-between lg:mt-24">
        </div>
      </div>
    </footer>
  );
}
