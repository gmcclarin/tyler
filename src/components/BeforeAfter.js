import Reveal from "./Reveal"

const BeforeAfter = () => {
    return (
        <div className="w-full flex bg-dark">
                <div className="w-1/2">
                    <img className="object-cover" alt="placeholder" src={pic1} />
                </div>
                <div className="w-1/2 m-10 flex justify-center items-center">
                    <Reveal>
                    <div className="flex justify-between">
                        <div className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. n culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="p-2">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                    </div>
                    </Reveal>
                </div>
            </div>
    )
}