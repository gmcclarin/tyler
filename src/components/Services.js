const Services = () => {
    return (
        <div className="flex w-full my-48">
            <div className="w-1/2 mx-10">SERVICES</div>
            <div className="w-1/2 mx-10">
                <div className="w-full flex justify-between border-b-2 border-t-2 py-5">
                    <div className="mx-10">Trimming</div>
                    {/* needs to be a expandable button! use state */}
                    <div className="mx-10 text-2xl">+</div>
                </div>
            </div>
        </div>
    )
};

export default Services;