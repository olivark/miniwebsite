import Link from 'next/link'

import './_styles.scss'

const Index = () => (
    <div className="xxx">
        <h1>My supa dupa website</h1>
        <Link href="/about">
            <a>About me</a>
        </Link>
        <Link href="/contact">
            <a>Contact me</a>
        </Link>
        <Link href="/more">
            <a>More of me</a>
        </Link>
    </div>
)

export default Index
