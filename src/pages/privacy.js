import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import styles from '../styles/home.module.css'

const privacy = () => {
    const [ accepted, setAccepted ] = useState(false);

  return (
    <div className={`${styles.navbar} bg-gray-100 px-10 py-5`}>
        <Link href='/'>
          <div className="w-[120px] h-[90px] relative rounded-3xl ">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              fill={true}
            />
          </div>
        </Link>
        <div className='mx-24 lg:mx-8 xs:mx-5 xtra:mx-3'>
            <h1 className='text-center text-3xl font-semibold mt-3 uppercase mb-10'>Privacy Policy</h1>
            <h1 className='font-bold mb-5'>Last Updated: September 6, 2023</h1>
            <h1 className='text-center mb-10'>Thank you for choosing Keza Quiz as your partner in personal development and the acquisition of indispensable life skills. At Keza Quiz, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data. By using the Keza Quiz mobile application ("the App"), you consent to the practices described in this Privacy Policy.</h1>
                <div>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`1. Information We Collect`}</h1>
                    <h1 className='mb-2'>{`We may collect the following types of information when you use the App:`}</h1>
                    <ul className='ml-3'>
                        <li>
                            <span className='font-bold'>Personal Information: </span>We do not collect personally identifiable information such as your name, address, or contact information.
                        </li>
                        <li>
                            <span className='font-bold'>Usage Information: </span>We collect data about how you interact with the App, including quiz performance, preferences, and device information.
                        </li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`2. How We Use Your Information`}</h1>
                    <h1 className='mb-2'>{`We use the information we collect for the following purposes:`}</h1>
                    <ul className='ml-3'>
                        <li>
                            <span className='font-bold'>Instant Marking: </span>We use your quiz performance data to provide immediate feedback and insights into your performance.
                        </li>
                        <li>
                            <span className='font-bold'>App Improvement: </span>We analyze usage patterns to enhance the App's user experience and educational content.
                        </li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`3. Data Security`}</h1>
                    <h1 className='mb-2'>{`Your data security is important to us. We employ reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`4. Multilingual Support`}</h1>
                    <h1 className='mb-2'>{`To provide quizzes in multiple languages, we may collect language preferences from users. This information is used solely for language selection purposes.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`5. Third-Party Services`}</h1>
                    <h1 className='mb-2'>{`The App may contain links to third-party websites or services for additional learning resources. We are not responsible for the privacy practices of these third-party services.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`6. Accessibility`}</h1>
                    <h1 className='mb-2'>{`Our Privacy Policy is accessible through a standard web browser without any special plugins or handlers. It is available on an active and visible URL.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`7. Non-Editable Policy`}</h1>
                    <h1 className='mb-2'>{`This Privacy Policy is non-editable to ensure the integrity and accuracy of its content.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`8. Single Governing Privacy Policy`}</h1>
                    <h1 className='mb-2'>{`Our Privacy Policy is a single governing document that applies to all users of the App and is available within the App and on our website.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`9. Identification of Keza Quiz`}</h1>
                    <h1 className='mb-2'>{`This Privacy Policy clearly identifies Keza Quiz as the entity responsible for the App.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4 xs:text-sm font-bold'>{`Contact Us`}</h1>
                    <h1 className='mb-2'>{`If you have any questions or concerns about this Privacy Policy or our data practices please contact us at,`} <a className='text-blue-500' href="dopeinitiativesltd@gmail.com">dopeinitiativesltd@gmail.com</a></h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-2'>{`By using the App, you acknowledge that you have read and agree to this Privacy Policy. We may update this Privacy Policy from time to time, and the updated version will be posted on our website and within the App. It is your responsibility to review this Privacy Policy periodically for any changes.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-2'>{`Download Keza Quiz and embark on a transformative journey towards personal growth, enriched knowledge, and heightened decision-making capabilities. With instant marking, multilingual support, and an intuitive interface, Keza Quiz illuminates the path to a more empowered future. Remember: knowledge is the key, and Keza Quiz is your guide.`}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-2 font-bold'>{`This Privacy Policy is effective as of the date last updated above.`}</h1>
                </div>
            </div>
    </div>
  )
}

export default privacy