import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {


  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">AI Cover Letter Writer</h1>
        <p className="text-gray-700 mb-6">
          Our Chrome extension uses AI to help you craft the perfect cover letter for your next job application. Take the stress out of writing with our easy-to-use tool.
        </p>
        <a
          href="https://chrome.google.com/webstore/detail/ai-cover-letter-writer/unique-extension-id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-6 py-2 transition-colors"
        >
          Install   
        </a>
      </div>
    </div>
    </>
  )
}

export default App
