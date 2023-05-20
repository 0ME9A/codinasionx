export default function Container({ style, children }: { style?: string, children: React.ReactNode }) {
    return (
        <div className={`pt-32  ${style}`}>
            {children}
        </div>
    )
}