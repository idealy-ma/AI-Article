interface HeaderProps {
    imageBg: string;
}

export default function Header(headerProps: HeaderProps) {
    // alert(headerProps.imageBg)
    return (
        <header className="i-header" style={{backgroundImage:`url(${headerProps.imageBg})`}}>
        </header>
    )
}