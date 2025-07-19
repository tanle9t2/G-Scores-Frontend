function Note() {
    return (
        <div className="flex items-center justify-center gap-2 bg-yellow-100 text-yellow-800 border border-yellow-300 p-4 ">
            <span className="text-3xl">❗</span>
            <p className="text-3xl">
                At the time you're using it, the data may not have fully loaded yet.
            </p>
        </div>
    )
}

export default Note
