const Table = (...tableHeaders) => {
    return (
        <table>
            <tr>
                {tableHeaders.forEach(title => {
                    console.log("item: ",title)
                })}
            </tr>
        </table>
    )
}

export default Table
