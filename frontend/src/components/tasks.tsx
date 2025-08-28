
const tasks = () => {
    return (
        <div className="flex flex-col gap-4 border bg-custom-blue border-primary rounded-lg p-4">
            <h1 className="font-bold text-3xl">Tasks</h1>
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Task 1</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Task 2</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Task 3</span>
                </div>
            </div>
        </div>
    )
}

export default tasks