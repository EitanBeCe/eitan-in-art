const NavbarView = async () => {
    return (
        <header className="px-5 py-3 bg-white  shadow-sm font-work-sans bg-black/5 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800">
            <h1 className="max-sm:text-xl text-2xl text-center">Eitan's virtual Gallery and Shop GRADIENT</h1>

            <button>Delivery</button>
            <button>Prints</button>

            {/*<nav className="flex justify-between items-center">*/}
            {/*    <Link href="/public">*/}
            {/*        <Image src="/logo.png" alt="logo" width={144} height={30} />*/}
            {/*    </Link>*/}
            {/*</nav>*/}
        </header>
    );
};

export default NavbarView;