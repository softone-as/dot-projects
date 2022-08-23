const Footer = () => {
    return (
        <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800'>
            <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                © 2022{' '}
                <a href='#' className='hover:underline'>
                    iNews™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;
