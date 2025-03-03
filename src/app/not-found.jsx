import Image from 'next/image';
import { NotFoundPage } from 'nextra-theme-docs';

export default function NotFound() {
    return (
        <NotFoundPage content="Submit an issue about broken link" labels="bug">
            <h1>Page Not Found</h1>
            {/* <Image src="/404notfound.jpg" alt="Harambe" width={500} height={500} /> */}
        </NotFoundPage>
    );
}