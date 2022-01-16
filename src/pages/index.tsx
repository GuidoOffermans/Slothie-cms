import type { ReactElement } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';

const Home = () => {
	return (
		<h1>Home Page</h1>
	);
};

Home.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;


export default Home;