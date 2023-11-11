

const Title = ({subHadding, Hadding}) => {
    return (
        <div className=" text-center lg:w-1/3 mx-auto space-y-5 p-5">
            <h4 className="text-yellow-600">---{subHadding}---</h4>
            <h2 className=" border-y-4 py-4 px-8 text-3xl font-bold">{Hadding}</h2>
        </div>
    );
};

export default Title;