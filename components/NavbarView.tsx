const NavbarView = async () => {
    return (
        <header className="px-5 py-3 shadow-sm bg-black/5 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800">
        {/*<header className="px-5 py-3">*/}
            <h1 className="max-sm:text-xl text-2xl text-center">Eitan's virtual Gallery and Shop</h1>

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