import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
    fontFamily: 'Arial'
}
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

export default () => (
    <div style={layoutStyle}>
        <Link href="/">
            <a style={linkStyle} href="/">Home</a>
        </Link>
        <Link href="/posts">
            <a style={linkStyle} href="/posts">Posts</a>
        </Link>
    </div>
)