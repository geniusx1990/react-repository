import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
            <h1>We cannot found this page</h1>
            <Link to="/">GO HOME</Link>
        </>
    );
}
export default NotFoundPage;
