const About = () => {
    return (
        <div className='bg-[#092540] flex flex-wrap items-center justify-center'>
            <div className='container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12'>
                <div className='h-2/4 sm:h-64 overflow-hidden'>
                    <img
                        className='w-full rounded-t'
                        src='https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='header-image'
                    />
                </div>
                <div className='flex justify-start px-5 -mt-12 mb-5'>
                    <span className='block relative h-32 w-32'>
                        <img
                            alt='profile'
                            src='https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png'
                            className='mx-auto object-cover rounded-full h-24 w-24 bg-white p-1'
                        />
                    </span>
                </div>
                <div className=''>
                    <div className='px-7 mb-8'>
                        <h2 className='text-3xl font-bold text-green-800 dark:text-gray-300'>
                            Shofwan Ahmad Syihab
                        </h2>
                        <p className='text-gray-400 mt-2 dark:text-gray-400'>
                            Software Developer
                        </p>
                        <p className='mt-2 text-gray-600 dark:text-gray-300'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Asperiores molestiae vitae odio non commodi
                            itaque quisquam incidunt doloribus fugit nesciunt.
                        </p>
                        <div className='justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=shofwanas12@gmail.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                shofwanas12@gmail.com
                            </a>
                        </div>
                        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mt-8'>
                            <button className='text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300'>
                                <a
                                    href='https://www.linkedin.com/in/shofwanasy/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center'
                                >
                                    <svg
                                        className='w-7 h-7 fill-current mr-3'
                                        role='img'
                                        viewBox='0 0 256 256'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <g>
                                            <path d='M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055'></path>
                                        </g>
                                    </svg>
                                    shofwanasy
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
