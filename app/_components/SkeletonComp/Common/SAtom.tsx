export default function SAtom({ style = "w-[100%] h-8" }: { style?: string }) {
    return (
        <div className={`rounded-xl lg:rounded-2xl bg-gradient-to-l to-lightII/20 via-very-light/20 dark:to-dark dark:via-dark/20 animate-pulse ${style}`}></div>
    )
}