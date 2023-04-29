'use client'; // Error components must be Client components
import Error404 from 'app/_components/CommonComp/Error';

export default function Error() {
    const subTitle = `The page you are looking for might have been removed had its name changed or is temporarily unavailable.`;
    return <Error404 title='404' subTitle={subTitle}></Error404>
}