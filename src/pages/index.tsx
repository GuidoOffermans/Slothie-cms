import { trpc } from '@utils/trpc';
import type { ReactElement } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';

const Home = () => {
	const { data, isLoading } = trpc.useQuery(['hello', { text: 'Guido' }]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1>Home Page</h1>
			<p>{data?.greeting}</p>
		</>
	);
};

Home.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Home;
