export default function Container({ style, children }: { style?: string, children: React.ReactNode }) {
    return (
        <div className={`pt-32 bg-gradient-to-bl from-very-light/80 via-very-light to-very-light dark:from-very-dark/80 dark:via-very-dark dark:to-very-dark ${style}`}>
            {children}
        </div>
    )
}