export default function NoRecord({ text, style }: { text?: string, style?: string }) {
    return (
        <h3 className={`text-center w-full py-5 ${style}`}>
            {text ? text : `No Record Found.`}
        </h3>
    )
}