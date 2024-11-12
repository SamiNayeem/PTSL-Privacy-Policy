// pages/privacy-policy.js

import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Privacy Policy for PTSL-TTS
        </h1>
        <p className="text-gray-700 mb-4">
          At Prime Tech Solutions Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our <strong>PTSL-TTS</strong> mobile application. By using the app, you agree to the collection and use of information in accordance with this policy.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information Collection and Use</h2>
        <p className="text-gray-700 mb-4">
          We collect the following information to provide and improve our services:
        </p>
        <ul className="list-inside list-disc text-gray-700 mb-4">
          <li><strong>Personal Data:</strong> When you use the app, we may ask you to provide certain personally identifiable information, such as your name, employee ID, and attendance data, to help us identify and authenticate you.</li>
          <li><strong>Usage Data:</strong> We collect information on how the app is accessed and used. This may include device information, IP address, operating system version, and other diagnostic data to improve the app’s performance and functionality.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Use of Data</h2>
        <p className="text-gray-700 mb-4">
          We use the collected data for the following purposes:
        </p>
        <ul className="list-inside list-disc text-gray-700 mb-4">
          <li>To provide and maintain the app’s functionality.</li>
          <li>To monitor and analyze usage and improve the app’s features.</li>
          <li>To manage attendance and leave applications.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We value your privacy and employ reasonable security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Data Retention</h2>
        <p className="text-gray-700 mb-4">
          We retain your personal data only for as long as necessary to provide the app’s services. Once your data is no longer needed, we will delete it in accordance with our internal data retention policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Sharing of Data</h2>
        <p className="text-gray-700 mb-4">
          We do not share your personal data with third parties, except where necessary to provide the services or comply with legal obligations. We may share your data with trusted service providers that assist us in operating the app, but they are obligated to keep your data confidential.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Your Data Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to:
        </p>
        <ul className="list-inside list-disc text-gray-700 mb-4">
          <li>Access, update, or delete your personal data.</li>
          <li>Object to the processing of your personal data.</li>
          <li>Request the transfer of your data to another service provider.</li>
        </ul>
        <p>If you wish to exercise any of these rights, please contact us using the information provided below.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Children's Privacy</h2>
        <p className="text-gray-700 mb-4">
          The app is intended for use by employees of Prime Tech Solutions Ltd. and is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal data from a child under 13, we will take steps to delete that information.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any updates.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy or the app, please contact us at:
        </p>
        <div className="text-gray-700">
          <p><strong>Phone:</strong> +8802-8189807</p>
          <p><strong>Mobile:</strong> +880-1755-603300</p>
          <p><strong>Email:</strong> <a href="mailto:info@primetechbd.com" className="text-blue-500">info@primetechbd.com</a></p>
          <p><strong>Customer Care:</strong> <a href="mailto:cc@primetechbd.com" className="text-blue-500">cc@primetechbd.com</a></p>
          <p><strong>Corporate Office:</strong> Prime Tech Solutions Ltd., 13, Kazi Nazrul Islam Avenue, T. K. Bhaban (7th Floor), Dhaka -1215, Bangladesh.</p>
          <p><strong>Website:</strong> <a href="http://www.primetechbd.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">www.primetechbd.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy